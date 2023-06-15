const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Paciente = require('./Paciente');
const Responsavel = require('./Responsavel');

const PacienteResponsavel = sequelize.define('pacientes_responsavels', {
    id_paciente_responsavel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'id_paciente'
        }
    },
    id_responsavel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Responsavel,
            key: 'id_responsavel'
        }
    },
    data_vinculo: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    data_alteracao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = PacienteResponsavel;
