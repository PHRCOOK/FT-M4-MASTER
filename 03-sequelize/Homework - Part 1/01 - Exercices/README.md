# HW 03: Sequelize part 1 | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta Homework crearás un CRUD con algunas rutas interesantes que ayudarán a filtrar información, además de crear relaciones entre los modelos.

---

<br />

## **📍 CONSIGNA**

La idea de esta homework será simular la estructura de datos de un juego al estilo League of Legends (si no lo conoces, no te preocupes; no es necesario conocerlo para completar la homework).

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **📖 Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

-  Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

¡Listo! Para correr los tests de los ejercicios utiliza el comando:

```bash
npm run test
```

---

<br />

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta llamada `db`.
-  Una carpeta llamada `img`.
-  Una carpeta llamada `middlewares`.
-  Una carpeta llamada `test`.
-  Un archivo `index.js`.
-  Un archivo `package.json`.
-  Un archivo `server.js`.
-  Y el archivo **README.md** que ahora mismo estás leyendo. 😙

---

<br />

## **👩‍💻 EJERCICIO 1**

### **Conexión a la BD**

📍 Comenzaremos creando la base de datos. Esto debemos hacerlo desde alguna interfaz a PostgreSQL, ya sea por consola o desde PGAdmin. Deberás ejecutar el comando:

```sql
  CREATE DATABASE henrydatabase;
```

📍 Ahora que ya tenemos creada la base de datos procederemos a conectarla desde nuestro ORM (Sequelize) para poder interactuar con ella. Dentro de la carpeta `db` verás que en el archivo `index.js` tiene lo siguiente:

```js
const db = new Sequelize(
   'postgres://user:password@localhost:5432/henrydatabase',
   {
      logging: false,
   }
);
```

📍Deberás reemplazar donde dice **`user`** y **`password`** por tu usuario y contraseña de Postgres para que la conexión sea exitosa. Sino, al correr el servidor te arrojará un error informando dónde está fallando el intento de conexión. Si por algún motivo al instalar Postgres cambiaste el puerto default también tendrás que modificar donde dice **`5432`**.

---

<br />

## **👩‍💻 EJERCICIO 2**

### **Modelo Character**

Este modelo va a representar la plantilla de un personaje que podrías seleccionar del juego y tendrá las siguientes propiedades:

<details>
   <summary>code</summary>
   <ul>
      <li>String</li>
      <li>5 caracteres máximo</li>
      <li>Primary Key</li>
   </ul>
</details>
<details>
   <summary>name</summary>
   <ul>
      <li>String</li>
      <li>Debe ser único</li>
   </ul>
</details>
<details>
   <summary>age</summary>
   <ul>
      <li>Integer</li>
   </ul>
</details>
<details>
   <summary>race</summary>
   <ul>
      <li>Enum ('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other')</li>
      <li>Default 'Other'</li>
   </ul>
</details>
<details>
   <summary>hp</summary>
   <ul>
      <li>Float</li>
      <li>No puede ser null</li>
   </ul>
</details>
<details>
   <summary>mana</summary>
   <ul>
      <li>Float</li>
      <li>No puede ser null</li>
   </ul>
</details>

</br>

> [**NOTA**]: adicionalmente debes quitar los timestamps automáticos de createdAt y updatedAt.

</br>

### **Modelo Ability**

<details>
   <summary>name</summary>
   <ul>
      <li>String</li>
      <li>No puede ser null</li>
   </ul>
</details>
<details>
   <summary>description</summary>
   <ul>
      <li>Text</li>
   </ul>
</details>
<details>
   <summary>mana_cost</summary>
   <ul>
      <li>Float</li>
      <li>No puede ser null</li>
   </ul>
</details>

</br>

> ⚠️ **[IMPORTANTE]**: la combinación "name" + "mana_cost" debe ser única y llamarse 'compositeIndex'.

</br>

### **Modelo Role**

<details>
   <summary>name</summary>
   <ul>
      <li>String</li>
      <li>Debe ser único</li>
      <li>No puede ser null</li>
   </ul>
</details>
<details>
   <summary>description</summary>
   <ul>
      <li>String</li>
   </ul>
</details>

---

<br />

## **👩‍💻 EJERCICIO 3**

### **Validaciones**

📍 Vamos a agregar algunas validaciones a nivel base de datos:

-  **Ability | mana_cost**: el valor debe estar entre 10.0 y 250.0.
-  **Character | name**: el valor no puede ser "Henry", "SoyHenry" o "Soy Henry".
-  **Character | code**: similar al anterior, vamos a hacer que no pueda ser "HENRY", incluyendo cualquier variación/combinación de mayúsculas y minísculas (Armar un custom validator).

---

<br />

😁😄 ¡Listo! Aprendiste a crear una base de datos, llenarla y hacerle peticiones modificando sus datos. ✨🚀

Dirígete a la carpeta 📂 "02 - Integration" y continúa desarrollando la app de Rick & Morty 🤩 ---
