const { Profissional } = require('../models');

class ProfissionalController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const profissionais = await Profissional.findAll();
            res.status(200).json(profissionais);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id_profissional = req.params.id_profissional;
            const profissional = await Profissional.findByPk(id_profissional);

            if (profissional) {
                res.status(200).json(profissional);
            } else {
                res.status(404).json({ error: 'Profissional not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newProfissional = await Profissional.create(req.body);
            res.status(201).json(newProfissional);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id_profissional = req.params.id_profissional;
            const [updatedRows] = await Profissional.update(req.body, {
                where: { id_profissional },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Profissional updated successfully' });
            } else {
                res.status(404).json({ error: 'Profissional not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id_profissional = req.params.id_profissional;
            const deletedRows = await Profissional.destroy({
                where: { id_profissional },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Profissional deleted successfully' });
            } else {
                res.status(404).json({ error: 'Profissional not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = ProfissionalController;
  