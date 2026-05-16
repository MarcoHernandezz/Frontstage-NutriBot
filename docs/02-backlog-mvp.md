# Backlog del MVP

## Epica 1: Interfaz de chat

### HU-01 Input multilinea
Como estudiante, quiero escribir prompts largos en un campo multilinea para explicar mejor mi contexto.

Criterios de aceptacion:
- El input permite varias lineas.
- El envio se hace con boton.
- El campo se limpia despues de enviar correctamente.

### HU-02 Historial de conversacion
Como estudiante, quiero ver mis mensajes y las respuestas del sistema para seguir la conversacion.

Criterios de aceptacion:
- Los mensajes del usuario se muestran diferenciados.
- Las respuestas del sistema se muestran diferenciadas.
- El historial se actualiza dinamicamente.

### HU-03 Estado de carga
Como estudiante, quiero ver que NutriBot esta procesando mi mensaje.

Criterios de aceptacion:
- Se muestra un indicador de carga.
- El boton de envio se desactiva temporalmente.
- El estado desaparece al recibir respuesta.

## Epica 2: Mock API y contrato JSON

### HU-04 Mock API
Como desarrollador, quiero simular la respuesta de NutriBot para probar el frontend sin depender del backend real.

### HU-05 Contrato JSON
Como desarrollador, quiero recibir una respuesta estructurada para mapear texto, perfil activo y metricas cognitivas.

## Epica 3: Estados cognitivos

- HU-06 Perfil GUIA.
- HU-07 Perfil ESPEJO_SARCASTICO.
- HU-08 Perfil RESISTENCIA.

## Epica 4: Herramientas de desarrollo

- HU-09 Panel DevMock.

## Epica 5: Documentacion

- HU-10 Manual de usuario.
- HU-11 Manual tecnico.
