import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


const options = {
  method: 'GET',
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '9dfb78b26emsh4f6650f97c78e78p1d593ejsn641265cc9297',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};