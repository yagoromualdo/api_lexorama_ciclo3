const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Profissional = sequelize.define('profissionals', {
    id_profissional: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_profissional: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cpf_profissional: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    login_profissional: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    senha_profissional: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    status_acesso: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
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

module.exports = Profissional;
