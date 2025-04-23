---
sidebar_position: 2
---

# Consola

La Consola de DevTools permite ver mensajes registrados y ejecutar JavaScript en páginas web. Su uso principal incluye:
1. **Ver mensajes registrados** con `console.log()` u otros métodos.

![Menu Consola](/img/Consola/console-log.png)

2. **Ejecutar JavaScript** directamente en la consola para interactuar con la página.

![Menu Consola](/img/Consola/console-js.png)

## Cómo abrir la consola
- **Desde el panel lateral**: Presiona `Escape` o haz clic en **Customize and control DevTools** > **Show Console Drawer**.
- **Desde el menú de comandos**: Presiona `Ctrl + Shift + J` (Windows/Linux) o `Cmd + Opt + J` (Mac).

## Ver mensajes registrados
Los mensajes se registran usando `console.log()`, `console.error()`, entre otros. Ejemplo de código:

```html
<script>
  console.log('Loading!');
  console.assert(document.querySelector('h2'), 'h2 not found!');
  console.table([{first: 'René', last: 'Magritte'}, {first: 'Chaim', last: 'Soutine'}]);
</script>
```

## Filtrar mensajes
- **Filtrar por nivel**: Usa el menú desplegable "Niveles de registro" para filtrar mensajes según su gravedad: Verbose, Info, Warning, Error.

![Menu Consola](/img/Consola/level.png)

- **Filtrar por texto o expresión regular**: Escribe en el cuadro de texto **Filtrar** o usa expresiones regulares.

![Menu Consola](/img/Consola/filtering.png)


## Filtrar mensajes por URL
Para ver mensajes de una URL específica, usa `url: [URL]`. Ejemplo: `url:https://example.com`.

![Menu Consola](/img/Consola/url-filter.png)

## Inspeccionar objetos
Usa `console.dir()` para inspeccionar las propiedades de objetos JavaScript:

```javascript
console.dir(document.body);
```

## Registrar mensajes con formato
Puedes dar formato a los mensajes usando especificadores de formato. Ejemplo:

```javascript
console.log('%s is awesome!', 'DevTools');
```

## Mensajes con diseño
Aplica estilos CSS a los mensajes con el especificador `%c`:

```javascript
console.log("%cEste mensaje está estilizado", "color: blue; font-size: 20px;");
```

## Ver y filtrar errores
Para mostrar o filtrar errores, ve a **Configuración de la consola** y habilita la opción **Mostrar errores de CORS** o **Registrar solicitudes de XMLHttpRequest**.

## Uso de expresiones en vivo
Fija una expresión en la consola para que su valor se actualice automáticamente cada 250 ms. Usa la opción **Crear expresión en vivo**.

## Borrar la consola
Para limpiar la consola:
- Haz clic en **Clear Console**.
- Usa `Ctrl + L` o `Cmd + L`.
- Escribe `clear()` y presiona Enter.

## Funciones útiles
- **`console.trace()`**: Muestra un seguimiento de pila.
- **`console.group()` y `console.groupEnd()`**: Agrupa mensajes.
- **`console.time()` y `console.timeEnd()`**: Mide el tiempo de ejecución de un bloque de código.

