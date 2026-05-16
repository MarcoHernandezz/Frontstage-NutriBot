# Contrato JSON - Frontstage NutriBot

## Objetivo

Definir la estructura estandar de respuesta que el frontend debe recibir desde la Mock API o desde una API real futura.

## Estructura esperada

{
  "respuestaTexto": "Texto de respuesta de NutriBot",
  "metadatosCognitivos": {
    "perfilActivo": "ESPEJO_SARCASTICO",
    "esfuerzoDetectado": 35,
    "desgloseRubrica": {
      "longitudTokens": 12,
      "contextoGeneral": 0,
      "iteracion": 1,
      "tono": "imperativo",
      "anclajeContextoLocal": 0
    }
  }
}

## Campos principales

### respuestaTexto
Texto que NutriBot muestra al usuario como respuesta principal.

### metadatosCognitivos
Objeto que contiene informacion util para modificar la interfaz.

### perfilActivo
Determina el comportamiento visual del sistema.

Valores permitidos:
- GUIA
- ESPEJO_SARCASTICO
- RESISTENCIA

### esfuerzoDetectado
Numero de 0 a 100 que representa el nivel de esfuerzo detectado en el prompt.

## Uso en frontend

El frontend debe usar perfilActivo para modificar avatar, colores, barra de energia, estados de bloqueo y comportamiento de la interfaz.
