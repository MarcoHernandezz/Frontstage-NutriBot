export function LoadingIndicator() {
  return (
    <div className="loading-indicator" aria-live="polite">
      <span className="loading-indicator__dot" />
      <span className="loading-indicator__dot" />
      <span className="loading-indicator__dot" />
      <p>NutriBot está analizando tu contexto...</p>
    </div>
  );
}
