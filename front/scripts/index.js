const { formJs } = require("./form.js");
const { getMoviesData } = require("./getMoviesData.js");

const cardsContainer = document.querySelector("#cardsContainer");
const pathname = location.pathname;

if (pathname.includes("/index")) getMoviesData();
if (pathname.includes("/form")) formJs();
