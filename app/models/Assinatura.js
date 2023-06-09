const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Profissional = require('./Profissional');
const TipoAssinatura = require('./TipoAssinatura');

const Assinatura = sequelize.define('assinaturas', {
    id_assinatura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_assinatura: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    data_vencimento_assinatura: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Profissional,
            key: 'id_profissional'
        }
    },
    id_tipo_assinatura: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TipoAssinatura,
            key: 'id_tipo_assinatura'
        }
    }
}, {
    timestamps: false
});

module.exports = Assinatura;
