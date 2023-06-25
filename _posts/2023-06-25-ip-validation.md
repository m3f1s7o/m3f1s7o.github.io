---
layout: post
title: IP Validation
description: Reto de programación en bash para validar el formato correcto de una dirección IPv4.
image: ""
category: programacion
tags: [bash, codewars, 6kyu, kata]
comments: false
edit_url: false
toc: true
---

# IP Validation

[Enlace al Kata](https://www.codewars.com/kata/515decfd9dcfc23bb6000006/shell)

## Resumen
En este Kata lo que tenemos que hacer es comprobar el correcto formato de direcciones [IPv4](https://es.wikipedia.org/wiki/IPv4). Simplemente eso.

---
## Instrucciones (traducidas)

Escribe un algoritmo que identifique direcciones IPv4 válidas en formato punto decimal. Las IPs serán consideradas válidas si consisten de cuatro octetos, con valores entre `0` y `255`.

#### Ejemplos de entradas válidas

```
Examples of valid inputs:
1.2.3.4
123.45.67.89
```

#### Ejemplo de entradas no válidas

```
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
```

#### Notas

- Ceros al principio (ej. `01.02.03.04`) son considerados inválidos
- Se garantiza que la entradas es una sóla cadena

---
## Soluciones
### Mi solución

En esta solución no pondré algoritmo porque es un enfoque muy lineal, una condicional para cada requisito, si se cumple pasa a la siguiente condicional, sino termina el programa con un `False`, si el programa llega al final termina con un `True`.

#### Código

```bash
adr="$1"

re="^[0-9.]+$"
! [[ $adr =~ $re ]] && echo "False" && exit  # sólo números y puntos

IFS="." read -ra octet <<< "$adr"  # separar por puntos
[[ ${#octet[@]} -ne 4 ]] && echo "False" && exit  # 4 octetos


for oct in ${octet[@]}; do
  ! [[ ${#oct} -le 3 ]] && echo "False" && exit  # 3 o menos digitos en cada octeto
  ! [[ $oct -ge 0 && $oct -le 255 ]] && echo "False" && exit  # rango de 0 a 255 
  [[ $oct =~ ^0[1-9]+$ ]] && echo "False" && exit  # ceros al principio

done

echo "True"
```

Es una solución sencilla y fácil de entender, utilicé la sintáxis que aprendí en la [solución del anterior Kata](https://m3f1s7o.github.io/prize-draw/#otras-soluciones) para hacer las verificaciones necesarias, y lo combiné con [expresiones regulares (`regex`)](https://www.howtogeek.com/661101/how-to-use-regular-expressions-regexes-on-linux/).

Sin embargo, viendo otras soluciones, encontré maneras de hacer el problema en menos líneas.

---
### Otras soluciones

#### La más corta
Esta [solución](https://www.codewars.com/kata/reviews/58a66e2904d7e1afce000013/groups/58a66e314e1eac9af7000008) fue hecha por el usuario [zimo](https://www.codewars.com/users/zimo), tiene un enfoque más directo, y aunque parece complicada de entender, si la separas por partes es fácil comprender. 

```bash
echo "$1" | egrep -q "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$" && echo "True" || echo "False"
```

Básicamente lo que hace esta solución es:
1. Pasar la cadena de la IP (`$1`) a egrep (también es posible `grep -E`) para que busque el patrón entre comillas de manera silenciosa (`-q`).
2. Se busca el patrón `([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.)` al inicio de la cadena, lo que hace coincidir a las siguientes cadenas:
	- de un digito con rango del 0 al 9 ó (`[0-9]|`)
	- de dos digitos con rango de 10 al 99 ó (`[1-9][0-9]|`)
	- de tres digitos del 100 al 199 ó (`1[0-9]{2}|`)
	- de tres digitos del 200 al 249 ó (`2[0-4][0-9]|`)
	- de tres digitos del 250 al 255 (`25[0-5]`)
3. Cualquiera de las anteriores cadenas termina con un punto (`\.`), eso valida el octeto
4. La cadena tiene que tener 3 octetos con esas mismas reglas (`{3}`)
5. El último octeto comprueba lo mismo que en el punto 2. A diferencia de los otros octetos, éste no termina con un punto.
6. Finalmente, si eso se cumple, se regresa un `True`, si no se regresa `False`.

---
### Nuevo intento
Viendo las soluciones de la comunidad, noté que el patrón `([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.)` se utiliza mucho, y creo que es la mejor forma de hacerlo. Así que **modifiqué la solución de zimo**, combinando sintaxis de mi anterior solución, sin utilizar `grep` para hacer una _oneliner_ que quedó de esta forma:

```bash
o="([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])" && [[ $1 =~ ^(($o\.){3}$o)$ ]] && echo "True" || echo "False"
```

Que incluso fue un poco más corta que la propuesta original.

---
## Lo que aprendí

### En mi código
- Recordar un poco sobre regex.
- Aplicar la sintaxis de soluciones externas vistas en el [anterior Kata](https://m3f1s7o.github.io/prize-draw/#otras-soluciones)

### En el código de zimo
- Con un poco de ingenio se pueden crear patrones para *capturar* lo que se busca.
