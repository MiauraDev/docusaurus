---
sidebar_position: 3
---

# Fuentes

El panel Fuentes permite ver, editar y depurar archivos de CSS y JavaScript, crear y ejecutar fragmentos de código, y guardar los cambios directamente en tu sistema de archivos.

## Abrir el panel Fuentes

1. Abre las Herramientas para desarrolladores.
2. Usa el menú de comandos:  
   - macOS: `Comando+Mayúsculas+P`  
   - Windows/Linux: `Control+Mayúsculas+P`
3. Escribe "sources", selecciona "Show Sources panel" y presiona **Intro**.

## Ver archivos

- **Pestaña Página**: Muestra los recursos cargados por la página, organizados en niveles.
- Haz clic en un archivo para ver su contenido en el **Editor**.

![Menu fuentes](/img/Fuentes/page-pane.png)


## Editar CSS y JavaScript

- En el **Editor** puedes editar CSS y JavaScript y ver los cambios en tiempo real.
- Guarda cambios de JavaScript con `Control + S` o `Comando + S`.
- Los cambios se pierden al recargar la página, a menos que se configure un espacio de trabajo.

![Menu fuentes](/img/Fuentes/editing-css.gif)

![Menu fuentes](/img/Fuentes/editing-javascript.gif)

## Crear y Ejecutar Fragmentos

- Los fragmentos son secuencias de código reutilizables que puedes ejecutar en cualquier página.
- Para ejecutar un fragmento, ve a la pestaña "Fragmentos" y haz clic en **Ejecutar**.

![Menu fuentes](/img/Fuentes/snippet-inserts.png)

## Depurar JavaScript

- Usa **Puntos de interrupción** para pausar la ejecución del código y analizar las variables.
- Puedes pausar en líneas de código, funciones específicas o eventos del DOM.

![Menu fuentes](/img/Fuentes/pausing.png)

## Enfocarse Solo en Tu Código

- DevTools filtra el código generado por frameworks para ayudarte a concentrarte en tu propio código.
  
## Guardar Cambios en Archivos Locales

- **Espacio de trabajo**: Guarda cambios directamente en tu sistema de archivos. Necesitas configurar DevTools para que se sincronice con tu proyecto local.

## Mapas de Origen

- **Mapas de origen** permiten depurar código transpilado (como Babel o TypeScript) mostrándote el código fuente original.

![Menu fuentes](/img/Fuentes/deployed.png)

## Configurar un Espacio de Trabajo

- Para guardar cambios en archivos locales, selecciona "Workspace" y permite que DevTools acceda al directorio local donde se guardan los archivos.

## Consejos para la Depuración

- Usa **puntos de interrupción** para detener el código en puntos específicos y examina el valor de las variables.
- **Expresiones de inspección** en el panel "Watch" permiten monitorear valores a lo largo del tiempo.

![Menu fuentes](/img/Fuentes/local.png)

## Otros Flujos de Trabajo

- **Anulaciones locales**: Simula cambios de recursos sin acceder al backend.

![Menu fuentes](/img/Fuentes/override-content.png)

- **Anulación de encabezados HTTP**: Modifica los encabezados de respuesta HTTP directamente en el panel de Red.

![Menu fuentes](/img/Fuentes/modifying.png)