# Ejercicio 1 

Completar el sitio con nuestro proyecto de Clase 2.

## Estructura
- `index.html` – Portada con hero y tres tarjetas.
- `proyecto.html` – Sección de proyecto para mapear user stories.
- `contacto.html` – Formulario accesible (sin backend).
- `css/styles.css` – Estilos base, variables CSS, Grid y Flex.
- `assets` - Carpeta donde guardar recursos (por ej. imágenes)

## Recomendaciones
- Trabajar mobile-first.
- Mantener contraste y jerarquía de encabezados.
- Completar textos alternativos y descripciones reales.


## En index.html
1- Agregar como enlace en Navbar a continuacion de:

```{html}
          <!-- Agregar a continuación el elemento Proyecto -->
```

Un item de la navbar que conecte a la pagina proyecto.html

2- En la seccion "Caracteristicas" dentro de la seccion clase "features containter" agregar dentro de  cada 

```{html}
<article></article>
``` 
una imagen de esta manera

```{css}
<img class="card-img" src="" width="600" height="400" alt="Descripcion de la imagen.">
```
La seccion alt debe ser descriptiva de la imagen mostrada.

Las imágenes deben estar en assets debe ser de 600x400 pixeles.

3- Agregar padding a las seccion "Resultados".


TIP: 
- Agregar una clase a la sección que abarca resultados.
- Llamarla "social-proof".
- Adjudicarle el siguiente padding:
```{css}
padding: 1rem 0 2rem;
```

## En proyect.html

1- Arreglar el padding de las secciones "Caso de estudio" y "Servicios".
Tip: El padding del selector de la clase "container" continene los atributos correctos.

## En contact.html

1- Arreglar la Navbar para que se puedan acceder las otras secciones.

2- En contact.html agregar la clase "form-layout" a la sección adecuada para que el formulario se vea centrado.

3- Establecer en dentro de la etiqueta que los campos "Nombre" y "Corrreo" son obligatorios.

## En styles.css agregar

1 - Modificar en root el valor de la variable
```{css}
--maxw
```

de 70 a 72rem.

2 - Agregar a todo el body el tamanaño de fuente utilizando la variable

```{css}
--fs-1
```
TIP: Para usar variables en css hay que utilizar la expresión: 

```{css}
var()
```
3 - A las clases que corresponden a las tarjetas en index.html
```{css}
rgrid-template-columns: repeat(auto-fit, minmax(240px, 1fr))
```

4 - En cambiar en el selector de "kpis" el atributo de display para que se vean de izquierda a derecha y no de arriba hacia bajo. 


## Puntos extras

- Footer con links de redes sociales
- Otro theme o paleta de colores para el sitio
