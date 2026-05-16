# Publicación del MVP en GitHub Pages

## 1. Objetivo

Documentar la publicación del MVP de Frontstage NutriBot en GitHub Pages para permitir su revisión desde una liga pública.

## 2. Liga pública del proyecto

El proyecto se encuentra publicado en:

https://MarcoHernandezz.github.io/Frontstage-NutriBot/

## 3. Plataforma de despliegue

La publicación se realizó mediante:

- GitHub Pages
- GitHub Actions
- Vite
- Rama base: develop

## 4. Workflow utilizado

El despliegue automático se configuró mediante el archivo:

```txt
.github/workflows/deploy.yml
5. Comportamiento del deploy

Cada vez que se actualiza la rama develop, GitHub Actions ejecuta el proceso de build y publica el contenido generado en la carpeta dist.

6. Configuración de Vite

Para que el proyecto funcione correctamente en GitHub Pages, se configuró el parámetro base en:

base: '/Frontstage-NutriBot/'
7. Resultado

El MVP quedó disponible públicamente y puede ser probado desde navegador sin necesidad de clonar el repositorio.

8. Funciones disponibles en la versión publicada
Chat estructurado.
Input multilínea.
Mock API.
Estados cognitivos.
Barra de energía cognitiva.
Cooldown en estado RESISTENCIA.
Panel DevMock.
Visualización de contrato JSON.
