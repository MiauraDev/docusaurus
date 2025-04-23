---
sidebar_position: 5
---

# Rendimiento

El panel **Rendimiento** en DevTools te permite registrar y analizar el rendimiento de las aplicaciones web. Esto incluye la detección de cuellos de botella y la optimización del uso de recursos.

## Acceso al Panel de Rendimiento

Para acceder al panel Rendimiento:
1. Abre **DevTools** y selecciona la pestaña **Rendimiento** en la parte superior.
2. Alternativamente, puedes usar el menú de comandos:
   - **macOS**: Comando + Mayúsculas + P
   - **Windows/Linux/ChromeOS**: Control + Mayúsculas + P
   - Escribe "Performance panel" y selecciona **Show Performance panel**.

   ![Menu Rendimiento](/img/Rendimiento/Performance-panel.png)

## Métricas Web Esenciales

Cuando abres el panel, se capturan métricas en vivo como **Largest Contentful Paint (LCP)** y **Cumulative Layout Shift (CLS)**, que se muestran con su puntuación (buena, necesita mejoras o mala). Además, al interactuar con la página, se captura el **Interaction to Next Paint (INP)**, ofreciendo una visión más completa del rendimiento de la página.

<video width="100%" height="480" controls>
  <source src="/img/Rendimiento/observe-metrics.mp4" type="video/mp4"/>
  Tu navegador no soporta el elemento de video.
</video>


## Comparar Experiencia de Usuario

Puedes comparar tus métricas locales con los datos de campo de los usuarios mediante el **Informe de UX de Chrome**:
1. En **Rendimiento > Próximos pasos > Datos de campo**, haz clic en **Configurar**.
2. Acepta la divulgación de privacidad y comienza a comparar las puntuaciones.

![Menu Rendimiento](/img/Rendimiento/field-data-fetched.png)

## Optimización del Entorno de Prueba

El panel te da recomendaciones para configurar tu entorno para que coincida mejor con el de tus usuarios:
1. Configura el **viewport** en tamaños comunes (ej. 720p o 1080p).
2. Ajusta la **CPU** y la **red** para emular condiciones de usuarios reales.

## Grabar y Analizar un Perfil de Rendimiento

### Cómo Grabar un Perfil de Rendimiento
1. Para registrar el rendimiento durante la **ejecución** o la **carga** de la página:
   - **Ejecutar**: Haz clic en **Grabar** mientras interactúas con la página.
   - **Carga**: Haz clic en **Comenzar a generar perfiles** y recarga la página.

2. **Capturas de Pantalla**: Habilita la opción para capturar pantallas de cada fotograma mientras grabas.
3. **Recolección de Elementos No Utilizados**: Haz clic en **Collect garbage** para forzar la recolección de elementos no utilizados.

### Cambiar la Configuración de Captura
Puedes ajustar la configuración de captura para obtener información adicional:
- Desactivar **muestras de JavaScript**.
- Limitar **CPU** y **red**.
- Habilitar **estadísticas del selector CSS**.

## Anotar y Compartir Grabaciones

Una vez que se registre un perfil, puedes anotarlo para compartir conclusiones:
1. Añade **etiquetas** o **flechas** a elementos seleccionados.
2. Usa la opción **Borrar** para eliminar anotaciones y **ocultarlas** desde el panel.

![Menu Rendimiento](/img/Rendimiento/annotation.png)

## Análisis de la Grabación

### Estadísticas de Rendimiento
- **LCP** y **INP** pueden ser desglosados para entender el tiempo de renderización de la página.
- Identifica problemas como **render-blocking requests**, **cambio de diseño (CLS)**, y **tamaño del DOM**.

<video width="100%" height="480" controls>
  <source src="/img/Rendimiento/insights-tab.mp4" type="video/mp4"/>
  Tu navegador no soporta el elemento de video.
</video>

### Usar Gráficos y Combinaciones de Teclas
- **Gráfico tipo llama**: Te permite ver la secuencia de eventos en el tiempo, mostrando tareas largas con triángulos rojos.
- Usa combinaciones de teclas para navegar rápidamente entre los diferentes eventos y estadísticas.

![Menu Rendimiento](/img/Rendimiento/perf-shortcuts.png)

## Actividades de Búsqueda y Personalización

- **Buscar** actividades específicas en la grabación.
- **Reordenar** y **ocultar** las pistas para centrarse en las más relevantes.

## Exportar e Importar Grabaciones

- **Exportar**: Guarda una grabación para compartir más tarde.

![Menu Rendimiento](/img/Rendimiento/export-recording.png)

- **Importar**: Carga una grabación existente para continuar el análisis.

![Menu Rendimiento](/img/Rendimiento/import-recording.png)

## Consejos para la Optimización

- **LCP**: Optimiza el renderizado de la imagen o texto más grande visible.

![Menu Rendimiento](/img/Rendimiento/lcp-thresholds.svg)

- **CLS**: Minimiza los cambios de diseño inesperados para mejorar la experiencia de usuario.

![Menu Rendimiento](/img/Rendimiento/cls-values.svg)