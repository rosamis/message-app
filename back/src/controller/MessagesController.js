const fs = require("fs");
// import messageList from "../../data.json";
const messageList = require("../../data.json");

module.exports = {
  index() {
    // let rawdata = fs.readFileSync("../../");
    return JSON.parse(messageList);
  },

  update(request, response) {
    const { id } = request.body;
    // let rawdata = fs.readFileSync("../../data.json");
    // let messages = JSON.parse(rawdata)
    let element = {}
    for (let index = 0; index < messageList.length; index++) {
        element = messageList[index];
        if (element.id == id) {
            break
        }
    }
    element.read = 1;
    let data = JSON.stringify(element);
    fs.writeFileSync("../../data.json", data);
    return response.json({ id });
  },
};
