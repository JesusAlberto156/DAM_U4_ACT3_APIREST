import { Router } from 'express';
import * as pagosController from '../controllers/pagos.controller';
const router = Router();
//ficRouter.get('/list', ProdServController.getProdServList);
router.get('/', pagosController.getPagosList);
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem);
router.get('/:id', pagosController.getPagosItem);

router.post('/',pagosController.postDatosItem);

router.put('/OK/:id',pagosController.putPagosItemOK);

router.put('/BK/:id',pagosController.putPagosItemBK);

router.delete('/:id',pagosController.deletePagosItem);

export default router;
