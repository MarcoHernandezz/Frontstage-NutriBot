import { useMemo, useState } from "react";
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

  const lastMetadata = useMemo(() => {
    return [...messages].reverse().find((message) => message.metadata)?.metadata;
  }, [messages]);

  async function handleSubmit(prompt: string) {
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
    <section className="chat-window">
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

        <PromptInput onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      <aside className="chat-window__side-panel">
        <p className="eyebrow">Estado cognitivo</p>
        <h3>{lastMetadata?.perfilActivo ?? "SIN_ANALISIS"}</h3>

        <div className="energy-card">
          <span>Esfuerzo detectado</span>
          <strong>{lastMetadata?.esfuerzoDetectado ?? 0}/100</strong>
          <div className="energy-bar">
            <div style={{ width: `${lastMetadata?.esfuerzoDetectado ?? 0}%` }} />
          </div>
        </div>

        <div className="json-preview">
          <p>Último contrato JSON</p>
          <pre>
            {lastMetadata
              ? JSON.stringify(lastMetadata, null, 2)
              : "Aún no hay metadatos cognitivos."}
          </pre>
        </div>
      </aside>
    </section>
  );
}
