import Joi from 'joi';

export const schema = Joi.object({
  type: Joi.number()
    .required()
    .valid('text', 'media', 'button', 'location', 'contact', 'product', 'seen', 'template', 'list'),
  text: Joi.alternatives().conditional('type', {
    is: 'text',
    then: Joi.object({
      to: Joi.string().required(),
      body: Joi.string().trim().max(1024).required(),
    }),
  }),
  media: Joi.alternatives().conditional('type', { is: 'media', then: Joi.string().required() }),
  button: Joi.alternatives().conditional('type', { is: 'button', then: Joi.number().required() }),
  location: Joi.alternatives().conditional('type', { is: 'location', then: Joi.number().required() }),
  contact: Joi.alternatives().conditional('type', { is: 'contact', then: Joi.number().required() }),
  product: Joi.alternatives().conditional('type', { is: 'product', then: Joi.number().required() }),
  seen: Joi.alternatives().conditional('type', { is: 'seen', then: Joi.number().required() }),
  template: Joi.alternatives().conditional('type', { is: 'template', then: Joi.number().required() }),
  list: Joi.alternatives().conditional('type', { is: 'list', then: Joi.number().required() }),
});
