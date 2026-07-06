# API Rest en Node.js

## Descripción

API REST para gestion de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
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

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripcion:** Devuelve la lista de todos los productos
- **Respuesta de ejemplo:**

```json
[
  { "id": 1, "name": "Camiseta Básica", "price": 15000 },
  { "id": 2, "name": "Zapatillas Urbanas", "price": 48000 },
  { "id": 3, "name": "Notebook 14 pulgadas", "price": 350000 }
]

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Camiseta Básica", "price": 15000 }]

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/1`
- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Camiseta Básica", "price": 15000 }
```

### Crear un producto

- **POST** `/products`
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

- **Respuesta ejemplo:**

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
- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar
- **Respuesta:** 204 no content
