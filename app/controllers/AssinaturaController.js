const { Assinatura, Profissional, TipoAssinatura } = require('../models');

class AssinaturaController {
  async findAll(req, res) {
    try {
      const assinaturas = await Assinatura.findAll();
      res.status(200).json(assinaturas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id_assinatura = req.params.id_assinatura;
      const assinatura = await Assinatura.findByPk(id_assinatura);

      if (assinatura) {
        res.status(200).json(assinatura);
      } else {
        res.status(404).json({ error: 'Assinatura not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const newAssinatura = await Assinatura.create(req.body);
      res.status(201).json(newAssinatura);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const id_assinatura = req.params.id_assinatura;
      const [updatedRows] = await Assinatura.update(req.body, {
        where: { id_assinatura },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'Assinatura updated successfully' });
      } else {
        res.status(404).json({ error: 'Assinatura not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id_assinatura = req.params.id_assinatura;
      const deletedRows = await Assinatura.destroy({
        where: { id_assinatura },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'Assinatura deleted successfully' });
      } else {
        res.status(404).json({ error: 'Assinatura not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = AssinaturaController;
