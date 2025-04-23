---
sidebar_position: 6
---

# Memoria

El panel Memoria en DevTools proporciona herramientas para diagnosticar y analizar la distribución de la memoria en los objetos de JavaScript, detectar y aislar fugas de memoria, y obtener un desglose de la asignación de memoria por función.

### Tipos de perfiles disponibles:
1. **Instantánea del montón**: Muestra la distribución de la memoria entre los objetos de JavaScript y los nodos DOM relacionados.
2. **Instrumentación de asignaciones en el cronograma**: Muestra las asignaciones de memoria de JavaScript a lo largo del tiempo, útil para aislar fugas de memoria.
3. **Muestra de asignación**: Registra las asignaciones de memoria mediante muestreo, con mínima sobrecarga de rendimiento.
4. **Elementos desconectados**: Muestra los objetos que retienen una referencia de JavaScript, a menudo indicando fugas de memoria.

### Cómo abrir el panel Memoria:
- **Menú de comandos**: Presiona `Cmd + Shift + P` (macOS) o `Ctrl + Shift + P` (Windows/Linux), luego escribe `memory` y selecciona **Show Memory**.
- **Panel superior**: Haz clic en `Más paneles` y selecciona **Memoria**.

![Menu memoria](/img/Memoria/menu-memory.png)

## Terminología de Memoria

### Tamaños de los objetos
- **Tamaño Aplanado**: Memoria directa ocupada por el objeto.
- **Tamaño Retenido**: Memoria que no se puede liberar hasta que se elimina el objeto y sus dependencias.

### El árbol de retención de objetos
Es una red de objetos interconectados representada como un grafo de memoria. Los nodos representan los objetos y las aristas las referencias entre ellos.

![Menu memoria](/img/Memoria/distance-root.png)

### Dominadores
Un objeto "domina" a otro si se encuentra en una ruta de referencia directa o indirecta que impide que el objeto sea recolectado por el recolector de basura.

![Menu memoria](/img/Memoria/animated-dominator.gif)

## Cómo solucionar problemas de memoria
### Herramientas principales
1. **Administrador de tareas de Chrome**: Monitorea el uso de memoria de la página en tiempo real.

![Menu memoria](/img/Memoria/opening-task-manager.png)

2. **Grabaciones de rendimiento**: Registra el uso de memoria de una página durante un período de tiempo para identificar patrones de fugas o aumentos de memoria excesivos.

![Menu memoria](/img/Memoria/simple-growth.png)

3. **Instantáneas del montón**: Ayudan a identificar objetos desconectados que mantienen referencias en JavaScript, lo cual es una causa común de fugas de memoria.

![Menu memoria](/img/Memoria/take-heap.png)

### Identificar fugas de memoria
- Usa las **instantáneas del montón** para detectar objetos DOM desconectados.
- Utiliza los **cronogramas de asignación** para rastrear asignaciones de memoria y encontrar fugas.

![Menu memoria](/img/Memoria/take-heap-snapshot.png)

## Vista de Instantáneas del Montón

![Menu memoria](/img/Memoria/view-drop-down.png)

### Tipos de vistas
- **Resumen**: Muestra los objetos agrupados por nombre y fuente de constructor.
- **Comparación**: Compara dos instantáneas para identificar diferencias, útil para detectar fugas.
- **Contención**: Muestra la estructura interna de los objetos y cómo se agrupan, ayudando a detectar fugas de memoria de bajo nivel.
- **Estadísticas**: Proporciona un gráfico circular del uso de memoria por tipo de objeto.

## Análisis de Asignación de Memoria
1. **Cronograma de asignación**: Permite monitorear las asignaciones de memoria a lo largo del tiempo.
2. **Muestra de asignación**: Desglosa las asignaciones de memoria por función de JavaScript.

![Menu memoria](/img/Memoria/record-allocation.png)

## Consejos adicionales
- Usa **funciones nombradas** para facilitar el análisis de cierres y el seguimiento de la memoria.
- Realiza grabaciones de **recolección de elementos no utilizados** para detectar problemas de recolección de basura frecuentes.
