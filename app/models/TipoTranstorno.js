const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const TipoTranstorno = sequelize.define('tipo_transtorno', {
    id_tipo_transtorno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_transtorno: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
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

module.exports = TipoTranstorno;
