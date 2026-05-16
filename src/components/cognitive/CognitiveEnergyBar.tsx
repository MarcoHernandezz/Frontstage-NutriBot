interface CognitiveEnergyBarProps {
  effort: number;
}

export function CognitiveEnergyBar({ effort }: CognitiveEnergyBarProps) {
  const normalizedEffort = Math.min(Math.max(effort, 0), 100);

  return (
    <div className="energy-card">
      <span>Energía cognitiva</span>
      <strong>{normalizedEffort}/100</strong>

      <div className="energy-bar">
        <div style={{ width: `${normalizedEffort}%` }} />
      </div>
    </div>
  );
}
