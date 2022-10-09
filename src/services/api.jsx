 import axios from "axios";
 
const KEY = 'a69e735adbbc0b61afd22bfa0224f7db';
const BASE_URL = 'https://api.themoviedb.org/3';

const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;

const fetchTrendData = async () => {
   try {
      const { data } = await axios.get(
         `${TREND_URL}?api_key=${KEY}&page=1`);
      return data.results;
   } catch (error) {
   console.error('Something wrong! Can not get full trends' + error);
   }
};

const fetchSearchData = async value => {
   try {
      const { data } = await axios.get(
         `${SEARCH_URL}?api_key=${KEY}&query=${value}&page=1`
      );
      return data.results;
   } catch (error) {
      console.error('Something wrong! Can not search films' + error);
   }
};

const fetchDataById = async id => {
   try {
      const { data } = await axios.get(
         `${MOVIE_ID_URL}${id}?api_key=${KEY}`
      );
      return data;
   } catch (error) {
      console.error('Something wrong! Can not search films by ID' + error);
   }
};

const fetchDataByCast = async id => {
   try {
      const { data } = await axios.get(
         `${MOVIE_ID_URL}${id}/credits?api_key=${KEY}`
      );
      return data;
   } catch (error) {
      console.error('Something wrong! Can not search films by ID' + error);
   }
};

const fetchDataByReviews = async id => {
   try {
      const { data } = await axios.get(
         `${MOVIE_ID_URL}${id}/reviews?api_key=${KEY}`
      );
      return data;
   } catch (error) {
      console.error('Something wrong! Can not search films by ID' + error);
   }
};

export {
   fetchTrendData,
   fetchSearchData,
   fetchDataById,
   fetchDataByCast,
   fetchDataByReviews,
}


  