const app = require("./src/server");
const { dbConnection } = require("./src/config/dbConfig");


 
  const serverOn = async()=> {
    try {
      await dbConnection()
      console.log("conexion a la DB exitosa")
      app.listen(3000, () => {
        console.log("servidor escuchando en el puerto 3000");
      });
    } catch (error) {
      console.log(error);
    }
  }
  serverOn()