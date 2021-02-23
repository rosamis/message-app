const fs = require("fs");

const messageList = require("../data.json");

module.exports = {
  getMessages(request, response) {
    response.send(messageList);
  },

  update(request, response) {
    const id = request.params.id;
    let messages = require("../data.json");
    let element = {};

    for (let index = 0; index < messages.length; index++) {
      element = messages[index];
      if (element.id == id) {
        element.read = 1;
      }
    }

    fs.writeFileSync("./data.json", JSON.stringify(messages));

    return response.send({ id });
  },
};
