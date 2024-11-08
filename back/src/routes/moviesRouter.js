const {Router} = require("express")
const { getMoviesController, createdMoviesController } = require("../controllers/moviesController")
const { validationMoviesData } = require("../middlewares")


const moviesRouter = Router()

moviesRouter.get("/", getMoviesController)
moviesRouter.post("/", validationMoviesData,  createdMoviesController)


module.exports = {
    moviesRouter
}