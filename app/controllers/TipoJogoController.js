const { TipoJogo } = require('../models');

class TipoJogoController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const tiposJogos = await TipoJogo.findAll();
            res.status(200).json(tiposJogos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id_tipo_jogo = req.params.id_tipo_jogo;
            const tipoJogo = await TipoJogo.findByPk(id_tipo_jogo);

            if (tipoJogo) {
                res.status(200).json(tipoJogo);
            } else {
                res.status(404).json({ error: 'TipoJogo not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newTipoJogo = await TipoJogo.create(req.body);
            res.status(201).json(newTipoJogo);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id_tipo_jogo = req.params.id_tipo_jogo;
            const [updatedRows] = await TipoJogo.update(req.body, {
                where: { id_tipo_jogo },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'TipoJogo updated successfully' });
            } else {
                res.status(404).json({ error: 'TipoJogo not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id_tipo_jogo = req.params.id_tipo_jogo;
            const deletedRows = await TipoJogo.destroy({
                where: { id_tipo_jogo },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'TipoJogo deleted successfully' });
            } else {
                res.status(404).json({ error: 'TipoJogo not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = TipoJogoController;
  