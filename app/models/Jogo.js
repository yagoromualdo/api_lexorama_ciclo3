const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');
const TipoJogo = require('./TipoJogo');


const Jogo = sequelize.define('jogos', {
    id_jogo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_jogo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    id_tipo_jogo: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoJogo,
            key: 'id_tipo_jogo'
        }
    },
    dificuldade: {
        type: DataTypes.INTEGER,
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

module.exports = Jogo;
