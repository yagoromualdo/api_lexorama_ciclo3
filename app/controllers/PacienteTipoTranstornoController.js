const { PacienteTipoTranstorno } = require('../models');

class PacienteTipoTranstornoController {
  constructor() {}

  async findAll(req, res) {
    try {
      const pacientesTipoTranstorno = await PacienteTipoTranstorno.findAll();
      res.status(200).json(pacientesTipoTranstorno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id_paciente_tipo_transtorno = req.params.id_paciente_tipo_transtorno;
      const pacienteTipoTranstorno = await PacienteTipoTranstorno.findByPk(
        id_paciente_tipo_transtorno
      );

      if (pacienteTipoTranstorno) {
        res.status(200).json(pacienteTipoTranstorno);
      } else {
        res.status(404).json({ error: 'PacienteTipoTranstorno not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const newPacienteTipoTranstorno = await PacienteTipoTranstorno.create(req.body);
      res.status(201).json(newPacienteTipoTranstorno);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const id_paciente_tipo_transtorno = req.params.id_paciente_tipo_transtorno;
      const [updatedRows] = await PacienteTipoTranstorno.update(req.body, {
        where: { id_paciente_tipo_transtorno },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'PacienteTipoTranstorno updated successfully' });
      } else {
        res.status(404).json({ error: 'PacienteTipoTranstorno not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const id_paciente_tipo_transtorno = req.params.id_paciente_tipo_transtorno;
      const deletedRows = await PacienteTipoTranstorno.destroy({
        where: { id_paciente_tipo_transtorno },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'PacienteTipoTranstorno deleted successfully' });
      } else {
        res.status(404).json({ error: 'PacienteTipoTranstorno not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = PacienteTipoTranstornoController;
