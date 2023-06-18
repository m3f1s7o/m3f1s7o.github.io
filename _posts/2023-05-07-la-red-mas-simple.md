---
layout: post
title: La red más simple
description: Red de dos computadoras simulada en Cisco Packet Tracer.
image: ""
category: redes
tags: [packettracer]
comments: false
edit_url: false
toc: true
---

# La red más simple

## Red
> Una red es un conjunto de computadoras que están conectadas en un medio común y comparten información entre sí. 

La red más grande que existe es internet, es una red a la que se conectan millones de dispositivos y que te permite ver esta página web. Pero dejando de lado internet, también utilizas otras redes más pequeñas en tu día a día, por ejemplo, cuando conectas tu smarthpone a una bocina o audifonos bluetooth, estás conectándote a la red de ese dispositivo y por lo tanto puedes intercabiar información con él. 

Existen distintos tipos y topologías de redes, pero en este post vamos a ver la red más simple utilizando el simulador Cisco Packet Tracer.

## Construcción

### Agregar los equipos
Para esta red vamos a agregar 2 `PCs` o `laptops` al espacio lógico.

![Agregar equipos](/assets/images/posts/red01.png)

### Conexión
Ahora conectaremos estos dos equipos utilizando el `Cable de cable cruzado` desde el puerto `FastEthernet0` al mismo del otro equipo.

![Conectar equipos](/assets/images/posts/red02.png)

Ya tenemos una red, sin embargo si probamos hacer envíar una `PDU simple` de un equipo al otro, vamos diciendo que _no hay puertos funcionales para el dispositivo_. Esto pasa porque necesitamos agregar una dirección `IP` a cada equipo, de esa manera los dispositivos _tendran una identificación_ y el otro podrá comunicarse con él.

### Agregar dirección IP
Para agregar una dirección IP vamos a ingresar a la `configuración de IP` como se muestra en la imagen:

![Agregar IPs](/assets/images/posts/red03.png)

En la ventana que se nos abre vamos a llenar los siguientes campos:
- IPv4 Address: `192.168.0.1`
- Subnet Mask: `255.255.255.0`

![Agregar IPs](/assets/images/posts/red04.png)

Y cerramos la ventana. Ahora podemos **posar** el cursor sobre la PC y veremos que ya tiene una dirección IP asignada.

![Verifica IPs](/assets/images/posts/red05.png)

Ahora vamos a repetir el proceso con la laptop utilizando ahora la dirección IP `192.168.0.2` con la misma máscara de subred.

![Segunda IP](/assets/images/posts/red06.png)

Por último pondré en notas (presionando la tecla `N`) la dirección de los equipos.

![Etiquetas](/assets/images/posts/red07.png)



