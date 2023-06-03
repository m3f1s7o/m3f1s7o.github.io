---
layout: post
title: Pickle Rick
description: Máquina de Try Hack Me con temática de Rick & Morty
image: ""
category: maquina
tags: [maquinas, linux, tryhackme, easy_machine, pentesting]
comments: false
edit_url: false
toc: true
---

# Pickle Rick
Enlace: https://tryhackme.com/room/picklerick

Instrucciones:
Este reto con tema de Rick y Morty requiere que explotes un **servidor web** para encontrar 3 ingredientes que ayudarán a Rick a hacer su poción para transformarse de nuevo en humano de su forma de pepinillo.

Una vez que nos hayamos conectado a través de VPN a la máquina empezaremos con la fase de reconocimiento.

---
## Reconocimiento

### nmap
Lo primero que haremos es ejecutar nmap para descubrir los puertos del sistema objetivo:

```shell-session
$ nmap -n -Pn <ip> 
```

![nmap](/assets/images/maquinas/nmap.png)

Vemos que hay dos puertos abiertos, empezaremos por revisar el **servidor web del puerto 80** (_las instrucciones nos mencionaban un servidor web_).

### Servidor web
![Servidor](/assets/images/maquinas/web_server.png)

La página principal nos da a entender que habrá un `login`, pero al parecer tendremos que encontrar las credenciales por nuestra cuenta.

Ver este servidor web me dio ganas de utilizar `gobuster`.

### gobuster
Vamos a enumerar los directorios web de este servidor con la `wordlist` `/dirb/common.txt`, quizá nos encontremos algo interesante.

```shell-session
$ gobuster dir -w /usr/share/wordlists/dirb/common.txt -u http://<ip>
```

![gobuster](/assets/images/maquinas/gobuster.png)

Los páginas disponibles (`status: 200`) son:
- index.html
- robots.txt
- login.php

Efectivamente hay un login, pero aún necesitamos un usuario y contraseña, tal vez el contenido de `robots.txt` sea una de las dos:

![robots.txt](/assets/images/maquinas/robots.png)

No nos quedan más páginas para analizar, pero tal vez revisando el **código fuente** nos sea útil, veamos el de `login.php`:

![login.php](/assets/images/maquinas/login_source.png)

Podemos ver que Rick utilizó un comentario para guardar su usuario, por lo tanto, el texto que encontramos en `robots.txt` puede que sea nuestra contraseña, intentemos con eso.

---
## Ataque
¡Encontramos las credenciales del login! Ahora parece que tenmos acceso a una `web shell`, si introducimos `pwd` nos regresa:

![pwd](/assets/images/maquinas/pwd.png)

Por lo tanto, podemos utilizar este formulario para navegar por el sistema y encontrar los ingredientes necesarios. Hay que tener en cuenta que si utilizamos `cd`, no habrá un efecto en nuestra ruta actual, por lo que usaremos **rutas absolutas**.

### Primer ingrediente
Si hacemos un `ls`, vemos los archivos que están en el directorio del servidor web, y hay uno sospechoso con nombre `Sup3rS3cretPicl3Ingred.txt`. Veamos qué contiene.
Al parecer `cat`, `less`, `head` y otros comandos están siendo bloqueados en esta web shell, así que usaremos `nl` para ver el contenido. 

![Firs Ingred](/assets/images/maquinas/first.png)

Así que, aquí tenemos el primero, veamos dónde están los otros. 
El archivo `clue.txt` nos dice que busquemos en todo el sistema, así que revisemos los directorios `home`.

### Segundo ingrediente
El directorio `/home/rick` contiene un archivo llamado `second ingredients`, vaya, vaya...

![Second Ingred](/assets/images/maquinas/second.png)

Sólo nos falta uno, sigamos.


