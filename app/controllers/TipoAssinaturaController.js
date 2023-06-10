const { TipoAssinatura } = require('../models');

class TipoAssinaturaController {
  async findAll(req, res) {
    try {
      const tiposAssinatura = await TipoAssinatura.findAll();
      res.status(200).json(tiposAssinatura);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id_tipo_assinatura = req.params.id_tipo_assinatura;
      const tipoAssinatura = await TipoAssinatura.findByPk(id_tipo_assinatura);

      if (tipoAssinatura) {
        res.status(200).json(tipoAssinatura);
      } else {
        res.status(404).json({ error: 'Tipo de assinatura not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const newTipoAssinatura = await TipoAssinatura.create(req.body);
      res.status(201).json(newTipoAssinatura);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id_tipo_assinatura = req.params.id_tipo_assinatura;
      const [updatedRows] = await TipoAssinatura.update(req.body, {
        where: { id_tipo_assinatura },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'Tipo de assinatura updated successfully' });
      } else {
        res.status(404).json({ error: 'Tipo de assinatura not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id_tipo_assinatura = req.params.id_tipo_assinatura;
      const deletedRows = await TipoAssinatura.destroy({
        where: { id_tipo_assinatura },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'Tipo de assinatura deleted successfully' });
      } else {
        res.status(404).json({ error: 'Tipo de assinatura not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TipoAssinaturaController;
