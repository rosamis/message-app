import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

export const PATH = 'messages'

export const messageService = {
  getMessages: () => api.get(`${PATH}`),

  updateMessage: (id) => api.post(`${PATH}/${id}`),
}

