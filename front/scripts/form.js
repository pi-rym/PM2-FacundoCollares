const axios = require("axios")
const form = document.querySelector("form");
const clearForm = document.querySelector("#clearForm")

const formJs = ()=>{

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const genresChecked = document.querySelectorAll('input[type="checkbox"]:checked')
  const genresList = Array.from(genresChecked).map(checkbox => checkbox.value)
  const objetoMovie = {
    title: form.title.value,
    year: form.year.value,
    director: form.director.value,
    duration: `${form.durationH.value}h ${form.durationM.value} m`,
    genre: genresList,
    rate: form.rate.value,
    poster: form.poster.value

  };

  for(const key in objetoMovie){
   if (!objetoMovie[key]){
    alert(`el campo ${key} es requerido`)
    return
   }

   if(objetoMovie["genre"].length === 0){
    alert(`Debe seleccionar minimo un genero `)
   return
  }
}
axios.post("http://localhost:3000/movies", objetoMovie)
.then((respuesta)=>{
    alert("Pelicula creada con exito")
    form.reset()
})   
.catch((error)=>{
  alert("Error al crear la pelicula")
})


});

clearForm.addEventListener("click", ()=>{
    form.reset()
})
}
 module.exports ={
   formJs
  }