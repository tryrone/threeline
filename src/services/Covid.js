import axios from 'axios';
export const getAllCovidData = () => {
  return axios.get('https://covidnigeria.herokuapp.com/api');
};
