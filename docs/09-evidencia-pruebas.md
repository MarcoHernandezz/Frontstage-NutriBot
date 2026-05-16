# Evidencia de Pruebas - Frontstage NutriBot MVP

## 1. Objetivo

Registrar la evidencia de ejecución de pruebas funcionales del MVP de Frontstage NutriBot, con el propósito de comprobar que la interfaz desarrollada cumple con los requerimientos principales del Equipo A: Arquitectura de Interfaz y Conectividad.

## 2. Entorno de prueba

Las pruebas fueron realizadas en un entorno local de desarrollo.

| Elemento | Descripción |
|---|---|
| Sistema operativo | CachyOS Linux |
| Navegador | Firefox / navegador local |
| Framework | React |
| Empaquetador | Vite |
| Lenguaje | TypeScript |
| Gestor de paquetes | npm |
| Rama probada | develop |
| Modo de ejecución | Desarrollo local |

## 3. Comandos ejecutados

### Instalación de dependencias

```bash
npm install
```

### Ejecución en desarrollo

```bash
npm run dev
```

### Compilación para producción

```bash
npm run build
```

## 4. Resultado de compilación

El proyecto fue compilado correctamente mediante el comando:

```bash
npm run build
```

Resultado obtenido:

```txt
✓ built
```

Esto confirma que el proyecto no presenta errores de compilación en TypeScript ni errores de construcción con Vite.

## 5. Pruebas funcionales realizadas

| ID | Prueba | Entrada / Acción | Resultado esperado | Estado |
|---|---|---|---|---|
| CP-01 | Ejecutar proyecto | Ejecutar `npm run dev` | El proyecto abre en `http://localhost:5173/` | Aprobado |
| CP-02 | Compilar proyecto | Ejecutar `npm run build` | El build termina sin errores | Aprobado |
| CP-03 | Input multilínea | Escribir varias líneas en el campo de texto | El input conserva saltos de línea | Aprobado |
| CP-04 | Enviar prompt | Escribir un mensaje y presionar el botón de envío | El mensaje aparece en el historial | Aprobado |
| CP-05 | Enviar con teclado | Usar `Ctrl + Enter` | El mensaje se envía correctamente | Aprobado |
| CP-06 | Estado de carga | Enviar un prompt | Se muestra indicador de carga mientras NutriBot responde | Aprobado |
| CP-07 | Historial de conversación | Enviar varios prompts | Se conservan los mensajes anteriores | Aprobado |
| CP-08 | Mock API | Enviar un prompt | NutriBot responde con datos simulados | Aprobado |
| CP-09 | Contrato JSON | Revisar el panel lateral | Se visualizan metadatos cognitivos en formato JSON | Aprobado |
| CP-10 | Perfil RESISTENCIA | Enviar `hazme una dieta` | Se muestra el perfil `RESISTENCIA` con esfuerzo bajo | Aprobado |
| CP-11 | Cooldown | Activar `RESISTENCIA` | La interfaz se bloquea temporalmente durante 5 segundos | Aprobado |
| CP-12 | Perfil GUIA | Enviar un prompt largo y contextualizado | Se muestra el perfil `GUIA` con esfuerzo alto | Aprobado |
| CP-13 | Perfil ESPEJO_SARCASTICO | Enviar un prompt de contexto medio | Se muestra el perfil `ESPEJO_SARCASTICO` | Aprobado |
| CP-14 | Panel DevMock | Presionar botón `DevMock` | Se abre el panel interno de pruebas | Aprobado |
| CP-15 | Forzar GUIA | Usar botón `Forzar GUIA` | La interfaz cambia visualmente al estado `GUIA` | Aprobado |
| CP-16 | Forzar ESPEJO | Usar botón `Forzar ESPEJO` | La interfaz cambia al estado `ESPEJO_SARCASTICO` | Aprobado |
| CP-17 | Forzar RESISTENCIA | Usar botón `Forzar RESISTENCIA` | Se activa estilo rojo y cooldown de 5 segundos | Aprobado |
| CP-18 | Limpiar estado forzado | Presionar `Limpiar estado forzado` | Se elimina el estado manual aplicado desde DevMock | Aprobado |
| CP-19 | Atajo DevMock | Presionar `Ctrl + Shift + D` | El panel DevMock se abre o se cierra | Aprobado |
| CP-20 | Diseño responsivo | Reducir el ancho de la ventana | La interfaz se adapta a pantallas pequeñas | Aprobado |

## 6. Prompts utilizados durante las pruebas

### Prompt para probar RESISTENCIA

```txt
hazme una dieta
```

Resultado esperado:

- Perfil activo: `RESISTENCIA`
- Esfuerzo detectado bajo.
- Interfaz con estilo de alerta.
- Cooldown temporal de 5 segundos.

### Prompt para probar ESPEJO_SARCASTICO

```txt
Necesito una dieta para un estudiante.
```

Resultado esperado:

- Perfil activo: `ESPEJO_SARCASTICO`
- Esfuerzo detectado medio.
- Retroalimentación indicando que falta más contexto.

### Prompt para probar GUIA

```txt
Necesito una dieta semanal para un estudiante universitario de 21 años, con poco tiempo para cocinar, presupuesto limitado y objetivo de comer más saludable durante clases. ¿Puedes ayudarme con un plan sencillo?
```

Resultado esperado:

- Perfil activo: `GUIA`
- Esfuerzo detectado alto.
- Respuesta positiva.
- Interfaz con estilo visual favorable.

## 7. Evidencias visuales recomendadas

Se recomienda guardar capturas de pantalla dentro de la carpeta:

```txt
docs/evidencias/
```

Capturas sugeridas:

1. Pantalla inicial del sistema.
2. Chat funcionando con historial.
3. Estado `RESISTENCIA`.
4. Cooldown activo de 5 segundos.
5. Estado `GUIA`.
6. Estado `ESPEJO_SARCASTICO`.
7. Panel DevMock abierto.
8. DevMock forzando `RESISTENCIA`.
9. Vista responsive o reducida.

## 8. Resultados generales

Durante las pruebas realizadas, el sistema demostró que:

- La aplicación puede ejecutarse localmente.
- La aplicación compila correctamente.
- El chat permite escribir prompts multilínea.
- El historial de conversación funciona.
- La Mock API responde de manera asíncrona.
- El contrato JSON se genera y visualiza correctamente.
- Los perfiles cognitivos se reflejan en la interfaz.
- El estado `RESISTENCIA` activa fricción mediante cooldown.
- El Panel DevMock permite forzar estados para pruebas internas.
- La interfaz es usable en escritorio y adaptable a pantallas pequeñas.

## 9. Conclusión

El MVP de Frontstage NutriBot cumple con las funciones principales solicitadas para el Equipo A.

El sistema implementa una interfaz de chat estructurada, conexión temporal mediante Mock API, visualización de metadatos cognitivos, manejo de perfiles `GUIA`, `ESPEJO_SARCASTICO` y `RESISTENCIA`, así como un Panel DevMock para pruebas manuales.

La aplicación se encuentra en un estado funcional para revisión, demostración y futuras integraciones con un backend o modelo de lenguaje real.
OFE
cat > docs/09-evidencia-pruebas.md <<'EOF'
