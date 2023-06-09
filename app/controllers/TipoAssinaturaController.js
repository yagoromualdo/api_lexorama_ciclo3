const { TipoAssinatura } = require('../models');

class TipoAssinaturaController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const tiposAssinaturas = await TipoAssinatura.findAll();
            res.status(200).json(tiposAssinaturas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id_tipo_assinatura = req.params.id_tipo_assinatura;
            const tipoTranstorno = await TipoAssinatura.findByPk(id_tipo_assinatura);

            if (tipoTranstorno) {
                res.status(200).json(tipoTranstorno);
            } else {
                res.status(404).json({ error: 'TipoAssinatura not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newTipoAssinatura = await TipoAssinatura.create(req.body);
            res.status(201).json(newTipoAssinatura);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id_tipo_assinatura = req.params.id_tipo_assinatura;
            const [updatedRows] = await TipoAssinatura.update(req.body, {
                where: { id_tipo_assinatura },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'TipoAssinatura updated successfully' });
            } else {
                res.status(404).json({ error: 'TipoAssinatura not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id_tipo_assinatura = req.params.id_tipo_assinatura;
            const deletedRows = await TipoAssinatura.destroy({
                where: { id_tipo_assinatura },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'TipoAssinatura deleted successfully' });
            } else {
                res.status(404).json({ error: 'TipoAssinatura not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = TipoAssinaturaController;
  