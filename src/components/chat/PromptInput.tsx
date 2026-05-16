import { useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export function PromptInput({ onSubmit, isLoading }: PromptInputProps) {
  const [value, setValue] = useState("");

  const canSubmit = value.trim().length > 0 && !isLoading;

  function submitPrompt() {
    const prompt = value.trim();

    if (!prompt || isLoading) {
      return;
    }

    onSubmit(prompt);
    setValue("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitPrompt();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      submitPrompt();
    }
  }

  return (
    <form className="prompt-input" onSubmit={handleSubmit}>
      <label htmlFor="prompt">Escribe tu prompt con contexto</label>

      <textarea
        id="prompt"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ejemplo: Necesito ayuda para estructurar una dieta semanal para un estudiante universitario..."
        disabled={isLoading}
        rows={5}
      />

      <div className="prompt-input__footer">
        <small>Enter agrega una nueva línea. Ctrl + Enter envía el mensaje.</small>
        <button type="submit" disabled={!canSubmit}>
          {isLoading ? "Procesando..." : "Enviar prompt"}
        </button>
      </div>
    </form>
  );
}
