export type PerfilActivo = "GUIA" | "ESPEJO_SARCASTICO" | "RESISTENCIA";

export interface DesgloseRubrica {
  longitudTokens: number;
  contextoGeneral: number;
  iteracion: number;
  tono: string;
  anclajeContextoLocal: number;
}

export interface MetadatosCognitivos {
  perfilActivo: PerfilActivo;
  esfuerzoDetectado: number;
  desgloseRubrica: DesgloseRubrica;
}

export interface NutriBotResponse {
  respuestaTexto: string;
  metadatosCognitivos: MetadatosCognitivos;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  metadata?: MetadatosCognitivos;
  createdAt: string;
}
