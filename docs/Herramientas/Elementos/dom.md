---
sidebar_position: 2
---

# DOM 

El **DOM** es la representación estructural de una página web. Puedes usar el panel **Elementos** para inspeccionar y modificar el DOM, lo que incluye ver y cambiar etiquetas HTML, atributos, y contenido. Los cambios realizados en el panel se reflejan inmediatamente en la página.

## Cómo Ver los Nodos DOM

El panel **Elementos** en DevTools te permite inspeccionar y modificar el **DOM** de una página web. Para inspeccionar un nodo, simplemente haz clic con el botón derecho sobre el nodo de interés y selecciona **Inspeccionar**. Esto abrirá el panel de **Elementos** y destacará el nodo seleccionado en el árbol del DOM.

![Paleta de comandos](/img/Elementos/inspecting-node.png)

## Cómo Navegar por el Árbol del DOM con el Teclado

Puedes navegar por el árbol del DOM usando las teclas de flecha. Una vez que hayas seleccionado un nodo, puedes usar las flechas para desplazarte hacia arriba, abajo, izquierda o derecha, expandiendo o contrayendo nodos según sea necesario.

![Paleta de comandos](/img/Elementos/inspecting.png)

## Desplazar hasta que el Nodo sea Visible

Si un nodo no está visible en el viewport, puedes desplazar el árbol del DOM para que el nodo aparezca en la vista. Haz clic derecho sobre el nodo y selecciona **Desplazar hasta la vista** para mover el viewport y ver el nodo seleccionado.

![Paleta de comandos](/img/Elementos/inspecting.png)


## Buscar Nodos en el Árbol del DOM

Puedes buscar nodos específicos en el árbol del DOM usando el panel de búsqueda. Presiona **Control + F** (Mac: **Comando + F**) y escribe un texto, selector CSS o XPath. Los resultados de la búsqueda se resaltarán en el árbol del DOM.

![Paleta de comandos](/img/Elementos/scroll-view.png)


## Editar el DOM

Puedes editar el DOM directamente desde el panel **Elementos**. Esto incluye:
- **Editar contenido**: Haz doble clic en el texto de un nodo para modificarlo.
- **Editar atributos**: Haz doble clic en un atributo para cambiar su valor o agregar uno nuevo.
- **Editar el tipo de nodo**: Cambia el tipo de un nodo, por ejemplo, de `<li>` a `<button>`.
- **Editar como HTML**: Activa la opción **Editar como HTML** para modificar el código HTML completo de un nodo con autocompletado de etiquetas.

![Paleta de comandos](/img/Elementos/down-menu.png)

## Reordenar los Nodos DOM

Puedes reordenar los nodos DOM arrastrándolos dentro del árbol. Esto te permite mover elementos de lugar sin tener que cambiar el código directamente.

![Paleta de comandos](/img/Elementos/dragging-node.png)

## Forzar Estado en los Nodos

DevTools permite forzar ciertos estados en los nodos, como **:hover**, **:active**, o **:focus**, para ver cómo se comportan en diferentes interacciones.

![Paleta de comandos](/img/Elementos/node-looks.png)


## Ocultar y Borrar Nodos

Puedes ocultar un nodo presionando **H** o borrarlo presionando **Delete**. También puedes usar el menú contextual para ocultar o eliminar un nodo seleccionado.

![Paleta de comandos](/img/Elementos/what-node.png)