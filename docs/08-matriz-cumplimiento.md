# Matriz de Cumplimiento de Requerimientos

## Proyecto

Frontstage NutriBot MVP

## Equipo

Equipo A - Arquitectura de Interfaz y Conectividad

## Matriz

| Requerimiento | Descripción | Implementación | Estado |
|---|---|---|---|
| Input multilínea | Área para escribir prompts largos y estructurados | PromptInput.tsx | Cumplido |
| Saltos de línea | Enter permite escribir varias líneas | PromptInput.tsx | Cumplido |
| Envío controlado | Ctrl + Enter o botón envía el prompt | PromptInput.tsx | Cumplido |
| Historial de conversación | Renderizado dinámico de mensajes | ChatWindow.tsx | Cumplido |
| Burbujas diferenciadas | Mensajes del usuario y sistema con estilos distintos | MessageBubble.tsx | Cumplido |
| Estados de carga | Indicador visual mientras responde el sistema | LoadingIndicator.tsx | Cumplido |
| Mock API | Servicio simulado para respuestas temporales | nutriBotApi.ts | Cumplido |
| Contrato JSON | Respuesta con respuestaTexto y metadatosCognitivos | nutriBot.ts / nutriBotApi.ts | Cumplido |
| perfilActivo | Mapeo de GUIA, ESPEJO_SARCASTICO y RESISTENCIA | nutriBot.ts | Cumplido |
| esfuerzoDetectado | Medición de esfuerzo en escala 0 a 100 | promptEvaluator.ts | Cumplido |
| Desglose de rúbrica | Longitud, contexto, iteración, tono y anclaje local | nutriBotApi.ts | Cumplido |
| GUIA | Estado positivo para prompts bien estructurados | CognitiveStatePanel.tsx | Cumplido |
| ESPEJO_SARCASTICO | Estado de fricción media | CognitiveStatePanel.tsx | Cumplido |
| RESISTENCIA | Estado de fricción alta | CognitiveStatePanel.tsx | Cumplido |
| Cooldown | Bloqueo temporal de 5 segundos en RESISTENCIA | ChatWindow.tsx | Cumplido |
| Energía cognitiva | Barra visual basada en esfuerzoDetectado | CognitiveEnergyBar.tsx | Cumplido |
| Tamagotchi Cognitivo | Avatar visual según perfil activo | CognitiveAvatar.tsx | Cumplido |
| Panel DevMock | Forzar estados para pruebas internas | DevMockPanel.tsx | Cumplido |
| Diseño responsivo | Adaptación a pantallas pequeñas | App.css | Parcialmente cumplido |
| Control de versiones | Uso de Git/GitHub con ramas | GitHub | Cumplido |
| Componentes aislados | Separación modular por carpetas | src/components | Cumplido |

## Observaciones

El MVP implementa la parte correspondiente al Equipo A y agrega una versión mínima funcional del Tamagotchi Cognitivo para demostrar integración visual.

El backend definitivo y la conexión real con un modelo LLM quedan fuera del alcance de esta primera fase, ya que se trabaja con Mock API temporal.

