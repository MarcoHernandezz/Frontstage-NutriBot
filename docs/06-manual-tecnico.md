# Manual Técnico - Frontstage NutriBot MVP

## 1. Descripción técnica

Frontstage NutriBot es una aplicación web construida con React, Vite y TypeScript.

El proyecto implementa una interfaz de chat, una Mock API y un sistema visual de estados cognitivos basado en el perfil activo recibido en el contrato JSON.

## 2. Tecnologías utilizadas

- React
- Vite
- TypeScript
- CSS
- Git
- GitHub
- Mock API local

## 3. Requisitos de instalación

Se requiere:

- Node.js 20 o superior
- npm
- Git
- Navegador web moderno

## 4. Instalación en Linux

```bash
git clone https://github.com/MarcoHernandezz/Frontstage-NutriBot.git
cd Frontstage-NutriBot
npm install
npm run dev
5. Instalación en Windows

Abrir PowerShell y ejecutar:

git clone https://github.com/MarcoHernandezz/Frontstage-NutriBot.git
cd Frontstage-NutriBot
npm install
npm run dev
6. Comandos principales
Ejecutar en desarrollo
npm run dev
Compilar para producción
npm run build
Previsualizar build
npm run preview
7. Estructura del proyecto
src/
├── components/
│   ├── chat/
│   │   ├── ChatWindow.tsx
│   │   ├── LoadingIndicator.tsx
│   │   ├── MessageBubble.tsx
│   │   └── PromptInput.tsx
│   ├── cognitive/
│   │   ├── CognitiveAvatar.tsx
│   │   ├── CognitiveEnergyBar.tsx
│   │   └── CognitiveStatePanel.tsx
│   └── dev/
│       └── DevMockPanel.tsx
├── services/
│   └── nutriBotApi.ts
├── types/
│   └── nutriBot.ts
├── utils/
│   └── promptEvaluator.ts
├── App.tsx
└── main.tsx
8. Componentes principales
ChatWindow

Componente principal del chat.

Responsabilidades:

Manejar historial de mensajes.
Enviar prompts.
Conectar con Mock API.
Manejar loading.
Manejar cooldown.
Integrar Panel DevMock.
PromptInput

Componente del campo de entrada.

Responsabilidades:

Permitir texto multilínea.
Enviar mensaje con botón.
Permitir Ctrl + Enter.
Bloquear input durante loading o cooldown.
MessageBubble

Componente para mostrar mensajes del usuario y del sistema.

LoadingIndicator

Componente visual para indicar que NutriBot está procesando.

CognitiveStatePanel

Panel lateral que muestra el perfil cognitivo activo.

CognitiveAvatar

Representación visual del Tamagotchi Cognitivo.

CognitiveEnergyBar

Barra visual de esfuerzo o energía cognitiva.

DevMockPanel

Herramienta interna para forzar estados cognitivos durante pruebas.

9. Contrato JSON

La Mock API devuelve una estructura como la siguiente:

{
  "respuestaTexto": "Texto de respuesta de NutriBot",
  "metadatosCognitivos": {
    "perfilActivo": "GUIA",
    "esfuerzoDetectado": 92,
    "desgloseRubrica": {
      "longitudTokens": 24,
      "contextoGeneral": 1,
      "iteracion": 1,
      "tono": "neutral",
      "anclajeContextoLocal": 1
    }
  }
}
10. Perfiles permitidos

El sistema reconoce:

GUIA
ESPEJO_SARCASTICO
RESISTENCIA
11. Mock API

La Mock API se encuentra en:

src/services/nutriBotApi.ts

Su función principal es:

sendPromptToNutriBot(prompt: string)

Esta función simula una respuesta asíncrona y genera metadatos cognitivos.

12. Evaluador de prompts

El evaluador se encuentra en:

src/utils/promptEvaluator.ts

Evalúa características básicas como:

Cantidad de palabras.
Presencia de contexto.
Presencia de pregunta.
Longitud del texto.
13. Flujo general
Usuario escribe prompt.
PromptInput envía el texto.
ChatWindow agrega mensaje del usuario.
Se activa LoadingIndicator.
Mock API genera respuesta.
Se agrega mensaje de NutriBot.
Se actualiza CognitiveStatePanel.
Si el perfil es RESISTENCIA, se activa cooldown de 5 segundos.
14. Panel DevMock

El Panel DevMock permite forzar manualmente los perfiles cognitivos.

Puede abrirse desde el botón DevMock o con el atajo:

Ctrl + Shift + D

Permite probar:

GUIA
ESPEJO_SARCASTICO
RESISTENCIA
15. Buenas prácticas de desarrollo
Trabajar en ramas separadas.
Hacer commits pequeños.
Ejecutar npm run build antes de subir cambios.
No subir node_modules.
No subir archivos .env reales.
Mantener documentación actualizada.

