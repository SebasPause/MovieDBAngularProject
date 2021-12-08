# MovieDBAngularProject

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7 y esta disponible en el siguiente url [MovieDBAngularProject](https://sebaspause.github.io/MovieDBAngularProject/#/)

## `Descripción`

Este proyecto trata de consumir una [API REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional) utilizando las siguientes tecnologías:

1. *HTML5*
2. *ES6*
3. *Bootstrap*
4. *Angular*
5. *API*
6. *Git*

## `Funcionamiento`

La aplicación permite hacer una búsqueda con los siguientes filtros:

- **Titulo**
- **Titulo Original**
- **Overview - Descripción**

Además de estos filtros tiene un botón para filtrar por las 10 películas mas populares

## `Estructura`

La estructura de la aplicación se basa en el desarrollo de dos módulos con el fin de conectarlos entre ellos y compartir información a través de un servicio común para ambos modulos.

> ### Módulos
> - Buscador
> - Películas
> ### Servicio
> - Observador

Este servicio se encarga de obtener los cambios que se realizan en el módulo `Buscador` para avisar al módulo `Películas` para que se refresque con los filtros especificados.

Al pulsar sobre cualquier objeto que se muestra, se mostrará una nueva ventana con más detalles acerca del objeto.

## `Dificultades`

La mayor dificultad encontrada en el desarrollo de este proyecto ha sido el tema de compartir datos entre diferentes módulos. 

Este problema se solucionó gracias a la clase [EventEmitter](https://angular.io/api/core/EventEmitter).


