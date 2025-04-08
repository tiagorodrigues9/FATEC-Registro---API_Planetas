import express from "express";
import mongoose from "./Config/db-connection.js"; // Conexão com MongoDB Atlas
import Planet from "./Models/planetas.js";
import planetasRoutes from "./Routes/planetasRoutes.js"; // Rotas dos planetas
import userRoutes from "./Routes/userRoutes.js";

const app = express();

// Middlewares Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas da API de planetas
app.use("/", planetasRoutes);
app.use('/', userRoutes);


// Inicializando servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`API Planetária rodando em: http://localhost:${port}`);
  }
});
