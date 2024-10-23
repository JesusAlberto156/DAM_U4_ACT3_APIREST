import * as Pagos from '../services/pagos.service';
import boom from '@hapi/boom';

//API GET

//LISTA DE PAGOS
export const getPagosList = async (req, res, next) => {
    try{
          const pagosList = await Pagos.getPagosList();
          if (!pagosList) {
            throw boom.notFound('No se encontraron pagos registrados.');
          } else if (pagosList) {
            res.status(200).json(pagosList);
          } 

      } catch(error) {
        next(error);
      }
};
//UN SOLO PAGO CON OK
export const getPagosItem = async (req, res, next) => {
    try {
      //FIC: obtener parametro id mediante la
      //desestructuracion de objetos
      const { id } = req.params;
      //FIC: se obtiene parametro de la forma
      //clase/objeto.
      //const idProdServ = req.params.id;
    const keyType = req.query.keyType || 'OK';
    const pagosItem = await Pagos.getPagosItem(id, keyType);
    if (!pagosItem) {
      throw boom.notFound('No se encontraron pagos registrados.');
    } else if (pagosItem) {
      res.status(200).json(pagosItem);
    }
  }catch(error){
    next(error);
  }
};