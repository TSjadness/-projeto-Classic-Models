import { celebrate, Joi, Segments } from 'celebrate';

export const CustomerCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.string().required(),
        customerName: Joi.string().required(),
        contactLastName: Joi.number().required(),
        contactFirstName: Joi.number().required(),
        phone: Joi.number().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.number().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        postalCode: Joi.string().required(),
        country: Joi.array().items(Joi.string()).required(),
        salesRepEmployeeNumber: Joi.array().items(Joi.string()).required(),
        creditLimit:Joi.number().required(),
    }),
})

export const CustomerUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customerNumber: Joi.string(),
        customerName: Joi.string(),
        contactLastName: Joi.number(),
        contactFirstName: Joi.number(),
        phone: Joi.number(),
        addressLine1: Joi.string(),
        addressLine2: Joi.number(),
        city: Joi.string(),
        state: Joi.string(),
        postalCode: Joi.string(),
        country: Joi.string(), 
        salesRepEmployeeNumber: Joi.array().items(Joi.string()),
        creditLimit:Joi.number(), 
    }).min(1)
})