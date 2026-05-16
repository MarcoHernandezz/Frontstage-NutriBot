import { useEffect, useMemo, useState } from "react";
import { CognitiveStatePanel } from "../cognitive/CognitiveStatePanel";
import { sendPromptToNutriBot } from "../../services/nutriBotApi";
import type { ChatMessage } from "../../types/nutriBot";
import { LoadingIndicator } from "./LoadingIndicator";
import { MessageBubble } from "./MessageBubble";
import { PromptInput } from "./PromptInput";

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
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

  const lastMetadata = useMemo(() => {
    return [...messages].reverse().find((message) => message.metadata)?.metadata;
  }, [messages]);

  const isBlocked = cooldownSeconds > 0;

  useEffect(() => {
    if (cooldownSeconds <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCooldownSeconds((currentSeconds) => Math.max(currentSeconds - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [cooldownSeconds]);

  async function handleSubmit(prompt: string) {
    if (isBlocked) {
      return;
    }

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
    <section className={`chat-window ${lastMetadata ? `chat-window--${lastMetadata.perfilActivo.toLowerCase()}` : ""}`}>
      <div className="chat-window__main">
        <header className="chat-window__header">
          <div>
            <p className="eyebrow">Frontstage NutriBot</p>
            <h2>Chat estructurado</h2>
          </div>
          <span className="chat-window__status">MVP Equipo A</span>
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

      <CognitiveStatePanel metadata={lastMetadata} cooldownSeconds={cooldownSeconds} />
    </section>
  );
}
