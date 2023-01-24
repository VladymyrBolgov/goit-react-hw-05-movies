import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;


const getBooks = async () => {
    return axios.get(`${REACT_APP_BASE_URL}/api/books`);
}
