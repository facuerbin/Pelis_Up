# Pelis UP!

Proyecto realizado con Angular 13 en el marco del curso Entrenamiento de Front End de Folcademy.
Para ejecutar el proyecto, desde el directorio raiz ejecutar el comando npm install o yarn install. Luego con ng serve se iniciará el servidor en el puerto 4200. `http://localhost:4200/`.

Autor: Facundo Erbin
Bitbucket: https://facuerbin@bitbucket.org/facuerbin/pelis-up.git

## Desafio 1

Presentar Wireframe realizado con ngx-bootstrap (opcional) en Angular.

El wireframe realizado con ngx-bootstrap debe contar con los siguientes requisitos:

- El "header" que en su interior contenga un "nav" centrado en el medio(recordar respetar los espacio). 
- Dos "section" de distintos colores. La primera que contengan 2 columnas y la segunda que contengan 3 columnas.
- El "footer"

## Desafio 2

Subir el proyecto del desafío anterior a un repositorio de bitbucket.

Hacer un documento de google donde tengas los siguientes requisitos:


- Enlace del repositorio y una captura.
- Captura de SourceTree.

## Desafio 3

En el repositorio del desafío anterior, hacer una rama nueva en el repositorio de nombre “desafio3”.

Hacer una maqueta del diseño presentado en Figma donde tengas los siguientes requisitos:


- Header con el logo y ítem del menú.
- Título.
- Buscador.
- Tab de Categorías. 
- Listado de películas en sus cards.

[Recursos](https://www.mediafire.com/file/917gtyfa2stpu1a/recursos.rar/file=401%3A6827)
[Figma](https://www.figma.com/file/WamqqP2Cbomk7WsxlupJuG/Movie-Listing-Web-App-(Community)?node-id=401%3A6827)
## Desafio 4

En el repositorio del desafío anterior, hacer una rama nueva en el repositorio de nombre “desafío-4”.

Hacer una maqueta del diseño presentado en Figma donde tengas los siguientes requisitos:


- Tener 3 módulos (routes, layout, shared).
- Dentro de la carpeta layout tener 2 componentes (header y footer).
- Dentro de las rutas tener 4 pestaña (inicio, pelis, series e ingresar)
- Dentro de shared tener el componentes de la card.

## Desafio 5

1- En el repositorio del desafío anterior, hacer una rama nueva de nombre “desafío-5”.

Implementar dinamismo a la app de la siguiente manera:


Dentro del componente inicio/home, asignarle a una variable llamada “movies_series” un arreglo de objetos con la siguiente estructura:

![alt text](https://bitbucket.org/facuerbin/pelis-up/src/main/.images/img1.png "Logo Title Text 1")

Debe contener como mínimo información de 8 películas y series, y además definir el tipo de la variable con una interface.

2- Implementar un ngFor que recorra el arreglo de movies_series para que se muestren todas las películas en la pantalla inicio/home

![alt text](https://bitbucket.org/facuerbin/pelis-up/src/main/.images/img2.png "Logo Title Text 1")

Usar binding para pasar todos los datos, de cada película o serie, del .ts al .html

3- Guardar el filtro seleccionado en una variable que se llame “filter” con el evento (click) en los botones, y usar ngClass para colorear el botón correspondiente.

![alt text](https://bitbucket.org/facuerbin/pelis-up/src/main/.images/img3.png "Logo Title Text 1")


Dentro del ngFor, usar ngIf, dependiendo de la elección del usuario (guardada en la variable anterior), para saber si mostrar todos, o películas o series. Para identificar esto, recuerden el campo “category” en el objeto definido en el punto 1.

4- Investigar cómo realizar la búsqueda de películas/series con el ngModelChange e implementarla, este debe actualizar el arreglo de películas con aquellas que coincidan con lo escrito en el buscador.

![alt text](https://bitbucket.org/facuerbin/pelis-up/src/main/.images/img4.png "Logo Title Text 1")

Opcional:
  -Pueden obtener información de las películas/series del siguiente link: [The Movie Database (TMDB)](themoviedb.org)

  -Aplicar lo realizado en las vistas de Películas y Series.

![alt text](https://bitbucket.org/facuerbin/pelis-up/src/main/.images/img5.png "Logo Title Text 1")
