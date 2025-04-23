---
sidebar_position: 7
---

# Aplicación

El panel **Application** te permite inspeccionar, modificar y depurar varios aspectos de tu aplicación web, incluidos su manifiesto, trabajadores de servicio, almacenamiento y datos en caché.

## Descripción general

El panel **Application** se divide en las siguientes secciones y submenús:

### 1. Aplicación
- **Manifiesto**: Muestra el archivo `manifest.json` de manera fácil de usar. También muestra errores y advertencias si los hay.
- **Trabajadores en primer plano**: Permite inspeccionar y depurar trabajadores de primer plano, emulando eventos push y actualizando un servicio.
- **Almacenamiento**: Muestra un gráfico circular que distribuye la memoria entre almacenamiento en caché, IndexedDB y los trabajadores del servicio. También puedes borrar los datos del sitio y simular una cuota de almacenamiento personalizada.

### 2. Almacenamiento
- Consulta y edita diferentes métodos de almacenamiento que usa tu app web.
  - **Local y Almacenamiento de sesiones**: Permite seleccionar un origen y editar los pares clave-valor.
  - **IndexedDB**: Inspecciona bases de datos y almacenes de objetos.
  - **Cookies**: Permite editar y seleccionar cookies de un origen.
  - **Almacenamiento compartido**: Inspecciona los pares clave-valor.
  - **Caché**: Permite inspeccionar, filtrar y borrar recursos de la caché.

### 3. Servicios en segundo plano
- **Memoria caché atrás/adelante**: Prueba la memoria caché de atrás/adelante y detecta problemas relacionados.
- **Obtención en segundo plano**: Registra la actividad de la API de Background Fetch.
- **Background sync**: Registra la actividad de la API de sincronización en segundo plano.
- **Notificaciones**: Registra mensajes push.
- **Controlador de pagos**: Registra eventos del controlador de pagos.
- **Sincronización periódica en segundo plano**: Registra eventos clave de la sincronización periódica.
- **Cargas especulativas**: Depura las cargas especulativas.

### 4. Frames
- Divide las páginas en vistas múltiples mostrando detalles como Seguridad, Aislamiento, Política de Seguridad del Contenido, y Disponibilidad de API.

![Menu Consola](/img/Aplicación/frames-section.png)

## Abrir el panel Application

1. Abre las **Herramientas para desarrolladores**.
2. Para abrir el menú de comandos:
    - macOS: `Comando + Mayúsculas + P`
    - Windows/Linux/ChromeOS: `Control + Mayúsculas + P`
3. Escribe `application`, selecciona **Show Application** y presiona **Intro**.

![Menu Consola](/img/Aplicación/application-panel.png)

Alternativamente:
- Haz clic en **Más paneles** y selecciona **Aplicación**.
- O selecciona **Más herramientas > Aplicación** desde el menú de opciones.

## Manifiesto de la app web

El manifiesto de tu app web es necesario para agregar la app a la pantalla principal de dispositivos móviles y escritorios. A través de la pestaña **Manifiesto** del panel **Application** puedes inspeccionarlo.

![Menu Consola](/img/Aplicación/manifest.png)

- Puedes ver la fuente del manifiesto, controlar los íconos, y obtener detalles de la instalación.
- La sección **Instalabilidad** muestra errores relacionados con el manifiesto, como íconos no cargados.

### Instalar y probar la app

Para activar la instalación:
- Haz clic en el botón **Instalar** en la barra de direcciones de Chrome.

## Trabajadores de Servicio

Los **trabajadores de servicio** son secuencias de comandos que el navegador ejecuta en segundo plano. Pueden ser inspeccionados y depurados en la pestaña **Service Workers**.

### Funciones clave
- **Sin conexión**: Pone DevTools en modo sin conexión.
- **Actualizar/Desactivar**: Permite actualizar o evitar el trabajador de servicio.
- **Eventos de notificación**: Simula eventos de sincronización y notificaciones push.

## Almacenamiento en caché

La pestaña **Almacenamiento en caché** muestra los recursos almacenados en caché por el **service worker** y permite ver sus encabezados y contenidos.

### Borrar recursos
- Puedes seleccionar un recurso y borrarlo directamente desde la pestaña.

![Menu Consola](/img/Aplicación/selecting-resource.png)

### Probar la memoria caché atrás/adelante:
- Utiliza el botón **Probar memoria caché** para verificar que los recursos se almacenen correctamente.

![Menu Consola](/img/Aplicación/expanded.png)

## IndexedDB y Web SQL

Inspecciona y edita las bases de datos de **IndexedDB** y **Web SQL**. Puedes interactuar con las bases de datos, ver tablas y borrar datos a través de las herramientas de DevTools.

![Menu Consola](/img/Aplicación/web-sql.png)

## Cookies

En la pestaña **Cookies**, puedes inspeccionar, editar y eliminar cookies asociadas con un origen.

![Menu Consola](/img/Aplicación/cookies.png)

- **Editar Cookies**: Modifica los valores de nombre, dominio, tamaño, etc.
- **Filtrar**: Busca cookies específicas por su nombre o valor.