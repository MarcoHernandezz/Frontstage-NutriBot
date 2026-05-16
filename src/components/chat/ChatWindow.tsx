import { useEffect, useMemo, useState } from "react";
import { CognitiveStatePanel } from "../cognitive/CognitiveStatePanel";
import { DevMockPanel } from "../dev/DevMockPanel";
import { sendPromptToNutriBot } from "../../services/nutriBotApi";
import type { ChatMessage, MetadatosCognitivos, PerfilActivo } from "../../types/nutriBot";
import { LoadingIndicator } from "./LoadingIndicator";
import { MessageBubble } from "./MessageBubble";
import { PromptInput } from "./PromptInput";

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createForcedMetadata(perfilActivo: PerfilActivo): MetadatosCognitivos {
  const effortByPerfil: Record<PerfilActivo, number> = {
    GUIA: 92,
    ESPEJO_SARCASTICO: 48,
    RESISTENCIA: 8
  };

  const esfuerzoDetectado = effortByPerfil[perfilActivo];

  return {
    perfilActivo,
    esfuerzoDetectado,
    desgloseRubrica: {
      longitudTokens: perfilActivo === "RESISTENCIA" ? 3 : 24,
      contextoGeneral: perfilActivo === "GUIA" ? 1 : 0,
      iteracion: 1,
      tono: perfilActivo === "RESISTENCIA" ? "imperativo" : "neutral",
      anclajeContextoLocal: perfilActivo === "GUIA" ? 1 : 0
    }
  };
}

const initialMessage: ChatMessage = {
  id: "initial-message",
  role: "assistant",
  content:
    "Hola, soy NutriBot. Escribe una solicitud con contexto, objetivo y detalles. Mientras mejor estructures tu prompt, mejor será mi respuesta.",
  createdAt: new Date().toISOString()
};

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const [isDevPanelOpen, setIsDevPanelOpen] = useState(false);
  const [forcedMetadata, setForcedMetadata] = useState<MetadatosCognitivos | undefined>();

  const lastMetadata = useMemo(() => {
    return [...messages].reverse().find((message) => message.metadata)?.metadata;
  }, [messages]);

  const activeMetadata = forcedMetadata ?? lastMetadata;
  const isBlocked = cooldownSeconds > 0;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "d") {
        event.preventDefault();
        setIsDevPanelOpen((currentValue) => !currentValue);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (cooldownSeconds <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCooldownSeconds((currentSeconds) => Math.max(currentSeconds - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [cooldownSeconds]);

  function handleForcePerfil(perfilActivo: PerfilActivo) {
    const metadata = createForcedMetadata(perfilActivo);

    setForcedMetadata(metadata);

    if (perfilActivo === "RESISTENCIA") {
      setCooldownSeconds(5);
      return;
    }

    setCooldownSeconds(0);
  }

  function handleClearOverride() {
    setForcedMetadata(undefined);
    setCooldownSeconds(0);
  }

  async function handleSubmit(prompt: string) {
    if (isBlocked) {
      return;
    }

    setForcedMetadata(undefined);

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: prompt,
      createdAt: new Date().toISOString()
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendPromptToNutriBot(prompt);

      const assistantMessage: ChatMessage = {
        id: createMessageId(),
        role: "assistant",
        content: response.respuestaTexto,
        metadata: response.metadatosCognitivos,
        createdAt: new Date().toISOString()
      };

      setMessages((currentMessages) => [...currentMessages, assistantMessage]);

      if (response.metadatosCognitivos.perfilActivo === "RESISTENCIA") {
        setCooldownSeconds(5);
      }
    } catch (error) {
      console.error(error);

      const errorMessage: ChatMessage = {
        id: createMessageId(),
        role: "assistant",
        content: "Ocurrió un error al procesar tu solicitud. Intenta de nuevo.",
        createdAt: new Date().toISOString()
      };

      setMessages((currentMessages) => [...currentMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className={`chat-window ${activeMetadata ? `chat-window--${activeMetadata.perfilActivo.toLowerCase()}` : ""}`}>
        <div className="chat-window__main">
          <header className="chat-window__header">
            <div>
              <p className="eyebrow">Frontstage NutriBot</p>
              <h2>Chat estructurado</h2>
            </div>

            <div className="chat-window__actions">
              <button
                type="button"
                className="devmock-trigger"
                onClick={() => setIsDevPanelOpen(true)}
              >
                DevMock
              </button>

              <span className="chat-window__status">MVP Equipo A</span>
            </div>
          </header>

          <div className="chat-window__messages" aria-live="polite">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}

            {isLoading && <LoadingIndicator />}
          </div>

          {isBlocked && (
            <div className="blocked-banner">
              NutriBot entró en modo RESISTENCIA. Espera {cooldownSeconds}s antes de enviar otro prompt.
            </div>
          )}

          <PromptInput onSubmit={handleSubmit} isLoading={isLoading || isBlocked} />
        </div>

        <CognitiveStatePanel metadata={activeMetadata} cooldownSeconds={cooldownSeconds} />
      </section>

      <DevMockPanel
        isOpen={isDevPanelOpen}
        currentMetadata={activeMetadata}
        cooldownSeconds={cooldownSeconds}
        onForcePerfil={handleForcePerfil}
        onClearOverride={handleClearOverride}
        onClose={() => setIsDevPanelOpen(false)}
      />
    </>
  );
}
