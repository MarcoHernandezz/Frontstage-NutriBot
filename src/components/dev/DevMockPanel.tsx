import type { MetadatosCognitivos, PerfilActivo } from "../../types/nutriBot";

interface DevMockPanelProps {
  isOpen: boolean;
  currentMetadata?: MetadatosCognitivos;
  cooldownSeconds: number;
  onForcePerfil: (perfil: PerfilActivo) => void;
  onClearOverride: () => void;
  onClose: () => void;
}

const perfilLabels: Record<PerfilActivo, string> = {
  GUIA: "Forzar GUIA",
  ESPEJO_SARCASTICO: "Forzar ESPEJO",
  RESISTENCIA: "Forzar RESISTENCIA"
};

export function DevMockPanel({
  isOpen,
  currentMetadata,
  cooldownSeconds,
  onForcePerfil,
  onClearOverride,
  onClose
}: DevMockPanelProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <section className="devmock-panel" aria-label="Panel DevMock">
      <header className="devmock-panel__header">
        <div>
          <p className="eyebrow">Herramienta interna</p>
          <h3>Panel DevMock</h3>
        </div>

        <button type="button" onClick={onClose} aria-label="Cerrar Panel DevMock">
          ×
        </button>
      </header>

      <p className="devmock-panel__description">
        Este panel permite forzar estados cognitivos sin depender de la Mock API.
        Úsalo para pruebas, auditoría visual y exposición.
      </p>

      <div className="devmock-panel__buttons">
        {(Object.keys(perfilLabels) as PerfilActivo[]).map((perfil) => (
          <button
            key={perfil}
            type="button"
            className={`devmock-panel__button devmock-panel__button--${perfil.toLowerCase()}`}
            onClick={() => onForcePerfil(perfil)}
          >
            {perfilLabels[perfil]}
          </button>
        ))}
      </div>

      <button type="button" className="devmock-panel__clear" onClick={onClearOverride}>
        Limpiar estado forzado
      </button>

      <div className="devmock-panel__status">
        <strong>Estado actual</strong>
        <span>{currentMetadata?.perfilActivo ?? "SIN_ANALISIS"}</span>
      </div>

      <div className="devmock-panel__status">
        <strong>Cooldown</strong>
        <span>{cooldownSeconds > 0 ? `${cooldownSeconds}s` : "Inactivo"}</span>
      </div>

      <div className="devmock-panel__json">
        <strong>Metadatos actuales</strong>
        <pre>
          {currentMetadata
            ? JSON.stringify(currentMetadata, null, 2)
            : "Aún no hay metadatos cognitivos."}
        </pre>
      </div>

      <small className="devmock-panel__hint">
        Atajo: Ctrl + Shift + D
      </small>
    </section>
  );
}
