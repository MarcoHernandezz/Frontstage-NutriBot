import type { NutriBotResponse } from "../types/nutriBot";
import { calculateEffort, countWords, getPerfilActivo } from "../utils/promptEvaluator";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function sendPromptToNutriBot(prompt: string): Promise<NutriBotResponse> {
  await delay(900);

  const esfuerzoDetectado = calculateEffort(prompt);
  const perfilActivo = getPerfilActivo(esfuerzoDetectado);
  const longitudTokens = countWords(prompt);

  const respuestas = {
    GUIA: "Buen contexto. Ahora si puedo ayudarte de forma util y estructurada.",
    ESPEJO_SARCASTICO: "Vas bien, pero todavia falta contexto. Dame mas detalles para evitar una respuesta generica.",
    RESISTENCIA: "Prompt demasiado pobre. Reformula tu solicitud con contexto, objetivo y detalles minimos."
  };

  return {
    respuestaTexto: respuestas[perfilActivo],
    metadatosCognitivos: {
      perfilActivo,
      esfuerzoDetectado,
      desgloseRubrica: {
        longitudTokens,
        contextoGeneral: esfuerzoDetectado >= 50 ? 1 : 0,
        iteracion: 1,
        tono: prompt.length < 30 ? "imperativo" : "neutral",
        anclajeContextoLocal: /nutribot|servicio|proyecto|usuario|estudiante/i.test(prompt) ? 1 : 0
      }
    }
  };
}
