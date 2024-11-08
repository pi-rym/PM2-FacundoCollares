const { doneData } = require("./doneData.js");
const { failData } = require("./failData");
const axios = require('axios')

const getMoviesData = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/movies');
    doneData(data.data);
  } catch (error) {
    failData();
  }
};
module.exports = {
    getMoviesData
}