import planetService from "../Services/planetasServices.js";
import { ObjectId } from "mongodb";

// GET all planets
const getAllPlanets = async (req, res) => {
  try {
    const planets = await planetService.getAll();
    res.status(200).json({ planets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// GET one planet
const getOnePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.sendStatus(400);

    const planet = await planetService.getOne(id);
    if (!planet) return res.sendStatus(404);

    res.status(200).json({ planet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// POST new planet
const createPlanet = async (req, res) => {
  try {
    const {
      nome,
      tipo,
      descricao,
      raio,
      densidade,
      gravidade,
      temperatura,
      qntLuas,
    } = req.body;

    await planetService.create(
      nome,
      tipo,
      descricao,
      raio,
      densidade,
      gravidade,
      temperatura,
      qntLuas
    );

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// PUT update planet
const updatePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.sendStatus(400);

    const {
      nome,
      tipo,
      descricao,
      raio,
      densidade,
      gravidade,
      temperatura,
      qntLuas,
    } = req.body;

    await planetService.update(
      id,
      nome,
      tipo,
      descricao,
      raio,
      densidade,
      gravidade,
      temperatura,
      qntLuas
    );

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// DELETE planet
const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) return res.sendStatus(400);

    await planetService.delete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default {getAllPlanets,getOnePlanet,createPlanet,updatePlanet,deletePlanet};
