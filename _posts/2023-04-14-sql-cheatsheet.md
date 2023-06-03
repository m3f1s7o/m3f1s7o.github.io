---
layout: post
title: Cheatsheet de MariaDB
description: Mi recopilación de comandos para usar mariadb o mysql desde la terminal.
image: ""
category: cheatsheet
tags: [sql, cheatsheet, comandos, bd]
comments: false
edit_url: false
toc: true
---

# MariaDB

---
## Base de datos

| Acción   | Comando                      |
| -------- | ---------------------------- |
| Crear    | `CREATE DATABASE nombre_db;` |
| Eliminar | `DROP DATABASE nombre_db;`   |
| Listar   | `SHOW DATABASES;`            |

---
## Tablas

| Acción         | Comando                                                                                                                                     | Descripción                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Crear tabla    | `CREATE TABLE nombre_tabla(columna1 INT(5) AUTO_INCREMENT PRIMARY KEY NOT NULL, columna2 VARCHAR(20) NOT NULL DEFAULT "x", columna3 DATE);` | Crea una tabla con tres columnas con sus respectivos tipos de datos |
| Eliminar tabla | `DROP TABLE nombre_tabla;`                                                                                                                  | Elimina la tabla especificada                                       |
| Listar | `SHOW TABLES;` | Lista todas las tablas de la base de datos |

### Modificar

| Acción                    | Comando                                                                                 | Descripción                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Agregar columna           | `ALTER TABLE nombre_tabla ADD COLUMN nueva_columna DECIMAL(6,2) NOT NULL AFTER columna2;` | Agrega una nueva columna especificando su tipo de dato después de cierta columna |
| Cambiar tipo de columna   | `ALTER TABLE nombre_tabla MODIFY columna VARCHAR(20) NOT NULL UNIQUE;`                    | Altera el tipo de dato que almacena la columna                                   |
| Cambiar nombre de columna | `ALTER TABLE nombre_tabla CHANGE COLUMN nombre nuevo_nombre DECIMAL(6,2) NOT NULL;`       | Cambia el nombre de una columna a la vez que se especifica su tipo de dato                                                                                 |

### Llaves

| Acción      | Comando                                                                                   | Descripción                                                                  |
| ----------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Agregar PK  | `ALTER TABLE nombre_tabla ADD PRIMARY KEY(columna);`                                      | Establece como llave primaria una columna de la tabla                        |
| Eliminar PK | `ALTER TABLE nombre_tabla DROP PRIMARY KEY;`                                              | Elimina la llave primaria de una tabla                                       |
| Agregar FK  | `ALTER TABLE nombre_tabla ADD CONSTRAINT FOREIGN KEY(columna) REFERENCES tabla2(col_pk);` | Establece una llave foránea que referencia a la llave primaria de otra tabla |
| Eliminar FK | `ALTER TABLE nombre_tabla DROP FOREIGN KEY col_fk;`                                       | Elimina la llave foránea de una columna                                                                             |

---
## Registros

### Mostrar

| Acción                   | Comando                                                             | Descripción                                                                                          |
| ------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Mostrar todos            | `SELECT * FROM nombre_tabla;`                                       | Muestra todos los registros de la tabla especificada                                                 |
| Mostrar algunas columnas | `SELECT col1, col2, col3 FROM nombre_tabla;`                        | Muestra todos los registros de las columnas especificadas                                            |
| Filtrar                  | `SELECT * FROM nombre_tabla WHERE columna = "xxx";`                 | Muestra los registros donde `columna` tenga valor `xxx`                                              |
| Ordenar                  | `SELECT col1, col2 FROM nombre_tabla ORDER BY col2 ASC LIMIT 0,20;` | Muestra los 20 registros de las columnas especificadas, ordenando en formato ascendente la columna 2 |
| Agrupar                  | `SELECT * FROM nombre_tabla GROUP BY columna;`                      | Muestra los registros agrupados por la columna especificada                                          |

### Actualizar y borrar

| Acción     | Comando                                                                  | Descripción                                                                                                                   |
| ---------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Actualizar | `UPDATE nombre_tabla SET col1 = "xxx" col2 = "yyy", WHERE col3 = "zzz";` | Actualiza los registros que coincidan con la cláusula `WHERE`, **si no se utiliza `WHERE` se actualizará toda la tabla** |
| Borrar     | `DELETE FROM nombre_tabla WHERE identifier = "xxx";`                     | Borra los registros que coincidan con la condición, al igual que `UPDATE` **si no se usa `WHERE` se eliminarán todos los registros de la tabla**                                                                                                                              |

---
## Importar / Exportar
**Los siguientes comandos se ejecutan desde la terminal del usuario.**

| Acción   | Comando                                          | Descripción                                           |
| -------- | ------------------------------------------------ | ----------------------------------------------------- |
| Importar | `mariadb -u usuario -p nombre_bd < script.mysql` | Importa el contenido del script en la bd especificada |
| Exportar | `mysqldump -u usuario -p nombre_bd > bd.mysql`   | Exporta el contenido de una bd a un script            |

