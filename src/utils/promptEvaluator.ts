import type { PerfilActivo } from "../types/nutriBot";

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function calculateEffort(prompt: string): number {
  const words = countWords(prompt);
  const hasContext = /porque|para|necesito|objetivo|contexto|ejemplo|quiero/i.test(prompt);
  const hasQuestion = prompt.includes("?") || /como|cómo|que|qué|por que|por qué|donde|dónde|cuando|cuándo/i.test(prompt);

  let score = 0;

  if (words >= 10) score += 25;
  if (words >= 25) score += 25;
  if (hasContext) score += 25;
  if (hasQuestion) score += 15;
  if (prompt.length > 120) score += 10;

  return Math.min(score, 100);
}

export function getPerfilActivo(effort: number): PerfilActivo {
  if (effort >= 70) return "GUIA";
  if (effort >= 35) return "ESPEJO_SARCASTICO";
  return "RESISTENCIA";
}
