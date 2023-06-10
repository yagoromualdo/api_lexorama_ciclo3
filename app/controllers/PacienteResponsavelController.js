const { PacienteResponsavel } = require('../models');

class PacienteResponsavelController {
    async findAll(req, res) {
        try {
            const pacientesResponsaveis = await PacienteResponsavel.findAll();
            res.status(200).json(pacientesResponsaveis);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id_paciente_responsavel = req.params.id_paciente_responsavel;
            const pacienteResponsavel = await PacienteResponsavel.findByPk(
                id_paciente_responsavel
            );

            if (pacienteResponsavel) {
                res.status(200).json(pacienteResponsavel);
            } else {
                res.status(404).json({ error: 'Paciente Responsavel not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const newPacienteResponsavel = await PacienteResponsavel.create(req.body);
            res.status(201).json(newPacienteResponsavel);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const id_paciente_responsavel = req.params.id_paciente_responsavel;
            const [updatedRows] = await PacienteResponsavel.update(req.body, {
                where: { id_paciente_responsavel },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Paciente Responsavel updated successfully' });
            } else {
                res.status(404).json({ error: 'Paciente Responsavel not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id_paciente_responsavel = req.params.id_paciente_responsavel;
            const deletedRows = await PacienteResponsavel.destroy({
                where: { id_paciente_responsavel },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Paciente Responsavel deleted successfully' });
            } else {
                res.status(404).json({ error: 'Paciente Responsavel not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PacienteResponsavelController;
