import axios from "axios";

const getNews = async (search: string) => {
  return await axios
    .get(`https://newsapi.org/v2/everything?q=${search}&from=2024-01-27&sortBy=publishedAt&apiKey=e254c581eb2c445ebaef18e31aa08466`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error getting resource:", error);
    });
};

export {getNews};