const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const TipoJogo = sequelize.define('tipo_jogo', {
    id_tipo_jogo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo_jogo: {
        type: DataTypes.STRING(20),
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

module.exports = TipoJogo;
