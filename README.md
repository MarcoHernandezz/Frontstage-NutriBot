# Frontstage NutriBot MVP

Frontstage NutriBot es una interfaz web modular para un chatbot educativo basado en el concepto de **Tamagotchi Cognitivo**.

Este repositorio corresponde al trabajo del **Equipo A: Arquitectura de Interfaz y Conectividad**, encargado de la lógica conversacional, el manejo del estado del chat y la integración temporal con una Mock API.

## Objetivo del MVP

Desarrollar una interfaz funcional que permita:

- Escribir prompts estructurados en un input multilínea.
- Visualizar historial de conversación.
- Mostrar estados de carga mientras el sistema responde.
- Conectarse temporalmente a una Mock API.
- Recibir respuestas bajo un contrato JSON definido.
- Cambiar el estado visual según el perfil cognitivo activo.
- Probar los estados cognitivos mediante un Panel DevMock.

## Perfiles cognitivos

El frontend reconoce los siguientes perfiles:

- `GUIA`
- `ESPEJO_SARCASTICO`
- `RESISTENCIA`

## Tecnologías

- React
- Vite
- TypeScript
- CSS
- Git
- GitHub

## Requisitos

Se recomienda usar:

- Node.js 20 o superior
- npm
- Git
- Navegador web moderno

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/MarcoHernandezz/Frontstage-NutriBot.git
cd Frontstage-NutriBot
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:5173/
```

Compilar para producción:

```bash
npm run build
```

## Estructura principal

```txt
src/
├── components/
│   ├── chat/
│   ├── cognitive/
│   └── dev/
├── services/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## Avances implementados

- Configuración inicial del proyecto con React, Vite y TypeScript.
- Estructura modular de carpetas.
- Chat base con input multilínea.
- Historial dinámico de conversación.
- Estados de carga.
- Mock API temporal.
- Contrato JSON base.
- Perfiles cognitivos: `GUIA`, `ESPEJO_SARCASTICO` y `RESISTENCIA`.
- Panel lateral de estado cognitivo.
- Barra de energía cognitiva.
- Cooldown de 5 segundos para `RESISTENCIA`.
- Panel DevMock para forzar estados durante pruebas.
- Documentación inicial del MVP.

## Documentación disponible

- `docs/01-plan-semana-1.md`
- `docs/02-backlog-mvp.md`
- `docs/03-contrato-json.md`
- `docs/04-panel-devmock.md`
- `docs/05-manual-usuario.md`
- `docs/06-manual-tecnico.md`
- `docs/07-plan-pruebas.md`
- `docs/08-matriz-cumplimiento.md`

## Panel DevMock

El Panel DevMock es una herramienta interna para pruebas.

Permite forzar manualmente los estados:

- `GUIA`
- `ESPEJO_SARCASTICO`
- `RESISTENCIA`

Puede abrirse desde el botón **DevMock** o con el atajo:

```txt
Ctrl + Shift + D
```

## Flujo de ramas

- `main`: versión estable.
- `develop`: integración del proyecto.
- `feature/*`: nuevas funcionalidades.
- `docs/*`: documentación.
- `chore/*`: configuración y mantenimiento.

## Estado actual

El proyecto se encuentra en fase MVP funcional. Actualmente incluye chat estructurado, Mock API, estados cognitivos, cooldown de resistencia, Panel DevMock y documentación base.

## Liga pública del MVP

El MVP puede consultarse en GitHub Pages:

https://MarcoHernandezz.github.io/Frontstage-NutriBot/
