import type { ChatMessage } from "../../types/nutriBot";

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <article className={`message-bubble ${isUser ? "message-bubble--user" : "message-bubble--assistant"}`}>
      <div className="message-bubble__header">
        <strong>{isUser ? "Tú" : "NutriBot"}</strong>
        <span>{new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
      </div>

      <p className="message-bubble__content">{message.content}</p>

      {message.metadata && (
        <div className="message-bubble__metadata">
          <span>Perfil: {message.metadata.perfilActivo}</span>
          <span>Esfuerzo: {message.metadata.esfuerzoDetectado}/100</span>
        </div>
      )}
    </article>
  );
}
