---
layout: post
title: 1x1 Hello Friend
description: En este episodio conocemos a Elliot
image: ""
category: mr_robot
tags: [series]
comments: false
edit_url: false
toc: true
---
# Hello Friend

## El café de Ron
### Conexión de fibra óptica
Esta escena es una de mis favoritas, Elliot está en _El Café de Ron_, entra Ron, el dueño del local, y Elliot lo confronta. Primero le dice que la razón que va ahí es porque el Wi-Fi es rápido, tiene **conexión de fibra óptica con velocidades gigabit**.

En el presente muchas de nuestras casas ya cuentan con conexión de fibra óptica, pero para el año en el que salió la serie (2015), la fibra óptica aún era una novedad. Justo esto fue lo que le pareció extraño a Elliot, por lo que procedió a interceptar el tráfico de la red.

### Interceptar el tráfico de la red
La serie no dice con qué herramienta Elliot hizo esto, pero algunas de las herramientas que se pueden usar para este fin son `wireshark` y `tcpdump`. Este proceso consiste en estar conectado a una red y con una de las herramientas mencionadas empezar a _escuchar_ las comunicaciones que viajan por esa red. Es como si estando en un parque te enfocas en las dos personas que están sentadas conversando y agudizas tu oído para captar todo lo que están diciendo.

Interceptar/escuchar el tráfico de una red nos da la oportunidad de verificar que la red está en buenas condiciones, notar tráfico inusual o, incluso, espiar.

A continuación, Elliot dice que decidió _hackear_ a Ron, no se especifica qué hizo exactamente, pero es probable que con el análisis del tráfico de la red diera con el sitio que Ron estaba operando, _Los chicos de Plato_, ingresara (de alguna forma) como administrador y copiara todo el contenido del sitio como evidencia, incluso los correos.

### Servidores
Un servidor es una computadora dedicada a proveer *recursos* a otras computadoras. El tipo de servidor que se menciona aquí es un **servidor web**, el cual provee el contenido de Los chicos de Plato. Si el servidor es cerrado y borrado, este sitio y todo su contenido dejan de existir.

La razón de que Elliot haya confrontado a Ron es porque si lo hacía de manera remota, había la posibilidad que Ron huyera y cerrara los servidores de su sitio.

### Red Tor 
Tor es una [red](../la-red-mas-simple#Red) que funciona de forma especial: está enfocada a **anonimizar a sus usuarios**. Quienes se conectan a esta red quieren dificultar el proceso de ser identificados. La [red Tor](https://www.youtube.com/watch?v=79m7mX3rC8Q) utiliza el protocolo `onion` para lograr enmascarar a sus usuarios.

![Red Tor](/assets/images/posts/red_tor.png)

#### Protocolo onion
Este protocolo trabaja por capas (por eso el _onion_), con estas capas logra ofuscar la identificación de los usuarios y encriptar sus comunicaciones.


Pese a todo esto, como Elliot dice: _la red Tor no es tan anónima como crees_. Vamos, no es una herramienta mágica que te hace invisible, aún en su diseño tiene algunos puntos débiles. Si alguien analiza el tamaño de los mensajes y la frecuencia de la comunicación entre el usuario y en nodo de entrada, y aparte tiene acceso al nodo de salida, donde las comunicaciones ya no están encriptadas por la red Tor, es posible conocer el tráfico del usuario (justo lo que conocía Elliot).

### En resumen...
Resumiendo lo que Elliot hizo en esta escena:
1. Le gustaba la velocidad de la red del café
2. Notó tráfico raro
3. Capturó y analizó el tráfico de la red
4. Encontró el nodo de salida de la red Tor y descubrió sus servidores de Ron
5. Ingresó a los servidores de Los chicos de Plato
6. Descargó todo su contenido y correos
7. Hizo una denuncia y confrontó a Ron en lo que llegaba el FBI

![El café de Ron](/assets/images/posts/ron's_coffee.png)

---

## Allsafe

### Log file
Los `log files` son archivos en lo que se lleva un registro de todas las acciones realizadas en un sistema. Este tipo de archivos son muy importantes para los administradores del sistema porque cuando ocurre un ataque o una brecha de seguridad, analizar los log files puede dar pistas de cómo ocurrió dicho ataque. 

Mirando el log file del servidor Elliot pudo determinar que el ataque que sufrieron fue un ataque [`RUDY`](https://www.cloudflare.com/learning/ddos/ddos-attack-tools/r-u-dead-yet-rudy/).

### RUDY attack
**R U Dead Yet?** (¿ya estás muerto?) es un ataque de tipo DoS (abajo explicado), el cual explota servidores que reciben información de formularios a través de enviar respuestas muy largas de forma muy lenta. El servidor tiene que esperar a que llegue toda la respuesta, por lo que estará siendo realentizado y no podrá atender a otros usuarios de forma efectiva. Es como si al pagar en la caja del supermercado la cuenta fuera de $1,000, y tú ingresaras una moneda de $1 cada diez segundos.

#### Ataque DoS
Los ataques de _Denegación de Servicio_ (Denial of Service) son ataques que son muy comunes en la actualidad. Su propósito principal es **impactar negativamente en el desempeño de un servidor** para hacerlo lento, impedir que usuarios legítimos accedan a él y, en casos extremos, dejarlo inoperativo.

El ataque RUDY es un ejemplo de ataque DoS porque su meta es ocupar al servidor con peticiones lentas e inutiles, sin embargo hay más formas de ataques DoS, uno de los más comunes es el [`DDoS`](./#ataque-ddos).

---
## La oficina de Krysta

### Ataque de fuerza bruta
Cuando conocemos por primera vez a Krysta sabemos que Elliot tiene acceso a sus cuentas de redes sociales y de correo, ¿cómo logró esto? Pues, al parecer utilizó una herramienta para hacerle fuerza bruta a sus cuentas. De hecho, en otras escenas podemos ver que se llama `elpscrk` (¿elliot-password-crack?) y la utiliza para obtener las contraseñas de Ollie y del novio de Krysta. Éste método de obtener contraseñas es conocido como **ataque de fuerza bruta** y consiste en probar miles e incluso millones de posibilidades hasta encontrar la correcta.

Esta herramienta funciona recibiendo una lista de palabras (`wordlist`), que son las posibles contraseñas para el usuario de Krysta, la wordlist que utiliza Elliot contiene 9,875,894 posibles contraseñas, la contraseña correcta la encuentra en 24 segundos. 

En la actualidad este ataque ya no es tan fácil de hacer para sitios online, porque los `firewalls` detectan el ataque y lo bloquean, sin embargo aún es útil con distintos enfoques. Y también agregar que, en la vida real este tipo de ataques requieren de un gran poder de procesamiento y generalmente toman horas en llevarse a cabo.

#### Wordlist
Una wordlist consiste en una lista de posibles credenciales (generalmente) con las que se intentará probar acceder a un sistema. Estas wordlists se pueden encontrar en línea recopiladas de bases de datos filtradas en el pasado como las SecLists, pero también se pueden **crear especialmente para un objetivo**, como lo hace Elliot para el novio de Krysta. Para ello hay que conocer ciertos datos de nuestro objetivo y con herramientas como `hydra` se pueden generar permutaciones de estas palabras, obteniendo una wordlist gigantesca si es necesario.

![elpscrk](/assets/images/posts/elpscrk.png)

---
## Ejecutivos de E-Corp

### Linux
Cuando los ejecutivos de E-Corp visitan Allsafe, **Tyrell Wellick** le dice a Elliot que al igual que él, también **utiliza Linux**. Y como Linux es generalmente utilizado por personas con un conocimiento más avanzado, es sorpresa para Elliot.

Linux es un sistema opertativo que a diferencia de Windows es de código abierto y gratuito, esto lo hace altamente configurable y adaptable, por ello existen muchas variaciones de Linux. **Kali Linux y Parrot OS** son dos _versiones_ de este sistema operativo y están pensado específicamente para **hacking y pentesting**. De hecho, en la serie Elliot utiliza Kali para sus ataques.

#### Gnome y KDE
También Wellick menciona _Gnome_ y _KDE_, éstos son dos entornos de escritorio muy populares en Linux, básicamente lo que hacen es darle una apariencia común a las ventanas, íconos y más en el sistema operativo. Wellick es más de KDE y, a decir verdad, yo también.

| Ventanas de Gnome | Ventanas de KDE |
| ----------------- | --------------- |
| ![gnome](https://i.stack.imgur.com/YovBy.jpg) | ![kde](https://news-cdn.softpedia.com/images/news2/beautify-your-kde-plasma-5-desktop-environment-with-freshly-ported-adapta-theme-517792-2.jpg)


---
## Ataque a Allsafe

### Ataque DDoS
Los ataques [`DoS`](./#ataque-dos) son efectivos pero también son fáciles de detectar y bloquear por los `firewalls` de los servidores, si se detectan patrones de denegación de servicio proviniendo de una cierta dirección `IP`, se bloquea esa dirección y problema solucionado.
Por este motivo los atacantes han ideado ataques más complejos y más efectivos. El **Distributed Denial of Service** (Denegación de Servicio Distribuido) es la evolución de DoS. Con este ataque se utilizan **miles o millones de dispositivos** para hacer peticiones a servidores, saturandolos con tanto tráfico. De esta forma un firewall ya no es tan efectivo para diferenciar entre un atacante y un usuario legítimo que trata de utilizar el servidor. 

Para conocer más sobre los ataques DDoS y ver un caso real, mira el siguiente [vídeo](https://youtu.be/_IPeU2upbaw).


![Reinicio del servidor](/assets/images/posts/rebooting_server.png)
La versión 

- DDoS attack
	- Reconfigure DNS
	- Reboot the servers
	- They are inside the network
	- Security protocols
	- Load sharing
	- Redirect traffic
 - Rootkit
	 - Serverfarm
	 - Backup server
	 - Autoswitch
	 - Switch DNS



