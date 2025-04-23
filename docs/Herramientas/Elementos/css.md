---
sidebar_position: 3
---

# CSS

El panel **CSS** permite ver y modificar las reglas de estilo aplicadas a un elemento. Puedes editar propiedades CSS en vivo y observar cómo los cambios afectan a la apariencia del sitio web.

## Ver el CSS de un Elemento

Para ver el CSS de un elemento, haz clic derecho sobre el elemento en la página y selecciona **Inspeccionar**. El panel **Elementos** de DevTools se abrirá, mostrando el árbol del DOM y los estilos aplicados al elemento en la pestaña **Estilos**.

![Menu elementos](/img/Elementos/highlighted-element.png)

## Agregar y Editar Declaraciones CSS

1. **Agregar una Declaración de CSS**:
   - Haz clic en **element.style** en la pestaña **Estilos** y agrega propiedades CSS, como `background-color: honeydew;`.

   ![Menu elementos](/img/Elementos/adding-css-declaration.png)

2. **Agregar una Clase de CSS**:
   - En la pestaña **Estilos**, selecciona la sección de **Clases** y agrega clases CSS al elemento, como `color_me`.

   ![Menu elementos](/img/Elementos/colorme-class.png)


3. **Editar un Pseudoestado**:
   - Para activar un pseudoestado como `:hover`, haz clic en **:hov** en la pestaña **Estilos** y marca la casilla de verificación correspondiente.

   ![Menu elementos](/img/Elementos/pseudostate.png)

## Cambiar las Dimensiones de un Elemento

En el diagrama del **Modelo de caja** dentro de **Estilos**, puedes modificar el **margen**, **padding**, **ancho**, y **alto** de un elemento. Haz doble clic en los valores para editarlos directamente.

![Menu elementos](/img/Elementos/elements-padding.png)


## Inspeccionar y Depurar CSS

- **CSS Inactivo o Anulado**: Si una propiedad CSS no está activa, aparecerá en texto pálido con un ícono de información. Si está anulada, estará tachada.

![Menu elementos](/img/Elementos/inactive-css.png)

- **CSS Heredado**: Los elementos heredados de forma predeterminada están en texto normal.

![Menu elementos](/img/Elementos/inherited.png)

## Utilizar el Selector de Color

Puedes cambiar los valores de color haciendo clic en el cuadro de vista previa del color en la pestaña **Estilos**. Esto abrirá el **Selector de color**, donde podrás ajustar el color, la opacidad y más.

![Menu elementos](/img/Elementos/color-picker.png)

## Ver el Modelo de Caja

En la pestaña **Estilos**, puedes ver y modificar el **modelo de caja** de un elemento, como el **padding**, **margen**, **borde**, etc., usando los controles visuales del modelo de caja.

## Forzar un Pseudoestado

Usa el panel **Estilos** para forzar pseudoestados como `:hover`, `:focus` o `:active` en un elemento, aunque no se esté interactuando con él en el navegador.

## Depurar Cuadrículas y Flexbox

1. **Cuadrícula CSS**: Al aplicar `display: grid` a un elemento, puedes activar una **superposición de cuadrícula** para visualizar sus líneas y áreas. Esto se muestra en el panel **Diseño**.

![Menu elementos](/img/Elementos/setting-css.png)


2. **Flexbox CSS**: Para depurar **Flexbox**, puedes usar el **Editor de Flexbox** en DevTools para ajustar las propiedades como `justify-content` o `align-items`.

![Menu elementos](/img/Elementos/center-text.png)

## Consultas de Contenedor

Si estás utilizando consultas de contenedor CSS, puedes inspeccionar y modificar su comportamiento en el panel **Estilos** y visualizar cómo afectan al diseño de los elementos hijos.

<video width="100%" height="480" controls>
  <source src="/img/Elementos/contenedor.mp4" type="video/mp4"/>
  Tu navegador no soporta el elemento de video.
</video>


## Copiar CSS

Puedes copiar reglas CSS completas, propiedades o valores desde el panel **Estilos**. Para copiar, haz clic derecho sobre la propiedad y selecciona **Copiar CSS**. También puedes copiar cambios específicos usando la opción de **Copiar cambios de CSS**.

![Menu elementos](/img/Elementos/copy-css.png)


