import Planet from "../Models/planetas.js";

class PlanetService {
  // Criar novo planeta
  async create(nome, tipo, descricao, raio, densidade, gravidade, temperatura, qntLuas) {
    try {
      const newPlanet = new Planet({
        nome,
        tipo,
        descricao,
        raio,
        densidade,
        gravidade,
        temperatura,
        qntLuas,
      });

      await newPlanet.save();
    } catch (error) {
      console.error(error);
    }
  }

  // Buscar todos os planetas
  async getAll() {
    try {
      const planets = await Planet.find();
      return planets;
    } catch (error) {
      console.error(error);
    }
  }

  // Buscar um único planeta por ID
  async getOne(id) {
    try {
      const planet = await Planet.findById(id);
      return planet;
    } catch (error) {
      console.error(error);
    }
  }

  // Atualizar informações de um planeta
  async update(id, nome, tipo, descricao, raio, densidade, gravidade, temperatura, qntLuas) {
    try {
      await Planet.findByIdAndUpdate(id, {
        nome,
        tipo,
        descricao,
        raio,
        densidade,
        gravidade,
        temperatura,
        qntLuas,
      });
      console.log(`Planeta com id: ${id} atualizado com sucesso.`);
    } catch (error) {
      console.error(error);
    }
  }

  // Deletar planeta por ID
  async delete(id) {
    try {
      await Planet.findByIdAndDelete(id);
      console.log(`Planeta com id: ${id} deletado.`);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new PlanetService();
