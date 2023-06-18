---
layout: post
title: Prize Draw
description: Reto de programación en bash para operar con cadenas y ordenarlas.
image: ""
category: programacion
tags: [bash, codewars, 6kyu]
comments: false
edit_url: false
toc: true
---

# Prize Draw

[Enlace al kata](https://www.codewars.com/kata/5616868c81a0f281e500005c)

> En este problema se nos pide encontrar el nombre ganador de un sorteo, como datos de entrada tenemos una lista de nombres, una lista de _pesos_ y una posición que será el nombre seleccionado. Para cada nombre tendremos que sumar el valor de todas sus letras, sumar la longitud del nombre y por último multiplicar por el peso que le corresponde de la lista, el resultado es un número ganador para cada nombre. Con todos los números ganadores obtenidos tendremos que ordenarlos de mayor a menor (si hay dos números ganadores iguales se ordenará además alfabéticamente). Por último, devolveremos al nombre en la posición solicitada.

## Instrucciones

_Instrucciones traducidas_

Para participar en un sorteo cada quien da su nombre.

Cada letra del nombre tiene un valor el cual es su posición en el alfabeto inglés. `A` y `a` tienen una posición `1`, `B` y `b` posición `2` y así.

La _longitud_ del nombre se suma a la _suma_ de esas posiciones, de ahí un número `som`.

Un array de pesos aleatorios está ligado a los nombres y cada `som` es multiplicado por su correspondiente peso para obtener lo que llaman un `número ganador`.

### Ejemplo

```
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = longitud del nombre + 16 + 1 + 21 + 12 = 4 + 50 -> 54
El *peso* asociado con PauL es 2 así que el *número ganador* de PauL es  54 * 2 = 108.
```

Ahora se pueden ordenar los nombres en el orden _decreciente_ de los `números ganadores`. Cuando dos personas tienen el mismo `número ganador` ordénalos _alfabéticamente_ por sus nombres.

### Tareas

- parametros: `st` una cadena de nombres, `we` un array de pesos, `n` una posición
- regresar: el nombre del participante con la posición `n` (posiciones son numeradas a partir de 1)

### Ejemplo

```
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

La función debe regresar: "PauL"
```

### Notas

- El array de pesos es por lo menos tan largo como la cantidad de nombres, puede ser más largo.
- Si `st` está vacía, regresa "No participants".
- Si `n` es más grande que el número de participantes, entonces regresa "Not enough participants".

---
## Mi solución

### Algoritmo

![algoritmo](/assets/images/posts/prize_draw_algorithm.png)

### Código

_Código con comentarios en español_

```bash
#!/bin/bash

# valida los datos de entrada
validate () {
  if [[ -z $1 ]]; then
    echo "No participants"
    
  elif [[ $(echo $1 | tr "," "\n" | wc -l) -lt $3 ]]; then
    echo "Not enough participants"
  
  else
    rank $1 $2 $3
    
  fi
   
}

# procesa y ordena los nombres
rank () {
  # pasa a minúsculas los nombres
  list="${1,,}"

  # separa nombres y pesos
  IFS="," read -ra names <<< "$list" 
  IFS="," read -ra wghts <<< "$2" 

  # obtiene cada nombre
  for i in $(seq 0 $(( ${#names[@]} -1 ))); do
    name="${names[i]}"
    total=0

	# obtiene cada letra y su valor
    for j in $(seq 0 $(( ${#name} -1 ))); do
      #total=$((total + $(echo $abc | cut -d "${name:j:1}" -f 1 | wc -c)))  # calcula el total en una línea, pero se mantuvo dando Execution Timed Out
      
      local value=$(charValue ${name:j:1})
      total=$((total + value))
      
    done

	# calcula los números ganadores ((total + len) * weight)
    w_num=$(( $((total + ${#name})) * ${wghts[i]} ))

	# cadena de nombres y números ganadores
    nms_wnum+="$name $w_num,"
    
  done          

  # ordena primero por el número ganador y luego por nombre
  sorted=$(echo $nms_wnum | tr "," "\n" | sort -k 2,2nr -k 1,1 | tr " " ":")

  # obtiene el nombre de la posición deseada
  name=$(echo $sorted | tr " " "\n" | nl -s" " -w1 | grep -w "$3" | cut -d ":" -f 1 | cut -d " " -f 2)
  # devuelve el nombre con la primer letra en mayúscula
  echo ${name^}
    
}

# obtiene los valores indivuduales de las letras
charValue () {
  abc="abcdefghijklmnopqrstuvwxyz"

  # corta la cadena abc con el argumento dado
  IFS="$1" read -ra tmp <<< "$abc"

  # obtiene la longitud de la variable tmp
  local value=$(( ${#tmp} +1 ))
  echo $value
  
}

validate "$1" "$2" "$3"
``` 


