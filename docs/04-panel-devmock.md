# Panel DevMock

## Objetivo

El Panel DevMock es una herramienta interna para probar manualmente los estados cognitivos del Frontstage NutriBot sin depender de la Mock API ni de una respuesta real del backend.

## Acceso

El panel puede abrirse desde el botón:

DevMock

También puede abrirse con el atajo:

Ctrl + Shift + D

## Estados que permite forzar

- GUIA
- ESPEJO_SARCASTICO
- RESISTENCIA

## Uso durante pruebas

El panel permite validar que la interfaz responda correctamente ante cada estado cognitivo.

### GUIA

Debe mostrar una interfaz positiva, con energía alta y borde visual verde.

### ESPEJO_SARCASTICO

Debe mostrar una interfaz de fricción media, con energía intermedia y borde visual amarillo.

### RESISTENCIA

Debe mostrar una interfaz de fricción alta, energía baja, borde visual rojo y bloqueo temporal de 5 segundos.

## Justificación

Esta herramienta ayuda a auditar la reacción visual del frontend sin depender del backend definitivo, lo cual facilita las pruebas del MVP.
