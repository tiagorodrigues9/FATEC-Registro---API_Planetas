import express from "express";
import mongoose from "./Config/Db-connection.js"; // Conexão com MongoDB Atlas
import Planet from "./Models/planetas.js";
import planetasRoutes from "./Routes/planetasRoutes.js"; // Rotas dos planetas

const app = express();

// Middlewares Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas da API de planetas
app.use("/", planetasRoutes);

app.get("/", (req, res) => {
  const demoPlanets = [
    {
      nome: "Mercúrio",
      tipo: "Rochoso",
      descricao: "O menor planeta do Sistema Solar e o mais próximo do Sol.",
      raio: "2.439,7 km",
      densidade: "5,43 g/cm³",
      gravidade: "3,7 m/s²",
      temperatura: 167,
      qntLuas: 0
    },
    {
      nome: "Vênus",
      tipo: "Rochoso",
      descricao: "Similar em tamanho à Terra, com atmosfera densa e quente.",
      raio: "6.051,8 km",
      densidade: "5,24 g/cm³",
      gravidade: "8,87 m/s²",
      temperatura: 464,
      qntLuas: 0
    },
    {
      nome: "Terra",
      tipo: "Rochoso",
      descricao: "Nosso lar. O único planeta conhecido com vida.",
      raio: "6.371 km",
      densidade: "5,51 g/cm³",
      gravidade: "9,81 m/s²",
      temperatura: 15,
      qntLuas: 1
    },
    {
      nome: "Marte",
      tipo: "Rochoso",
      descricao: "O planeta vermelho, com vestígios de água.",
      raio: "3.389,5 km",
      densidade: "3,93 g/cm³",
      gravidade: "3,71 m/s²",
      temperatura: -63,
      qntLuas: 2
    },
    {
      nome: "Júpiter",
      tipo: "Gasoso",
      descricao: "O maior planeta do Sistema Solar, com grande mancha vermelha.",
      raio: "69.911 km",
      densidade: "1,33 g/cm³",
      gravidade: "24,79 m/s²",
      temperatura: -108,
      qntLuas: 79
    },
    {
      nome: "Saturno",
      tipo: "Gasoso",
      descricao: "Conhecido por seus belos anéis.",
      raio: "58.232 km",
      densidade: "0,69 g/cm³",
      gravidade: "10,44 m/s²",
      temperatura: -139,
      qntLuas: 82
    },
    {
      nome: "Urano",
      tipo: "Gasoso",
      descricao: "Planeta gelado com rotação lateral.",
      raio: "25.362 km",
      densidade: "1,27 g/cm³",
      gravidade: "8,69 m/s²",
      temperatura: -195,
      qntLuas: 27
    },
    {
      nome: "Netuno",
      tipo: "Gasoso",
      descricao: "Ventos mais rápidos do Sistema Solar.",
      raio: "24.622 km",
      densidade: "1,64 g/cm³",
      gravidade: "11,15 m/s²",
      temperatura: -201,
      qntLuas: 14
    }
  ];

  res.status(200).json(demoPlanets);
});

// Inicializando servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.error("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`API Planetária rodando em: http://localhost:${port}`);
  }
});
