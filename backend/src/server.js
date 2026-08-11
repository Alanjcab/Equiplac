import app from "./app.js";
import pool from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Comprobar conexión con MySQL
    const connection = await pool.getConnection();

    console.log("Conexión a MySQL establecida correctamente");

    connection.release();

    // Levantar servidor Express
    app.listen(PORT, () => {
      console.log(`Servidor de Equiplac ejecutándose en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con MySQL:");
    console.error(error.message);

    process.exit(1);
  }
};

startServer();