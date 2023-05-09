import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки літери мін-1 макс-20'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear())
})

export {carValidator}