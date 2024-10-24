import * as mongoose from 'mongoose';

const pagosSchema = new mongoose.Schema({
    IdInstitutoOK: { type : String, required : true },
    IdNegocioOK: { type : String},
    IdPagoOK: { type : String },
    IdPagoBK: { type : String },
    IdOrdenOK: { type : String},
    //--
    MontoTotal: { type : Number },
    Observacion: { type : String },
    //FIC: INFO
    info_ad: [
        {
            IdEtiquetaOk: { type : String },
            IdEtiqueta: { type : String },
            Etiqueta: { type : String },
            Valor: { type: String },
            IdTipoSeccionOK: { type: String },
            Secuencia: { type : Number},
            detail_row: 
                {
                    Activo: { type : String},
                    Borrado: { type : String},
                    detail_row_reg: [
                        {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String },
                            _id: false,
                        }
                    ],
                    _id: false,
                },
            _id: false,
        },
        {
            IdEtiquetaOk: { type : String },
            IdEtiqueta: { type : String },
            Etiqueta: { type : String },
            Valor: { type: String },
            IdTipoSeccionOK: { type: String },
            Secuencia: { type : Number},
            detail_row: 
                {
                    Activo: { type : String},
                    Borrado: { type : String},
                    detail_row_reg: [
                        {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String },
                            _id: false,
                        }
                    ],
                    _id: false,
                },
            _id: false,
        },
    ],
    //FIC: FORMA DE PAGO
    forma_pago: [
        {
            IdTipoMetodoOK: { type : String },
            Monto: { type : Number },
            IdTipoMonedaOK: { type : String },
            pago_tarjeta:
                {
                    IdTipoTarjetaOK: { type : String },
                    IdTipoRed: { type : String },
                    Banco: { type : String },
                    NombreTitular: { type : String },
                    Numero: { type : String },
                    FechaVencimiento: { type : String },
                    CodigoCVV: { type : String },
                    _id: false,
                },
            datos_transaccion:
                {
                    IdTransaccion: { type : String },
                    CodigoAutoriza: { type : String },
                    FechaReg: { type: Date, default: Date.now },
                    _id: false,
                },
            estatus: [
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                },
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                },
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                }
            ],
            _id: false
        },
        {
            IdTipoMetodoOK: { type : String },
            Monto: { type : Number },
            IdTipoMonedaOK: { type : String },
            pago_tarjeta:
                {
                    IdTipoTarjetaOK: { type : String },
                    IdTipoRed: { type : String },
                    Banco: { type : String },
                    NombreTitular: { type : String },
                    Numero: { type : String },
                    FechaVencimiento: { type : String },
                    CodigoCVV: { type : String },
                    _id: false,
                },
            datos_transaccion:
                {
                    IdTransaccion: { type : String },
                    CodigoAutoriza: { type : String },
                    FechaReg: { type: Date, default: Date.now },
                    _id: false,
                },
            estatus: [
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                },
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                },
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                }
            ],
            _id: false
        },
        {
            IdTipoMetodoOK: { type : String },
            Monto: { type : Number },
            IdTipoMonedaOK: { type : String },
            pago_tarjeta:
                {
                    _id: false,
                },
            estatus: [
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                },
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                },
                {
                    IdTipoEstatusOK: { type: String},
                    Actual: { type : String },
                    Observacion: { type : String },
                    detail_row: 
                        {
                            Activo: { type : String},
                            Borrado: { type : String},
                            detail_row_reg: [
                                {
                                    FechaReg: { type: Date, default: Date.now },
                                    UsuarioReg: { type: String },
                                    _id: false,
                                }
                            ],
                            _id: false,
                        },
                    _id: false
                }
            ],
            _id: false
        }
    ], 
    estatus: [
        {
            IdTipoEstatusOK: { type: String},
            Actual: { type : String },
            Observacion: { type : String },
            detail_row: 
                {
                    Activo: { type : String},
                    Borrado: { type : String},
                    detail_row_reg: [
                        {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String },
                            _id: false,
                        }
                    ],
                    _id: false,
                },
            _id: false
        },
        {
            IdTipoEstatusOK: { type: String},
            Actual: { type : String },
            Observacion: { type : String },
            detail_row: 
                {
                    Activo: { type : String},
                    Borrado: { type : String},
                    detail_row_reg: [
                        {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String },
                            _id: false,
                        }
                    ],
                    _id: false,
                },
            _id: false
        },
        {
            IdTipoEstatusOK: { type: String},
            Actual: { type : String },
            Observacion: { type : String },
            detail_row: 
                {
                    Activo: { type : String},
                    Borrado: { type : String},
                    detail_row_reg: [
                        {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String },
                            _id: false,
                        }
                    ],
                    _id: false,
                },
            _id: false
        },
        {
            IdTipoEstatusOK: { type: String},
            Actual: { type : String },
            Observacion: { type : String },
            detail_row: 
                {
                    Activo: { type : String},
                    Borrado: { type : String},
                    detail_row_reg: [
                        {
                            FechaReg: { type: Date, default: Date.now },
                            UsuarioReg: { type: String },
                            _id: false,
                        }
                    ],
                    _id: false,
                },
            _id: false
        }
    ],
    factura: [
        {
            IdPersonaOK: { type : String},
            Nombre: { type : String},
            RFC: { type : String},
            correo: { type : String},
            Telefono: { type : String},
            IdTipoFacturaOK: { type : String},
            IdTipoPago: { type : String},
            domicilio: [
                {
                    IdDomicilioOK: { type : String},
                    CalleNumero: { type : String},
                    CodPostal: { type : String},
                    Pais: { type : String},
                    Estado: { type : String},
                    Municipio: { type : String},
                    Localidad: { type : String},
                    Colonia: { type : String},
                    _id: false,
                }
            ],
            productos: [
                {
                    IdProdServOK: { type : String},
                    IdPresentaOK: { type : String},
                    Cantidad: { type : Number},
                    PrecioUnitario: { type : Number},
                    descuentos: [
                        {
                            IdTipoDescuentoOK: { type : String},
                            CodigoDescuento: { type : String},
                            Monto: { type : Number},
                            _id: false,
                        },
                        {
                            IdTipoDescuentoOK: { type : String},
                            CodigoDescuento: { type : String},
                            Monto: { type : Number},
                            _id: false,
                        }
                    ],
                    _id: false, 
                },
                {
                    IdProdServOK: { type : String},
                    IdPresentaOK: { type : String},
                    Cantidad: { type : Number},
                    PrecioUnitario: { type : Number},
                    descuentos: [
                        {
                            IdTipoDescuentoOK: { type : String},
                            CodigoDescuento: { type : String},
                            Monto: { type : Number},
                            _id: false,
                        }
                    ],
                    _id: false, 
                }
            ],
            _id: false,
        }
    ],
    detail_row: {
        Activo: { type : String},
        Borrado: { type : String},
        detail_row_reg: [
            {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String },
                _id: false,
            }
        ],
        _id: false,
    },
});

export default mongoose.model(
    'cat_pagos',
    pagosSchema,
    'cat_pagos'
)