const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');

const TipoAssinatura = sequelize.define('tipo_assinatura', {
    id_tipo_assinatura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_tipo_assinatura: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    tempo_assinatura: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_assinatura: {
        type: DataTypes.FLOAT,
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

module.exports = TipoAssinatura;
