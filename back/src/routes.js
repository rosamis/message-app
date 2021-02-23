const express = require("express");
const routes = express.Router();
const MessagesController = require('./controller/MessagesController')

routes.get('/messages', MessagesController.getMessages)

routes.post("/messages/:id", MessagesController.update);

module.exports = routes;