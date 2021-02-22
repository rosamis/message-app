// import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://10.0.2.2:3333'
// });

// export default api;

import axios from 'axios';

export const getMessages = () => {
  const uri = 'http://10.0.2.2:3333/messages'

  return axios.get(uri).then((response) => response.data.messages);
};
