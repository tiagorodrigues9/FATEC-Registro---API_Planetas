import express from "express";
import planetController from "../Controllers/planetaController.js";

const planetRoutes = express.Router();

// Rotas para planetas
planetRoutes.get("/planets", planetController.getAllPlanets); // Listar todos
planetRoutes.get("/planets/:id", planetController.getOnePlanet); // Listar um
planetRoutes.post("/planets", planetController.createPlanet); // Criar
planetRoutes.put("/planets/:id", planetController.updatePlanet); // Atualizar
planetRoutes.delete("/planets/:id", planetController.deletePlanet); // Deletar

export default planetRoutes;
