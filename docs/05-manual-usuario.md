# Manual de Usuario - Frontstage NutriBot MVP

## 1. Introducción

Frontstage NutriBot es una interfaz web tipo chat diseñada para ayudar al usuario a escribir solicitudes mejor estructuradas.

El sistema evalúa el nivel de esfuerzo del prompt y responde visualmente mediante un Tamagotchi Cognitivo.

## 2. Objetivo del sistema

El objetivo del MVP es permitir que el usuario:

- Escriba prompts con contexto.
- Reciba retroalimentación simulada.
- Visualice el perfil cognitivo activo.
- Comprenda si su solicitud fue clara, incompleta o deficiente.

## 3. Acceso al sistema

Para usar el sistema en modo local, se debe abrir la siguiente dirección en el navegador:

http://localhost:5173/

## 4. Pantalla principal

La pantalla principal contiene:

- Título del proyecto.
- Área de chat estructurado.
- Input multilínea para escribir prompts.
- Panel lateral de estado cognitivo.
- Barra de energía cognitiva.
- Vista del último contrato JSON.
- Botón DevMock para pruebas internas.

## 5. Cómo escribir un prompt

El usuario debe escribir una solicitud clara, incluyendo:

- Contexto.
- Objetivo.
- Detalles importantes.
- Restricciones o condiciones.
- Pregunta concreta.

Ejemplo de prompt deficiente:

Hazme una dieta

Ejemplo de prompt mejor estructurado:

Necesito una dieta semanal para un estudiante universitario de 21 años, con poco tiempo para cocinar, presupuesto limitado y objetivo de comer más saludable durante clases. ¿Puedes ayudarme con un plan sencillo?

## 6. Cómo enviar un mensaje

El usuario puede:

- Escribir en el área de texto.
- Usar Enter para agregar una nueva línea.
- Usar Ctrl + Enter para enviar.
- Presionar el botón Enviar prompt.

## 7. Perfiles cognitivos

### GUIA

Aparece cuando el prompt está bien estructurado.

Características:

- Energía alta.
- Color visual verde.
- Respuesta positiva.
- El sistema puede ayudar de forma más útil.

### ESPEJO_SARCASTICO

Aparece cuando el prompt tiene intención, pero falta contexto.

Características:

- Energía media.
- Color visual amarillo.
- Respuesta de retroalimentación.
- El sistema sugiere mejorar el prompt.

### RESISTENCIA

Aparece cuando el prompt es muy pobre o demasiado corto.

Características:

- Energía baja.
- Color visual rojo.
- Bloqueo temporal de 5 segundos.
- El sistema pide reformular la solicitud.

## 8. Panel DevMock

El Panel DevMock es una herramienta interna para pruebas.

Permite forzar manualmente:

- GUIA
- ESPEJO_SARCASTICO
- RESISTENCIA

También puede abrirse con:

Ctrl + Shift + D

## 9. Recomendaciones de uso

Para obtener mejores respuestas, el usuario debe evitar prompts muy cortos y escribir solicitudes con suficiente información.

