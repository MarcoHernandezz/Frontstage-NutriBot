# Plan de Pruebas - Frontstage NutriBot MVP

## 1. Objetivo

Validar que el MVP de Frontstage NutriBot cumpla con las funciones principales solicitadas para el Equipo A.

## 2. Alcance

Las pruebas cubren:

- Interfaz de chat.
- Input multilínea.
- Historial de conversación.
- Estados de carga.
- Mock API.
- Contrato JSON.
- Estados cognitivos.
- Cooldown de resistencia.
- Panel DevMock.
- Diseño responsivo.

## 3. Casos de prueba

| ID | Prueba | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|
| CP-01 | Ejecutar proyecto | Ejecutar npm install y npm run dev | El proyecto abre en localhost:5173 | Pendiente |
| CP-02 | Compilar proyecto | Ejecutar npm run build | El build termina sin errores | Pendiente |
| CP-03 | Input multilínea | Escribir varias líneas en el textarea | El texto conserva saltos de línea | Pendiente |
| CP-04 | Enviar prompt | Escribir prompt y presionar Enviar | El mensaje aparece en el historial | Pendiente |
| CP-05 | Ctrl + Enter | Escribir prompt y usar Ctrl + Enter | El mensaje se envía correctamente | Pendiente |
| CP-06 | Loading | Enviar prompt | Aparece indicador de carga | Pendiente |
| CP-07 | Respuesta Mock API | Enviar prompt válido | NutriBot responde con texto simulado | Pendiente |
| CP-08 | Perfil RESISTENCIA | Enviar "hazme una dieta" | Se muestra RESISTENCIA y esfuerzo bajo | Pendiente |
| CP-09 | Cooldown | Enviar prompt deficiente | La interfaz se bloquea 5 segundos | Pendiente |
| CP-10 | Perfil GUIA | Enviar prompt largo con contexto | Se muestra GUIA y esfuerzo alto | Pendiente |
| CP-11 | Perfil ESPEJO | Enviar prompt medio | Se muestra ESPEJO_SARCASTICO | Pendiente |
| CP-12 | Panel DevMock | Presionar botón DevMock | Se abre el panel interno | Pendiente |
| CP-13 | Atajo DevMock | Presionar Ctrl + Shift + D | El panel se abre o cierra | Pendiente |
| CP-14 | Forzar GUIA | Usar botón Forzar GUIA | La interfaz cambia a GUIA | Pendiente |
| CP-15 | Forzar ESPEJO | Usar botón Forzar ESPEJO | La interfaz cambia a ESPEJO_SARCASTICO | Pendiente |
| CP-16 | Forzar RESISTENCIA | Usar botón Forzar RESISTENCIA | Se activa cooldown y estilo rojo | Pendiente |
| CP-17 | Limpiar estado forzado | Presionar Limpiar estado forzado | Se elimina el override manual | Pendiente |
| CP-18 | Responsive | Abrir en pantalla móvil | La interfaz se adapta correctamente | Pendiente |

## 4. Evidencia recomendada

Para cada prueba importante se recomienda guardar:

- Captura de pantalla.
- Descripción breve del resultado.
- Fecha de ejecución.
- Rama o commit probado.

## 5. Criterio de aceptación general

El MVP se considera funcional si:

- El proyecto compila sin errores.
- El chat funciona.
- La Mock API responde.
- Los perfiles cognitivos se visualizan correctamente.
- El cooldown funciona.
- El Panel DevMock permite probar estados.
- La interfaz es usable en escritorio y móvil.

