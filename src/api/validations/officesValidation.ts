import { celebrate, Joi, Segments } from 'celebrate';

export const OfficeCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        officeCode: Joi.number().required(),
        city: Joi.string().required(),
        phone: Joi.string().required(),
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string().required(),
        state: Joi.number().required(),
        country: Joi.string().required(),
        postalCode: Joi.number().required(),
        territory: Joi.string().required(),
    }),
})

export const OfficeUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        officeCode: Joi.number(),
        city: Joi.string(),
        phone: Joi.string(),
        addressLine1: Joi.string(),
        addressLine2: Joi.string(),
        state: Joi.number(),
        country: Joi.string(),
        postalCode: Joi.number().required(),
        territory: Joi.string(),
    }).min(1)
})

