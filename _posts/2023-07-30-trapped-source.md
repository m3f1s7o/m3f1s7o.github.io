---
layout: post
title: Trapped Source
description: Reto web de Hack The Box
image: ""
category: retos
tags: [retos, hackthebox, pentesting, web, very_easy]
comments: false
edit_url: false
toc: true
---

# Trapped Source

[Enlace del reto](https://app.hackthebox.com/challenges/491)

La dirección que se nos proporciona en este reto nos lleva a la siguiente página web:

![locked](/assets/images/maquinas/locked.png)

La cual es una caja fuerte de la cual necesitamos encontrar la combinación. Probando algunas de las más obvias, vemos que no va a ser una tarea sencilla si tratamos de adivinar. Por eso, vamos a ver el código fuente de la página:

## Código fuente

![source](/assets/images/maquinas/source_code.png)

El script `script.js` luce interesante, vamos analizarlo.

## javascript
![script](/assets/images/maquinas/script.js.png)

Un vistazo a la lógica del código nos dice que este script es el que valida nuestro intento de acceder, y el que nos va a dar la bandera una vez hayamos acertado. En resumidas cuentas:
- si nuestro pin es igual al definido como correcto 
	- va a enviar una petición `POST` a la ruta `/flag` con header de tipo de contenido `JSON`, y como cuerpo enviará el pin correcto.
- si no
	- va a mostrar el texto **INVALID!** y va a resetear el pin que pusimos.

![acceso](/assets/images/maquinas/acceso_script.png)

## Petición propia
Con esta información, podemos empezar a pensar que no es necesario utilizar la página web, podemos hacer la petición desde la terminal utilizando `CURL`, agregando cada uno de los campos necesarios. Y como `pin` podemos poner cualquier cosa, porque en la petición se envía el pin que ya fue validado.

```bash
$ curl -sX POST http://138.68.148.72:31634/flag -H "Content-Type: application/json" --data '{"pin": "  
000"}'
```

Y de esta manera obtenemos la bandera:

![bandera](/assets/images/maquinas/bandera_trapped.png)

