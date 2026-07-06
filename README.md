# API Rest en Node.js

## Descripción

API REST para la gestión de productos desarrollada con Node.js y Express. La API utiliza autenticación mediante JWT y Firebase para la persistencia de datos.

## Deploy

La API se encuentra desplegada en Render y puede accederse desde la siguiente URL:

```text
https://api-node-entrega.onrender.com
```

## Instalación

1. Clonar el repositorio.

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Autenticación

### Usuario de prueba

- **Email:** `prueba@example.com`
- **Password:** `1234`

Este usuario permite obtener un token JWT en `/api/auth/login` para acceder a las rutas protegidas.

## Documentación de la API

### Obtener todos los productos

- **GET** `/api/products`
- **Descripción:** Devuelve la lista completa de productos.
- **Respuesta de ejemplo:**

```json
[
  { "id": 1, "name": "Camiseta Básica", "price": 15000 },
  { "id": 2, "name": "Zapatillas Urbanas", "price": 48000 },
  { "id": 3, "name": "Notebook 14 pulgadas", "price": 350000 }
]
```

### Buscar productos por nombre

- **GET** `/api/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/api/products/search?name=camiseta`
- **Respuesta de ejemplo:**

```json
[
  { "id": 1, "name": "Camiseta Básica", "price": 15000 }
]
```

### Obtener producto por ID

- **GET** `/api/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/api/products/1`
- **Respuesta de ejemplo:**

```json
{
  "id": 1,
  "name": "Camiseta Básica",
  "price": 15000
}
```

### Filtrar productos por categoría

- **GET** `/api/products?category=tecnologia`
- **Descripción:** Devuelve los productos que pertenecen a la categoría indicada.
- **Parámetros:**
  - `category` (query, requerido): categoría por la cual filtrar los productos.
- **Ejemplo de uso:** `/api/products?category=tecnologia`

### Crear un producto

- **POST** `/api/products/create`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{
  "price": 35000,
  "name": "Producto 1",
  "categories": [
    "categoria 1",
    "categoria 2"
  ]
}
```

- **Respuesta de ejemplo:**

```json
{
  "id": "SGIXzXCMIA1FYJ2uhiRg",
  "name": "Producto 1",
  "price": 35000,
  "categories": [
    "categoria 1",
    "categoria 2"
  ]
}
```

### Eliminar un producto

- **DELETE** `/api/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** `204 No Content`

## Tecnologías utilizadas

- Node.js
- Express
- Firebase
- JSON Web Token (JWT)
- CORS
