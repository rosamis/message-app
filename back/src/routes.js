const express = require("express");
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();
const MessagesController = require('./controller/MessagesController')


routes.get("/messages", MessagesController.index)

routes.post("/message", celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.number().required(),
    })
}), MessagesController.update);

module.exports = routes;