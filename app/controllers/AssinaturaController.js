const { Assinatura, Profissional, TipoAssinatura } = require('../models');

class AssinaturaController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const assinaturas = await Assinatura.findAll();
            res.status(200).json(assinaturas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const assinatura = await Assinatura.findByPk(id);
            // const assinatura = await Assinatura.findByPk(req.params.id, {
            //     include: { model: Profissional, as: 'profissional' }
            // });

            if (assinatura) {
                res.status(200).json(assinatura);
            } else {
                res.status(404).json({ error: 'Assinatura not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newAssinatura = await Assinatura.create(req.body);
            res.status(201).json(newAssinatura);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Assinatura.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Assinatura updated successfully' });
            } else {
                res.status(404).json({ error: 'Assinatura not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Assinatura.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Assinatura deleted successfully' });
            } else {
                res.status(404).json({ error: 'Assinatura not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = AssinaturaController;
  