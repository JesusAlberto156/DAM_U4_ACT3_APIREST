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

// POST (ADD) PAGOS

export const postPagosItem = async (pagosItem) => {
  try {
    const newPagosItem = new pagos(pagosItem);
    return await newPagosItem.save();
  } catch (error) {
    throw error;
  }
};

// PUT (UPDATE) PAGOS POR OK

export const putPagosItemOK = async (id, pagosItem) => {
  try {
    return await pagos.findOneAndUpdate({ IdPagoOK: id }, pagosItem, {
    new: true,
  });
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// PUT (UPDATE) PAGOS POR BK

export const putPagosItemBK = async (id, pagosItem) => {
  try {
    return await pagos.findOneAndUpdate({ IdPagoBK: id }, pagosItem, {
    new: true,
  });
  } catch (error) {
    throw boom.badImplementation(error);
  }
};

// DELETE PAGOS POR OK/BK

export const deletePagosItem = async (id,keyType) => {
  try {
    if(keyType === "OK"){
      const result = await pagos.findOneAndDelete(id);
      return result;
    }else if(keyType === "BK"){
      const result = await pagos.findOneAndDelete(id);
      return result;
    }
  } catch (error) {
    throw boom.badImplementation(error);
  }
};