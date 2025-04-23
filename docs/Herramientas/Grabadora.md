---
sidebar_position: 9
---

# Grabadora

El panel **Grabadora** te permite grabar, medir y editar los flujos de usuarios para depurar y mejorar las rutas de conversión en tu aplicación web.

## Descripción general

El panel **Grabadora** te permite realizar las siguientes acciones:

- **Grabar y reproducir flujos de usuarios**: Inicia una grabación de eventos en tu sitio web, luego reproduce el flujo grabado, saltando entre pasos. Puedes ralentizar la reproducción para entender mejor el comportamiento.
- **Editar y depurar flujos de usuarios**: Modifica los pasos de la grabación y establece puntos de interrupción. Puedes ejecutar el flujo de usuarios paso a paso y ver el código paralelo.
- **Generar perfiles de rendimiento**: Mide el rendimiento de un flujo de usuarios grabado generando un perfil y visualizando un informe en el panel de **Rendimiento**.
- **Compartir y exportar flujos de usuarios**: Exporta un flujo grabado en formatos como JSON o Puppeteer, o impórtalo para reutilizarlo.

## Cómo abrir el panel de Grabadora

1. **Abre las Herramientas para desarrolladores**.
2. En el menú de comandos:
   - macOS: `Comando + Mayúsculas + P`
   - Windows/Linux/ChromeOS: `Control + Mayúsculas + P`
3. Escribe **Recorder panel**, selecciona **Show Recorder panel** y presiona **Intro**.

   ![Menu Lighthouse](/img/Grabadora/cmd-recorder.png)

Alternativamente, puedes acceder desde **Más opciones > Más herramientas > Panel de la grabadora**.

## Grabación de un flujo de usuarios

### Paso 1: Iniciar una grabación
1. Haz clic en **Iniciar nueva grabación**.
2. Nombra la grabación, por ejemplo, **Confirmación de la compra de café**.
3. Comienza la grabación realizando los pasos del flujo (agregar productos al carrito, ir al carrito, completar la compra).
4. Finaliza la grabación haciendo clic en **Finaliza la grabación**.

### Paso 2: Reproducir el flujo grabado
1. Haz clic en **Volver a reproducir** para ejecutar el flujo grabado.
2. La grabadora intentará hacer clic en los elementos cuando estén disponibles. Si es necesario, puedes ralentizar la repetición para depurar.

## Medición del rendimiento de un flujo de usuarios

<video width="100%" height="480" controls>
  <source src="/img/Grabadora/flujo.mp4" type="video/mp4"/>
  Tu navegador no soporta el elemento de video.
</video>

1. Haz clic en **Medir rendimiento** para evaluar el rendimiento del flujo grabado.
2. El rendimiento se medirá en el panel **Rendimiento**, donde podrás ver métricas web y detectar oportunidades de mejora.

## Edición de pasos

Puedes editar los pasos de la grabación, agregar nuevos o quitar los innecesarios:

- **Expandir pasos**: Ve detalles de cada acción, como el selector y la posición en X/Y.

   ![Menu Lighthouse](/img/Grabadora/recorder-panel-capp.png)

- **Agregar y quitar selectores**: Modifica los selectores de cada paso para ajustarlos a tus necesidades.

   ![Menu Lighthouse](/img/Grabadora/devtools-recorder.png)

- **Agregar y quitar pasos**: Puedes añadir nuevos pasos o eliminar los que se grabaron incorrectamente.

   ![Menu Lighthouse](/img/Grabadora/edit-selector.png)

## Simulación de red lenta

Puedes simular una conexión de red lenta en las opciones de configuración de reproducción. Esto te permite verificar el comportamiento del flujo bajo condiciones de red más lentas, como 3G.

## Exportación y compartición de flujos

- **Exportar flujos**: Puedes exportar un flujo grabado en formato JSON o en secuencias de comandos de Puppeteer.
- **Importar flujos**: Puedes importar flujos grabados desde un archivo JSON para volver a reproducirlos.

## Depuración de flujos

La **Grabadora** permite depurar flujos de usuarios ralentizando la repetición, estableciendo puntos de interrupción y ejecutando pasos de forma manual.

- **Ralentizar la repetición**: Ajusta la velocidad de repetición para facilitar la depuración.

   ![Menu Lighthouse](/img/Grabadora/slow-replay.png)

- **Establecer puntos de interrupción**: Coloca puntos de interrupción en los pasos de la grabación para detener la ejecución y examinar el estado en ese momento.

   ![Menu Lighthouse](/img/Grabadora/execution-pause.png)


## Personalización de la Grabadora

Puedes personalizar las combinaciones de teclas y extender las capacidades de la grabadora con **extensiones**.

### Combinaciones de teclas:
1. Abre la **Configuración** y ve a **Accesos directos**.
2. Personaliza las combinaciones para navegar más rápido por la Grabadora.

### Instalar extensiones:
Instala extensiones desde la **Chrome Web Store** para agregar opciones personalizadas, como exportación y repetición personalizadas.

   ![Menu Lighthouse](/img/Grabadora/replay-extensions.png)

## Solución de problemas

Si no ves las opciones de exportación o repetición después de instalar una extensión, asegúrate de:
- Abre una nueva pestaña del navegador después de instalar la extensión.
- Verifica que la extensión esté habilitada y no bloqueada por el administrador.