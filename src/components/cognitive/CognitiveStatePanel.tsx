import type { MetadatosCognitivos } from "../../types/nutriBot";
import { CognitiveAvatar } from "./CognitiveAvatar";
import { CognitiveEnergyBar } from "./CognitiveEnergyBar";

interface CognitiveStatePanelProps {
  metadata?: MetadatosCognitivos;
  cooldownSeconds: number;
}

export function CognitiveStatePanel({ metadata, cooldownSeconds }: CognitiveStatePanelProps) {
  const perfilActivo = metadata?.perfilActivo ?? "ESPEJO_SARCASTICO";
  const effort = metadata?.esfuerzoDetectado ?? 0;
  const isBlocked = cooldownSeconds > 0;

  return (
    <aside className={`chat-window__side-panel state-panel state-panel--${perfilActivo.toLowerCase()}`}>
      <p className="eyebrow">Estado cognitivo</p>
      <h3>{perfilActivo}</h3>

      <CognitiveAvatar perfilActivo={perfilActivo} isBlocked={isBlocked} />

      <CognitiveEnergyBar effort={effort} />

      {isBlocked && (
        <div className="cooldown-alert">
          <strong>Interfaz bloqueada temporalmente</strong>
          <span>Espera {cooldownSeconds}s para volver a enviar un prompt.</span>
        </div>
      )}

      <div className="json-preview">
        <p>Último contrato JSON</p>
        <pre>
          {metadata
            ? JSON.stringify(metadata, null, 2)
            : "Aún no hay metadatos cognitivos."}
        </pre>
      </div>
    </aside>
  );
}
