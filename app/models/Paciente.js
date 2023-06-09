const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Profissional = require('./Profissional');


const Paciente = sequelize.define('pacientes', {
    id_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissional,
            key: 'id_profissional'
        }
    },
    nome_paciente: {
        type: DataTypes.STRING(75),
        allowNull: false
    },
    cpf_paciente: {
        type: DataTypes.BIGINT,
        unique: true
    },
    idade_paciente: {
        type: DataTypes.INTEGER
    },
    data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    data_alteracao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    login_paciente: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    senha_paciente: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Paciente;
