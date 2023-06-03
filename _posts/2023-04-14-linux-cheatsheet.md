---
layout: post
title: Cheatsheet de Linux
description: Mi recopilación de comandos para el uso de Linux.
image: ""
category: cheatsheet
tags: [linux, cheatsheet, comandos]
comments: false
edit_url: false
toc: true
---

# Comandos en Linux

Sintaxis general de los comandos en Linux:
```shell-session
$ comando -opcion argumentos
$ ls -la /etc/  # ejemplo 
$ ls /etc/ -la  # tambien es posible. menos comun
```

---
## Buscar archivos

| Descripción                                                                                                           | Comando                                                     |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Busca un archivo en todo el sistema, propiedad del usuario **usuario7** y del grupo **grupo6** con tamaño de 33 bytes | `find / -type f -size 33c -user usuario7 -group grupo6 2>/dev/null`                                                            |
| Busca un archivo en el directorio actual, sin permisos de ejecución, con tamaño de 1033 bytes y muestra su contenido  | `find ./ -type f ! -executable -size 1033c -exec cat {} \;` |

## Manipulación de texto

### Cambiar posición de caractéres

| Descripción                                       | Comando                                         |
| ------------------------------------------------- | ----------------------------------------------- |
| Rota los caractéres 13 posiciones (cifra Caesar) | `cat <file> | tr [a-mn-zA-MN-Z] [n-za-mN-ZA-M]` |

### Eliminar palabras

| Descripción                                 | Comando                                   |
| ------------------------------------------- | ----------------------------------------- |
| Elimina palabras de menos de _x_ caractéres | `sed -r '/^.{,<x>}$/d' <archivo>`         |
| Elimina palabras sin caractéres especiales  | `sed -r '/[!-/:-@\[-\{-~]+/!d' <archivo>` |
| Elimina palabras sin números                | `sed -ri '/[0-9]+/!d' <archivo>`          |


---
## Administración de usuarios y grupos
Los siguientes comandos se ejecutan con `sudo` o con usuario `root`.

### Usuarios

| Acción             | Comando                                       | Descripción                                                                       |
| ------------------ | --------------------------------------------- | --------------------------------------------------------------------------------- |
| Crear              | `useradd -m -shell </ruta/ala/shell> <nombre>` | Crea un nuevo usuario con su directorio home y se especifica su shell por default |
| Cambiar contraseña | `passwd <usuario>`                             | Cambia/establece la contraseña para el usuario especificado                       |
| Eliminar           | `userdel <usuario>`                            | Elimina el usuario especificado                                                   |

### Grupos

| Acción           | Comando                         | Descripción                              |
| ---------------- | ------------------------------- | ---------------------------------------- |
| Crear            | `groupadd <nombre>`              | Crea un grupo con el nombre especificado |
| Agregar usuarios | `usermod -aG <grupo> <usuario>` | Agrega el usuario al grupo especificado                                         |

---
## iptables
Los siguientes comandos se ejecutan con `sudo` o con usuario `root`.
### Filter Table

| Acción              | Comando                                       | Descripción                                           |
| ------------------- | --------------------------------------------- | ----------------------------------------------------- |
| Política de entrada | `iptables --policy INPUT <ACCEPT/DROP>`       | Establece la política de entrada a aceptar/rechazar   |
| Filtrar por ip      | `iptables -I INPUT -s <ip> -j DROP`           | Rechaza la conexión proveniente de la ip especificada |
|                     | `iptables -I OUTPUT -d <ip> -j DROP`          | Rechaza las conexiones a la ip especificada           |
| Filtrar por puerto  | `iptables -I INPUT -p tcp --dport 80 -j DROP` | Rechaza las conexiones `tcp` al puerto 80             |
| Listar cadenas      | `iptables -L --line-numbers`                  | Lista las cadenas con numeración                                                      |
| Eliminar cadena     | `iptables -D INPUT <n>`                       | Elimina la cadena especificada                        |


