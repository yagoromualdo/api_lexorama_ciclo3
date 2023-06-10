const { PacienteJogo } = require('../models');

class PacienteJogoController {
  async findAll(req, res) {
    try {
      const pacienteJogos = await PacienteJogo.findAll();
      res.status(200).json(pacienteJogos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id_paciente_jogo = req.params.id_paciente_jogo;
      const pacienteJogo = await PacienteJogo.findByPk(id_paciente_jogo);

      if (pacienteJogo) {
        res.status(200).json(pacienteJogo);
      } else {
        res.status(404).json({ error: 'PacienteJogo not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const newPacienteJogo = await PacienteJogo.create(req.body);
      res.status(201).json(newPacienteJogo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const id_paciente_jogo = req.params.id_paciente_jogo;
      const [updatedRows] = await PacienteJogo.update(req.body, {
        where: { id_paciente_jogo },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'PacienteJogo updated successfully' });
      } else {
        res.status(404).json({ error: 'PacienteJogo not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const id_paciente_jogo = req.params.id_paciente_jogo;
      const deletedRows = await PacienteJogo.destroy({
        where: { id_paciente_jogo },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'PacienteJogo deleted successfully' });
      } else {
        res.status(404).json({ error: 'PacienteJogo not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = PacienteJogoController;
