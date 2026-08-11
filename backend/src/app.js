import express from "express";
import cors from "cors";
import helmet from "helmet";

import router from "./routes/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Seguridad HTTP
app.use(helmet());

// CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Parsear JSON
app.use(express.json());

// Parsear formularios
app.use(express.urlencoded({ extended: true }));

// Rutas principales de la API
app.use("/api", router);

// Ruta no encontrada
app.use(notFound);

// Manejador global de errores
app.use(errorHandler);

export default app;