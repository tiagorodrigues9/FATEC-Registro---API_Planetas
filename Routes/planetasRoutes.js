import express from "express";
import planetController from "../Controllers/planetaController.js";
import Auth from "../Middleware/Auth.js";

const planetRoutes = express.Router();

// Rotas para planetas
planetRoutes.get("/planets", Auth.Authorization, planetController.getAllPlanets); // Listar todos
planetRoutes.get("/planets/:id", Auth.Authorization, planetController.getOnePlanet); // Listar um
planetRoutes.post("/planets", Auth.Authorization, planetController.createPlanet); // Criar
planetRoutes.put("/planets/:id", Auth.Authorization, planetController.updatePlanet); // Atualizar
planetRoutes.delete("/planets/:id", Auth.Authorization, planetController.deletePlanet); // Deletar

export default planetRoutes;
