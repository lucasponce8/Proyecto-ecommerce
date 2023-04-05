# E-commerce
Este es un ejemplo de un e-commerce desarrollado con React en el frontend y Node.js, Express y MongoDB en el backend. Se utiliza Mongoose como librería de modelado de datos para trabajar con MongoDB.

## Requerimientos
Para correr el proyecto, necesitas tener instalado lo siguiente:
- Node.js
- MongoDB

## Instalación
Para instalar y correr el proyecto, sigue los siguientes pasos:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

2. En la carpeta raíz del proyecto, moverse a cada carpeta e instalar las dependencias del servidor y del cliente:

```bash
cd api
npm install
cd..
cd client
npm install
cd ..
```

3. Crea un archivo .env en la carpeta raíz de api con las siguientes variables de entorno:

```
PORT=3001
MONGO_USER=tu_usuario_de_mongo
MONGO_PASSWORD=tu_contraseña_de_mongo
```

4. Inicia el servidor y el cliente en diferentes terminales:

```bash 
cd api
npm run dev
cd client
npm start
```
5. Abre el navegador en http://localhost:3000 para ver la aplicación.

## Estructura del proyecto
La estructura de archivos del proyecto es la siguiente:

```
.
├── client  # Carpeta con el código del frontend en React
│   ├── public
│   └── src
│       ├── components
│       ├── pages
│       └── App.js
├── api # Carpeta con el código del backend 
    ├── .env  # Archivo con las variables de entorno
    ├── app.js  # Archivo principal
    ├── package.json
    └── src
        ├── controllers  # Carpeta con las funciones controladoras del backend
        ├── models  # Carpeta con los modelos de Mongoose para la base de datos
        └── routes  # Carpeta con las rutas del backend
```

## Funcionamiento
La aplicación permite realizar las siguientes acciones:

- Ver todos los productos disponibles en el e-commerce.
- Ver los detalles de un producto en particular.
- Agregar un producto al carrito de compras.
- Eliminar un producto del carrito de compras.
- Realizar una compra con los productos del carrito de compras.
- Para la autenticación de usuarios, se utiliza JWT (JSON Web Tokens). Los usuarios pueden registrarse y hacer login en la aplicación para tener acceso a las funcionalidades de compra.

## Contribución
Si quieres contribuir al proyecto, puedes hacer un fork del repositorio y hacer un pull request con tus cambios. Asegúrate de seguir las mejores prácticas de desarrollo de software y de testear tus cambios antes de enviarlos.

## Autores
Este proyecto fue desarrollado por el equipo de E-commerce.