const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Paciente = require('./Paciente');
const TipoTranstorno = require('./TipoTranstorno');


const PacienteTipoTranstorno = sequelize.define('pacientes_tipo_transtornos', {
    id_paciente_tipo_transtorno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_transtorno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TipoTranstorno,
            key: 'id_tipo_transtorno'
        }
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'id_paciente'
        }
    },
    data_cadastro: {
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

module.exports = PacienteTipoTranstorno;
