import { celebrate, Joi, Segments } from "celebrate";

export const AuthSingUpValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
});