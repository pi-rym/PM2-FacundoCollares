const { jsToHtml } = require("./jsToHtml");


const doneData = (respuesta) => {
    const arrayHtmlCards = respuesta.map(jsToHtml);
    arrayHtmlCards.forEach((htmlMovie) => cardsContainer.appendChild(htmlMovie));
  };

  module.exports={
    doneData
  }