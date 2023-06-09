const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Responsavel = sequelize.define('responsaveis', {
    id_responsavel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cpf_responsavel: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    nome_responsavel: {
        type: DataTypes.STRING(75),
        allowNull: false
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

module.exports = Responsavel;
