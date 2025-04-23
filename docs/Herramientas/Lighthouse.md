---
sidebar_position: 8
---

# Lighthouse

El panel **Lighthouse** permite realizar una auditoría completa de tu sitio web para evaluar su rendimiento, accesibilidad, prácticas recomendadas, SEO y muchas otras métricas. Es una herramienta que te ayuda a mejorar la calidad de tus aplicaciones web.

## Descripción general

El panel **Lighthouse** genera un informe detallado con el rendimiento de tu sitio y ofrece sugerencias para mejorar la velocidad de carga y la calidad general de la web.

## Funciones clave de Lighthouse
- **Rendimiento**: Mide cómo la página carga y qué tan rápido es interactuar con ella.
- **Accesibilidad**: Analiza la facilidad de acceso para usuarios con diversas discapacidades.
- **Prácticas recomendadas**: Verifica si tu sitio sigue las mejores prácticas de desarrollo web.
- **SEO**: Evalúa cómo tu sitio está optimizado para motores de búsqueda.

## Pasos para realizar una auditoría:

### Paso 1: Audita el sitio
Cuando te propongas mejorar el rendimiento de carga de un sitio, siempre comienza con una auditoría. La auditoría tiene dos funciones importantes:
- Crea un modelo de referencia para que midas los cambios posteriores.
- Te brinda sugerencias prácticas sobre qué cambios tendrán el mayor impacto.

#### Configuración:
1. **Abre el panel Lighthouse**. Puede estar oculto detrás de **Más paneles**.
2. Configura los parámetros de la auditoría según tus necesidades:
   - **Liberar espacio de almacenamiento**: Actívalo si deseas auditar la experiencia de los visitantes nuevos. Inhabilítalo si prefieres auditar visitas repetidas.
   - **Habilitar muestreo de JS**: Agrega pilas de llamadas de JavaScript detalladas al registro de rendimiento (puede ralentizar el informe).

   ![Menu Lighthouse](/img/Lighthouse/js-sampling.png)

   - **Simulación de condiciones de red y CPU**: Configura la limitación de red para simular condiciones de dispositivos móviles.
   - **Modo de navegación**: Elige la opción predeterminada para analizar una sola carga de página.
   - **Dispositivo**: Selecciona "Móvil" o "Escritorio" según lo que desees auditar.
   - **Categorías**: Selecciona "Rendimiento" o deja las otras categorías activadas para obtener sugerencias completas.
3. Haz clic en **Analizar la carga de la página**. Después de 10 a 30 segundos, el panel de Lighthouse mostrará un informe del rendimiento del sitio.

   ![Menu Lighthouse](/img/Lighthouse/lighthouse-report.png)

#### Manejo de errores:
Si recibes un error en tu informe de Lighthouse, intenta ejecutar la pestaña en una ventana de incógnito sin otras pestañas abiertas para evitar interferencias, como las extensiones de Chrome.

   ![Menu Lighthouse](/img/Lighthouse/report-an-error.png)

#### Interpretación del informe:
- **Puntuación general**: Muestra la puntuación del rendimiento, SEO y otras métricas del sitio.
   
   ![Menu Lighthouse](/img/Lighthouse/overall-performance.png)

- **Métricas**: Incluye mediciones del rendimiento, como el tiempo hasta el primer procesamiento visual y la interacción del usuario.

   ![Menu Lighthouse](/img/Lighthouse/metrics.png)

- **Oportunidades**: Ofrece recomendaciones específicas para mejorar la velocidad de carga.

   ![Menu Lighthouse](/img/Lighthouse/opportunities.png)

- **Diagnóstico**: Proporciona más detalles sobre los factores que afectan el tiempo de carga.

   ![Menu Lighthouse](/img/Lighthouse/diagnostics.png)


### Paso 2: Realiza el experimento
Después de ejecutar una auditoría, Lighthouse proporciona oportunidades para mejorar el rendimiento del sitio. Implementa las recomendaciones y vuelve a auditar el sitio para medir los resultados. Algunas acciones que puedes realizar son:

   ![Menu Lighthouse](/img/Lighthouse/size-column.png)

#### Habilitar compresión de texto:
Reduce el tamaño de los archivos antes de enviarlos a través de la red, mejorando la velocidad de carga. La compresión de archivos como JS y CSS puede disminuir significativamente los tiempos de respuesta.

   ![Menu Lighthouse](/img/Lighthouse/netw.png)

#### Cambiar el tamaño de las imágenes:
Asegúrate de que las imágenes no sean más grandes de lo necesario. Usa imágenes optimizadas para reducir el tamaño y mejorar la carga de la página.

   ![Menu Lighthouse](/img/Lighthouse/details-properly.png)

#### Eliminar recursos que bloquean la renderización:
Identifica y elimina archivos JS y CSS que bloquean el renderizado de la página. Carga estos recursos de manera asíncrona para no frenar la visualización de contenido clave.

   ![Menu Lighthouse](/img/Lighthouse/more-information.png)

#### Optimizar la ruta de renderización crítica:
Solo carga el código necesario durante la carga de la página y aplaza lo demás para mejorar la velocidad de carga inicial.

## Mejorar el rendimiento en el subproceso principal

El panel **Rendimiento** es útil para identificar la actividad excesiva del subproceso principal. La idea es minimizar el trabajo realizado por el navegador durante la carga de la página, como la ejecución de JavaScript innecesario.

#### Uso de la API de User Timing:
Si prefieres un enfoque más manual, la API de **User Timing** te permite marcar y medir diferentes fases del ciclo de vida de tu aplicación.