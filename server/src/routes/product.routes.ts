import { Router } from 'express';

import { getProducts } from '../controllers/product.controllers';

const router = Router();

router.get('/', getProducts);
// router.get('/:id', getProduct);
// router.post('/', createProduct);
// router.delete('/:id', removeProduct);

export default router;
