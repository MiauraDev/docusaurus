---
sidebar_position: 1
---

# Ejecutar Comandos

El menú de comandos proporciona una forma rápida de navegar por la IU de las Herramientas para desarrolladores de Chrome y realizar tareas comunes, como inhabilitar JavaScript. Es posible que conozcas una función similar en Visual Studio Code, llamada **Paleta de comandos**, que fue la inspiración original del menú de comandos.

![Paleta de comandos](/img/ejecutar-comandos/command-menu.png)

## Abrir el menú de comandos

Para abrir el menú de comandos, haz lo siguiente:

- **Windows / Linux**: Presiona `Control` + `Mayúsculas` + `P`
- **macOS**: Presiona `Comando` + `Mayúsculas` + `P`
- Haz clic en **Personalizar y controlar DevTools** y selecciona **Run command**.

![Run comandos](/img/ejecutar-comandos/run-command.png)

## Ejecutar el comando

El menú de comandos se abrirá con `Run >` agregado al principio del cuadro de texto.

![Open comandos](/img/ejecutar-comandos/open.png)
 Para abrir un archivo, borra el carácter `>` y escribe el nombre de un archivo. DevTools buscará los archivos relevantes.
   - **Windows / Linux**: Presiona `Control` + `P`
   - **macOS**: Presiona `Comando` + `P`

   Alternativamente, haz clic en **Personalizar y controlar DevTools** y selecciona **Abrir archivo**.

## Abrir archivos de la lista ignorados

Nota: Esta es una función de vista previa de **Experimental** disponible en Chrome a partir de la versión 106.

De forma predeterminada, DevTools oculta los archivos de terceros conocidos. Para abrir esos archivos desde el menú:

1. Inhabilita la opción **Ocultar fuentes de la lista de fuentes ignoradas** en el panel **Fuentes**.

## Cómo tomar capturas de pantalla

El menú de comandos te permite realizar capturas de pantalla de tu sitio web.

Nota: La captura de área no funcionará si DevTools no está acoplado a la ventana.


![Otras acciones](/img/ejecutar-comandos/area-screenshot.gif)


Por ejemplo para tomar una captura de pantalla de un área, sigue estos pasos:

1. Abre el menú de comandos.
2. Escribe **"captura de pantalla"**.
3. Selecciona **Captura de pantalla del área**.
4. Arrastra el cursor para seleccionar cualquier parte de la página y capturarla.

## Consulta otras acciones disponibles

Para ver otras acciones disponibles en el menú de comandos, borra el carácter `>` y escribe `?`.

![Otras acciones](/img/ejecutar-comandos/other-actions.png)