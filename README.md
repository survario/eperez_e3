Emmanuel Perez - Desafio Tercera Entrega del Proyecto Final
----------------------------------------------------------------------

Para ejecutar la aplicación, 

* Ingrese en la terminal, ubicado en el directorio del proyecto, el comando:

- npm start

* Para ejecutar la aplicación en modo CLUSTER, ingrese el comando:

- npm start cluster 

----------------------------------------

A través del navegador, acceder a la ruta:

- localhost:8080/


------------------------------------------------------------------------

Al ingresar un nuevo usuario (Sign Up), el sistema a través de nodemailer ethereal email, envía un email al admin (emperezsur@gmail.com) con los datos del nuevo Usuario.

Cuando un usuario logueado confirmar su carrito, el sistema envía un email al admin con los detalles del pedido.

La aplicación se conecta a MongoDB Atlas


- Para realizar las pruebas en Postman:

  
Para el Esquema de Producto:
    {
        "name": String,
        "price": Number,
        "description": String,
        "stock": Number,
        "image": String
    }

Para el esquema de Usuario
    {
        name: String,
        password: String,
        email: String,
        age: Number,
        adress: String,
        phone: Number,
        avatar: String
    }


* Sesión Admin

- Al validarse con el user.name 'admin', y la contraseña ADMIN__PASS del archivo .env, se accede a ruta 'api/productos', métodos:
    
      POST, PUT, DELETE

    
*----------------------- Julio - 2022 --------------------------*

