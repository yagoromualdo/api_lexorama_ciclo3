const { TipoTranstorno } = require('../models');

class TipoTranstornoController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const tiposTranstornos = await TipoTranstorno.findAll();
            res.status(200).json(tiposTranstornos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id_tipo_transtorno = req.params.id_tipo_transtorno;
            const tipoTranstorno = await TipoTranstorno.findByPk(id_tipo_transtorno);

            if (tipoTranstorno) {
                res.status(200).json(tipoTranstorno);
            } else {
                res.status(404).json({ error: 'TipoTranstorno not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newTipoTranstorno = await TipoTranstorno.create(req.body);
            res.status(201).json(newTipoTranstorno);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id_tipo_transtorno = req.params.id_tipo_transtorno;
            const [updatedRows] = await TipoTranstorno.update(req.body, {
                where: { id_tipo_transtorno },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'TipoTranstorno updated successfully' });
            } else {
                res.status(404).json({ error: 'TipoTranstorno not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id_tipo_transtorno = req.params.id_tipo_transtorno;
            const deletedRows = await TipoTranstorno.destroy({
                where: { id_tipo_transtorno },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'TipoTranstorno deleted successfully' });
            } else {
                res.status(404).json({ error: 'TipoTranstorno not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = TipoTranstornoController;
  