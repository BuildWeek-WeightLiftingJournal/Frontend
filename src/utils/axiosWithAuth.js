import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
<<<<<<< HEAD
    headers: {
=======
    headers:{
>>>>>>> master
      Authorization: `Bearer ${token}`
    },
  });
};