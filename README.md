# Frontstage NutriBot MVP

Frontstage NutriBot es una interfaz web modular para un chatbot educativo basado en el concepto de Tamagotchi Cognitivo.

Este repositorio corresponde al trabajo del Equipo A: Arquitectura de Interfaz y Conectividad.

## Objetivo del MVP

- Escribir prompts estructurados en un input multilinea.
- Visualizar historial de conversacion.
- Mostrar estados de carga mientras el sistema responde.
- Conectarse temporalmente a una Mock API.
- Recibir respuestas bajo un contrato JSON definido.
- Cambiar el estado visual segun el perfil cognitivo activo.

## Perfiles cognitivos

El frontend debe mapear estos valores:

- GUIA
- ESPEJO_SARCASTICO
- RESISTENCIA

## Tecnologias

- React
- Vite
- TypeScript
- Fetch API o Mock API

## Instalacion

1. Clonar el repositorio:

git clone https://github.com/MarcoHernandezz/Frontstage-NutriBot.git

2. Entrar al proyecto:

cd Frontstage-NutriBot

3. Instalar dependencias:

npm install

4. Ejecutar en desarrollo:

npm run dev

5. Compilar para produccion:

npm run build

## Estructura planeada

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

## Documentacion

La documentacion del proyecto se encuentra en la carpeta docs.

## Flujo de ramas

- main: version estable.
- develop: integracion del proyecto.
- feature/*: nuevas funcionalidades.
- docs/*: documentacion.
- chore/*: configuracion y mantenimiento.

## Estado actual

Proyecto en fase inicial de configuracion y desarrollo del MVP.

## Avances implementados

- Configuración inicial del proyecto con React, Vite y TypeScript.
- Estructura modular de carpetas.
- Chat base con input multilínea.
- Historial dinámico de conversación.
- Estados de carga.
- Mock API temporal.
- Contrato JSON base.
- Perfiles cognitivos: GUIA, ESPEJO_SARCASTICO y RESISTENCIA.
- Panel lateral de estado cognitivo.
- Barra de energía cognitiva.
- Cooldown de 5 segundos para RESISTENCIA.
- Panel DevMock para forzar estados durante pruebas.
- Documentación inicial del MVP.

## Documentos disponibles

- docs/01-plan-semana-1.md
- docs/02-backlog-mvp.md
- docs/03-contrato-json.md
- docs/04-panel-devmock.md
- docs/05-manual-usuario.md
- docs/06-manual-tecnico.md
- docs/07-plan-pruebas.md
- docs/08-matriz-cumplimiento.md

