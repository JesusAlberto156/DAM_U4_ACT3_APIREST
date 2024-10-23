import pagos from '../models/pagos';
import boom from '@hapi/boom';

//GET DE LOS PAGOS EN LISTA
export const getPagosList = async () => {
    let pagosList;
    try {
          pagosList = await pagos.find();
          return(pagosList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
};

//GET DE LOS PAGOS POR ID
export const getPagosItem = async (id, keyType) => {
    let pagoItem;
   
    try {
      if (keyType === 'OK') {
        pagoItem = await pagos.findOne({
        IdPagoOK: id,
        });
      } else if (keyType === 'BK') {
          pagoItem = await pagos.findOne({
          IdPagoBK: id,
        });
      }
      return(pagoItem);
    } catch (error) {
      throw boom.internal(error);
    }
};