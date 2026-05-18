import { useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const demoPrompts = [
  {
    id: "resistencia",
    label: "Probar RESISTENCIA",
    description: "Prompt corto y sin contexto",
    value: "hazme una dieta"
  },
  {
    id: "espejo",
    label: "Probar ESPEJO",
    description: "Prompt con intención, pero incompleto",
    value: "Necesito una dieta para un estudiante."
  },
  {
    id: "guia",
    label: "Probar GUIA",
    description: "Prompt completo con contexto",
    value:
      "Necesito una dieta semanal para un estudiante universitario de 21 años, con poco tiempo para cocinar, presupuesto limitado y objetivo de comer más saludable durante clases. ¿Puedes ayudarme con un plan sencillo?"
  }
];

export function PromptInput({ onSubmit, isLoading }: PromptInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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

  function handleDemoPrompt(prompt: string) {
    setValue(prompt);

    window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 0);
  }

  return (
    <form className="prompt-input" onSubmit={handleSubmit}>
      <div className="prompt-input__demo">
        <div>
          <p className="eyebrow">Modo demo</p>
          <strong>Prompts de prueba rápida</strong>
        </div>

        <div className="prompt-input__demo-buttons">
          {demoPrompts.map((prompt) => (
            <button
              key={prompt.id}
              type="button"
              className={`demo-prompt demo-prompt--${prompt.id}`}
              onClick={() => handleDemoPrompt(prompt.value)}
              disabled={isLoading}
              title={prompt.description}
            >
              {prompt.label}
            </button>
          ))}
        </div>
      </div>

      <label htmlFor="prompt">Escribe tu prompt con contexto</label>

      <textarea
        ref={textareaRef}
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
