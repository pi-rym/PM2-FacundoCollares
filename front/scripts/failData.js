const { tempData } = require("./tempData");


const failData = (error) => {
  alert("No se cargo la info de la API, se usara info fail");
  const arrayHtmlCards = tempData.map(jsToHtml);
  arrayHtmlCards.forEach((htmlMovie) => cardsContainer.appendChild(htmlMovie));
};
module.exports={
  failData
}