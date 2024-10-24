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

//API POST.

//POST (ADD) PAGOS
export const postDatosItem = async (req, res, next) => {
  try {
    const pagosItem = req.body;
    const newPagosItem = await Pagos.postPagosItem(pagosItem);
    if (!newPagosItem) {
      throw boom.badRequest('No se pudo crear el nuevo Pago con sus datos.');
    } else if (newPagosItem) {
      res.status(201).json(newPagosItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//API PUT.

//PUT (UPDATE) PAGOS POR OK
export const putPagosItemOK = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const pagosItem = req.body;
      
    const updatedPagosItem = await Pagos.putPagosItemOK(id, pagosItem );
    if (!updatedPagosItem) {
      throw boom.badRequest('No se pudo actualizar los datos del Pago.');
    } else if (updatedPagosItem) {
      res.status(200).json(updatedPagosItem);
    }
  } catch (error) {
    next(error);
  }
};
//PUT (UPDATE) PAGOS POR BK
export const putPagosItemBK = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const pagosItem = req.body;
      
    const updatedPagosItem = await Pagos.putPagosItemBK(id, pagosItem );
    if (!updatedPagosItem) {
      throw boom.badRequest('No se pudo actualizar los datos del Pago.');
    } else if (updatedPagosItem) {
      res.status(200).json(updatedPagosItem);
    }
  } catch (error) {
    next(error);
  }
};

//API DELETE.

//DELETE PAGOS POR OK/BK
export const deletePagosItem = async (req, res, next) => {
  try {

    const { id } = req.params;

    const keyType = req.query.keyType || 'OK';
    const deletedPagosItem = await Pagos.deletePagosItem(id,keyType);
    if (!deletePagosItem) {
      throw boom.notFound('No se pudo eliminar los datos del Pago.');
    } else {
      res.status(200).json(deletedPagosItem);
    }
  } catch (error) {
    next(error); // Manejo de errores
  }
};