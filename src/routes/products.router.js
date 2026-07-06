import { Router } from "express";
import { 
    getAllProducts, 
    SearchProducts, 
    getProductById, 
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/verify-token.js";

const router = Router();

// Rutas públicas (lectura)
router.get('/', getAllProducts);
router.get('/search', SearchProducts);
router.get('/:id', getProductById);

// Rutas protegidas (escritura)
router.post('/', verifyToken, createProduct);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

export default router;

