const { Jogo } = require('../models');

class JogoController {
  async findAll(req, res) {
    try {
      const jogos = await Jogo.findAll();
      res.status(200).json(jogos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id_jogo = req.params.id_jogo;
      const jogo = await Jogo.findByPk(id_jogo);

      if (jogo) {
        res.status(200).json(jogo);
      } else {
        res.status(404).json({ error: 'Jogo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const newJogo = await Jogo.create(req.body);
      res.status(201).json(newJogo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id_jogo = req.params.id_jogo;
      const [updatedRows] = await Jogo.update(req.body, {
        where: { id_jogo },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'Jogo updated successfully' });
      } else {
        res.status(404).json({ error: 'Jogo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id_jogo = req.params.id_jogo;
      const deletedRows = await Jogo.destroy({
        where: { id_jogo },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'Jogo deleted successfully' });
      } else {
        res.status(404).json({ error: 'Jogo not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = JogoController;
