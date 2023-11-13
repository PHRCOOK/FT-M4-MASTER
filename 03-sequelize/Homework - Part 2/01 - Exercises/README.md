# HW 03: Sequelize part 1 | Ejercicios

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework seguiremos trabajando en los ejercicios de la parte 1. Para esto dirígete a la carpeta [**Homework - Part 1/01 - Exercices**](../../Homework%20-%20Part%201//01%20-%20Exercices/).

---

<br />

## **👩‍💻 EJERCICIO 1**

📍 Debes ir al archivo [**server.js**](./server.js) y revisar cómo están configuradas las rutas principales antes de continuar. De esa manera entenderás el flujo del programa.

📍 Además, si observas la carpeta middlewares, verás que ya tienes archivos para cada modelo con su respectivo esqueleto. Te encargarás de completarlas de la siguiente manera:

</br>

### **POST /character**

1. Esta ruta debe recibir por body los datos del modelo de `Character` y crear una instancia del mismo en la base de datos.

2. De no recibir todos los parámetros necesarios, debería devolver un status 404 con el mensaje "Falta enviar datos obligatorios".

3. Si alguna validación interna de la base de datos falla, debe devolver un status 404 con el mensaje "Error en alguno de los datos provistos".

4. Si todos los datos son provistos, debe devolver un status 201 y el objeto del personaje.

</br>

### **GET /character**

1. Esta ruta debe retornar todos los personajes que se encuentren creados en la base de datos. Además, este endpoint debe aceptar por query un valor de una raza para filtrar los resultados, por ejemplo: GET /character?race=human

2. Vamos a agregarle a nuestra ruta la posibilidad que pueda recibir un age por query, de manera que se puedan combinar ambos filtros, el que ya estaba (race) y el que acabamos de crear (age).

> [**NOTA**]: como ejercicio extra, puedes hacer el filtro de forma dinamica, es decir, que la ruta sirva para cualquiera de los atributos del modelo Character y no solo para age y race.

</br>

### **GET /character/:code**

1. Esta ruta debe retornar aquel personaje que coincida con el código enviado.

2. En el caso de no encontrarlo debe responder con status code 404 y el mensaje "El código ${codigo} no corresponde a un personaje existente".

</br>

### **PUT /character/:attribute?value=...**

1. Vamos a crear un PUT el cual va a recibir un atributo como param y un value como query.

2. Deberá modificar todos los valores de dicho atributo con el valor dado para todas las instancias de personajes que existan en la base de datos y cuyo valor de ese atributo sea null, es decir, si se hace un request PUT a /character/age?value=40 deberá buscar todos los personajes cuya edad sea null y a esos reemplazarlos por el valor 40.

3. Debe devolver simplemente un mensaje que diga 'Personajes actualizados'.

📍 Ya tenemos todos los modelos creados y funcionando correctamente pero cada uno por su cuenta, deberíamos relacionarlos de la siguiente forma: 😁

<p align="center">
  <img src="./img/DER.png" width="800px" />
</p>

4. Relaciones entre modelos

   a. Debes asociar los modelos dentro del archivo `index.js` de la carpeta `db`. Para ello primero deberán obtener los modelos desde la instancia de Sequelize creada:

   ```js
   const { Character, Ability, Role } = db.models;
   ```

   b. Ahora si debes usar los métodos `hasOne`, `belongsTo`, `hasMany` o `belongsToMany` según corresponda.

   c. Una vez que hayas completado exitosamente las asociaciones vas a tener que descomentar las lineas que se encuentran dentro del `beforeAll` del archivo `character-routes.spec.js` (Lineas 52 a 58):

   ```js
   await Promise.all([
      p1.createRole({ name: 'Tank' }),
      p1.createRole({ name: 'Top' }),
      p2.createRole({ name: 'Jungle' }),
      p3.createRole({ name: 'Mid' }),
      p3.createRole({ name: 'Support' }),
   ]);
   ```

---

<br />

## **🧠 Ejercicios Extra...**

### **Getter**

Vamos a definir un getter para el atributo age de los personajes, lo que queremos es que nos devuelva el valor de su edad pero concatenado con la frase 'years old' por lo que para un personaje que tenga 27 años nos debería devoler '27 years old'.

> [**Nota**]: posiblemente esto hará que rompan algunos tests anteriores que esperaban solamente el valor, anímate a arreglarlos. 😎

</br>

### **Virtual Field**

Ahora crearemos un campo virtual para el modelo de Ability que será como un mini resumen de la habilidad y lo llamaremos "summary", deberá retornar "${name} (${mana_cost} points of mana) - Description: ${description}" (La mana tienen que ser solo la parte entera).

</br>

### **POST /ability**

Debe recibir por body los datos del modelo de `Ability` y crear una instancia del mismo en la base de datos.

-  De no recibir todos los parámetros necesarios debería devolver un status 404 con el mensaje "Falta enviar datos obligatorios"
-  Si todos los datos son provistos debera devolver un status 201 y el objeto de la habilidad

</br>

### **PUT /ability/setCharacter**

Recibirá por body `idAbility` y `codeCharacter` y deberá asociarlos a partir del modelo de Ability y devolver el objeto de habilidad con `name`, `description`, `mana_cost` y `CharacterCode`.

</br>

### **PUT /character/addAbilities**

Similar al enpodint anterior pero ahora queremos poder desde el lado del personaje agregar una o mas habilidades en simultaneo que las recibiremos como un array dentro del body del request:

```js
{
  codeCharacter: 'TWO',
  abilities: [
    { name: 'abilityOne', mana_cost: 17.0 },
    { name: 'abilityTwo', mana_cost: 84.0 },
    { name: 'abilityThree', mana_cost: 23.0 }
  ]
}
```

Todas estas habilidades aun no existen en la base de datos...

</br>

### **GET /characters/roles/:code**

Crearemos otro endpoint para obtener todos los datos del personajes pero incluyendo también la información asociada a sus roles. Por ejemplo debería devolver algo así:

```js
{
      age: '27 years old',
      code: 'ONE',
      name: 'First',
      race: 'Human',
      hp: 90,
      mana: 150,
      date_added: '2022-03-27',
      Roles: [
        {
          id: 1,
          name: 'Tank',
          description: null
        },
        {
          id: 2,
          name: 'Top',
          description: null
        }
      ]
    }

```

<br />

😁😄 ¡Listo! Aprendiste a crear una base de datos, llenarla y hacerle peticiones modificando sus datos. ✨🚀

Dirígete a la carpeta 📂 "02 - Integration" y continúa desarrollando la app de Rick & Morty 🤩 ---
