const { Responsavel } = require('../models');

class ResponsavelController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const responsaveis = await Responsavel.findAll();
            res.status(200).json(responsaveis);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id_responsavel = req.params.id_responsavel;
            const responsavel = await Responsavel.findByPk(id_responsavel);

            if (responsavel) {
                res.status(200).json(responsavel);
            } else {
                res.status(404).json({ error: 'Responsavel not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newResponsavel = await Responsavel.create(req.body);
            res.status(201).json(newResponsavel);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id_responsavel = req.params.id_responsavel;
            const [updatedRows] = await Responsavel.update(req.body, {
                where: { id_responsavel },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Responsavel updated successfully' });
            } else {
                res.status(404).json({ error: 'Responsavel not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id_responsavel = req.params.id_responsavel;
            const deletedRows = await Responsavel.destroy({
                where: { id_responsavel },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Responsavel deleted successfully' });
            } else {
                res.status(404).json({ error: 'Responsavel not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = ResponsavelController;
  