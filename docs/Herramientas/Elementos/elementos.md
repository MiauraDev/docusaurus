---
sidebar_position: 1
---

# Panel

El **panel de Elementos** proporciona una interfaz completa para inspeccionar y manipular el **DOM** (Document Object Model) de una página web. Utilizando el árbol del DOM, que refleja la estructura de un documento HTML, puedes seleccionar nodos DOM específicos y modificarlos de manera interactiva.

## Herramientas y Pestañas en el Panel

- **Estilos**: Permite ver y depurar las reglas de CSS aplicadas a un elemento desde todas las hojas de estilo. También te permite buscar CSS no válido, anulado o inactivo, y editar elementos como agregar una declaración o aplicar una clase.
- **Cálculo**: Muestra las propiedades resueltas aplicadas a un elemento cuando Chrome las renderiza.
- **Diseño**: Ofrece opciones para modificar las superposiciones de cuadrícula y **flexbox**.
- **Objetos de escucha de eventos**: Muestra todos los objetos de escucha de eventos y sus atributos, permitiendo encontrar la fuente de los objetos de escucha y filtrarlos según su tipo (pasivos o bloqueantes).
- **Puntos de interrupción de DOM**: Permite gestionar los puntos de interrupción en los cambios del DOM, habilitarlos, inhabilitarlos o eliminarlos.
- **Propiedades**: Permite inspeccionar y ordenar las propiedades propias y heredadas de un nodo DOM seleccionado.
- **Accesibilidad**: Muestra elementos con etiquetas **ARIA** y sus propiedades, y permite inspeccionar el árbol de accesibilidad (experimental).

## Abrir el Panel de Elementos

Por defecto, cuando abres las Herramientas para desarrolladores, el panel Elementos se abre automáticamente. También puedes inspeccionar cualquier nodo en la página para abrir el panel automáticamente.

Para abrir el panel Elementos de forma manual, haz lo siguiente:
1. Abre las **Herramientas para desarrolladores**.
2. Para abrir el menú de comandos:
   - **macOS**: Presiona `Comando` + `Mayúsculas` + `P`
   - **Windows, Linux y ChromeOS**: Presiona `Control` + `Mayúsculas` + `P`
   ![Menu elementos](/img/Elementos/menu-elements.png)
3. Comienza a escribir "Elements", selecciona **Show Elements** y presiona **Intro**.
4. El panel Elementos aparecerá en el panel lateral inferior de las Herramientas para desarrolladores.
