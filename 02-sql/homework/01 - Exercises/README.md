# HW 02: SQL | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework tendrás que consultar una base de datos a partir de la infroamción que se solicita en este README. Trabajaremos con información sobre películas, y con una base de datos llamada PostgreSQL.

---

<br />

## **✅ Pasos básicos para realizar la homework**

Para poder realizar esta homework, lo primero que deberás hacer es descargar la base de datos PostgreSQL. Para esto te compartimos el siguiente video tutorial.

<div align="center">
   <a href="https://www.youtube.com/watch?v=QQr0ZJuwkKM">
      <img src="./img/logo.png" alt="" width="70%" />
   </a>
</div>

<br/>

¡Listo! Ya tienes la plataforma PostgreSQL. Es momento de crear tu primera base de datos. Ahora abre la terminal **`SQL Shell (psql)`**. Aquí te pedirá que completes tu información. Sólo debes precionar siguiente (con la tecla _enter_) hasta que te pida tu contraseña. Allí deberás escribir la misma contraseña que utilizaste cuando instalaste PostgreSQL. La base de datos debe tener el nombre **`movies`**. Hazlo con el siguiente comando:

```SQL
   CREATE DATABASE movies;
```

Puedes verificar que se haya creado correctamente con el comando:

```SQL
   \l
```

> [**NOTA**]: este comando te mostrará una lista con todas las bases de datos que tienes. Algunas ya vienen por default, otras serán las que tu crees.

<br/>

Una vez que se haya creado correctamente deberás dirigite al archivo [**script/.env**](./script/.env) y escribir la contraseña que utilizaste en la instalación de PostgreSQL. Una vez hecho este paso, desde tu consola dirígete a la carpeta [**script**](./script) y ejecuta los comandos:

```bash
   npm install

   npm start
```

Esto hará que se ejcute un script que llenará tu base de datos con información sobre películas para que podamos trabajar en la homework. Sólo tendrás que ejecutarlo una vez. Si vez el mensaje "**`Tu base de datos se a cargado con información correctamente`**" en tu consola quiere decir que el proceso funcionó sin problemas.

⚠️ Es muy importante que no realices ninguna modificación dentro de la carpeta [**script**](./script), ya que generará problemas posteriormente. Sólo debes ejecutar los comandos ya mencionados.

---

<br />

<h1 align="center">📋 INSTRUCCIONES</h1>

</br >

## **👩‍💻 EJERCICIO 1**

¡Este primer ejercicio no lleva testing!

El primer paso es conectarnos a nuestra nueva base de datos **movies**. Para esto, dentro de la terminal **`SQL Shell`** escribe el comando:

```SQL
   \c movies
```

> [**NOTA**]: la letra "**c**" de este comando proviene de la palabra "**connect**". Nos servirá para conectarnos a cualquier base de datos que tengamos en nuestra computadora.

Luego escribiremos un comando que nos permitirá visualizar la información de una manera más amigable:

```SQL
   \x
```

Hagamos una primera consulta para comprobar que está funcionando todo correctamente. Le pediremos al prompt que nos devuelve todas aquellas películas que hayan sido creadas en 1999. Para esto escribiremos:

```SQL
   SELECT * FROM movies WHERE year=1999;
```

> [**NOTA**]: debe devolverte 4 filas de información.

---

</br >

A partir de ahora lee la instrucción de cada ejercicio e inténtalo resolverlo en tu prompt de SQL con Postgres. Una vez que tengas el comando correcto, dirígete al archivo [**homework.js**](./homework.js) y escríbelo en la variable correspondiente.

¡Con el comando **`npm test`** podrás comprobar si tu query fue la correcta!

---

</br >

## **👩‍💻 EJERCICIO 2**

¿Cómo sería el comando para obtener todas aquellas películas que tengan una duración menor a 90 minutos? En total son 9 películas que cumplen esta condición.

Escribe este comando en la variable correspondiente del archivo [**homework.js**](./homework.js) (no olvides incluir el ;punto y coma; del final de tu query!.

---

</br >

## **👩‍💻 EJERCICIO 3**

¿Cómo sería el comando para obtener todas aquellas películas creadas entre el año 1930 y 1940? En total son 4 películas que cumplen esta condición.

Escribe este comando en la variable correspondiente del archivo [**homework.js**](./homework.js) (no olvides incluir el ;punto y coma; del final de tu query!.

---

</br >

## **👩‍💻 EJERCICIO 4**

¿Cómo sería el comando para obtener todas aquellas películas que tengan en su titulo el substring '_`til`_'? En total son 3 películas que cumplen esta condición.

Escribe este comando en la variable correspondiente del archivo [**homework.js**](./homework.js) (no olvides incluir el ;punto y coma; del final de tu query!.

---

</br >

## **👩‍💻 EJERCICIO 5**

¿Cómo sería el comando para obtener todas aquellas películas que tengan sólo 1 actor en su propiedad **actors**? En total son 27 películas que cumplen esta condición.

Escribe este comando en la variable correspondiente del archivo [**homework.js**](./homework.js) (no olvides incluir el ;punto y coma; del final de tu query!.

---

</br >

## **👩‍💻 EJERCICIO 6**

¿Cómo sería el comando para obtener el título de cada película, incluyendo el promedio de todas sus puntuaciones de rating? Recuerda que "**rating**" es una propiedad de la tabla movies, y es un arreglo de números.

Escribe este comando en la variable correspondiente del archivo [**homework.js**](./homework.js) (no olvides incluir el ;punto y coma; del final de tu query!.

---

<br />

## **👩‍💻 EJERCICIO 7**

¿Cómo sería el comando para obtener a los actores de aquellas películas que incluyan en su nombre el string "_Fast and_", pero que también sean del año 2016? En total serán dos filas con nombres de actores.

Escribe este comando en la variable correspondiente del archivo [**homework.js**](./homework.js) (no olvides incluir el ;punto y coma; del final de tu query!.

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**SQL Querys for Postgre**](https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-STATEMENTS-GENERAL-SQL)

---

<br />

¡Listo! Aprendiste a realizar consultas a una base de datos mediante querys SQL.
