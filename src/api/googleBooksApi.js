
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export const getBooks = async (searchTerm) => {

  const response = await api.get('/volumes', {
    params: {
      q: searchTerm,
    },
  });


  return response.data.items;
};