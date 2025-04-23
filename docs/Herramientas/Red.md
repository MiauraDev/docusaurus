---
sidebar_position: 4
---

# Red

El **panel Red** en las Herramientas de Desarrollo de Chrome te permite analizar y depurar las solicitudes de red, como la carga de recursos y la actividad de la red en tu página web.

## Abrir el Panel Red

1. Abre las **Herramientas para desarrolladores**.
2. Haz clic en la pestaña **Red** en la parte superior.
3. O usa el **menú de comandos**:
   - macOS: `Comando + Mayúsculas + P`
   - Windows/Linux: `Control + Mayúsculas + P`
   - Busca "Network" y selecciona **Show Network panel**.

![Menu Red](/img/Red/network-panel.png)

## Registrar Actividad de Red

- Al abrir el panel Red, se registran automáticamente todas las solicitudes de red.
- Puedes ver las solicitudes en **tabla**, con columnas como:
  - **Estado**: Código de respuesta HTTP (200, 404, etc.).
  - **Tipo**: Tipo de recurso (CSS, JS, imágenes, etc.).
  - **Iniciador**: Motivo de la solicitud.
  - **Tamaño**: Cantidad de datos transferidos.
  - **Tiempo**: Tiempo de la solicitud.
  - **Cascada**: Visualiza el tiempo de cada solicitud y su relación con otras.

## Inspeccionar Solicitudes

- Haz clic en cualquier solicitud para ver más detalles:
  - **Encabezados**: Información sobre los encabezados HTTP.
  - **Carga útil**: Datos de la cadena de consulta y formularios.
  - **Vista previa**: Representación del recurso.
  - **Respuesta**: Contenido de la respuesta HTTP.
  - **Iniciador**: Motivo de la solicitud.
  - **Tiempo**: Desglose de tiempos de la solicitud.
  - **Cookies**: Cookies asociadas con la solicitud.

## Casos Comunes de Uso

- Asegúrate de que los recursos se estén subiendo o descargando correctamente.
- Inspecciona los detalles de los recursos, como tamaño y encabezados.
- Mejora el rendimiento de la carga de la página (para análisis más detallados, usa el panel **Lighthouse**).

## Filtrar Recursos

- Filtra por tipo de recurso (CSS, JS, Img, etc.) usando los botones de filtro.
- Usa el cuadro de **Filtrar** para buscar recursos por nombre, dominio o propiedades específicas.
- Filtra solicitudes de **terceros** (orígenes distintos del dominio principal).

![Menu Red](/img/Red/filters-toolbar.png)

## Simular Conexiones Lentas

- Para emular una conexión de red más lenta, selecciona un perfil como **3G** en el menú **Limitación** de red.
- Usa la opción **Vaciar la caché y recargar** para simular la carga como si fuera la primera vez.

![Menu Red](/img/Red/enable-throttling.png)

## Capturas de Pantalla Durante la Carga

- Habilita las **Capturas de Pantalla** en la configuración para tomar miniaturas durante la carga de la página.
- Puedes ver cómo se carga la página en varios puntos de tiempo.

![Menu Red](/img/Red/screenshot-network.png)

## Exportar Datos

- **Guardar como archivo HAR**: Exporta todas las solicitudes de red en formato HAR (archivo de registro HTTP).
- **Copiar Solicitudes**: Copia las solicitudes o las respuestas de la tabla a tu portapapeles (en varios formatos como cURL, PowerShell, etc.).

![Menu Red](/img/Red/export-har.png)

## Depurar WebSocket y XHR

- Para **WebSocket**, haz clic en la URL del WebSocket para ver los mensajes enviados/recibidos.
- Para **XHR**, puedes volver a reproducir la solicitud haciendo clic derecho en la solicitud y seleccionando **Replay XHR**.

## Ver Respuestas y Encabezados

- Haz clic en las solicitudes para ver los detalles de la **respuesta** y los **encabezados**.
- Usa la pestaña **Vista previa** para una visualización más legible de recursos HTML o imágenes.

![Menu Red](/img/Red/search-result.png)

