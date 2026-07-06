import * as Model from "../models/Product.js";

// Obtener todos los productos o filtrar por categoría
export const getAllProducts = async (req, res) => {
  const { category } = req.query;

  if (category) {
    const productsByCategory = await Model.getProductByCategory(category);
    return res.json(productsByCategory);
  }

  const products = await Model.getAllProducts();

  res.json(products);
};


// Buscar productos por nombre
export const SearchProducts = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  try {
    const products = await Model.getAllProducts();

    const productsFiltered = products.filter(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

    if (productsFiltered.length === 0) {
      return res.status(404).json({ error: "No se encontraron productos" });
    }

    res.json(productsFiltered);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar productos" });
  }
};

// Obtener producto por ID
export const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Model.getProductsById(id);

    if (!product) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener producto por ID" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;

  try {
    const product = await Model.createProduct({ name, price, categories });
    res.status(201).json(product); 
  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categories } = req.body;

  if(!name || !price || !categories) {
    return res.status(422).json({error: "Nombre, precio y categorías son requeridos"});
  }
  const updated = await Model.updateProduct(id, { name, price, categories });

  if(!updated) {
    return res.status(404).json({ error: "Producto no encontrado"});
  }

  res.json(updated);
};


export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Model.deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};