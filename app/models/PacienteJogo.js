const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Jogo = require('./Jogo');
const Paciente = require('./Paciente');


const PacienteJogo = sequelize.define('pacientes_jogos', {
    id_paciente_jogo: {
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
    id_jogo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Jogo,
            key: 'id_jogo'
        }
    },
    quantidade_acertos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tempo_jogado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_jogada: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = PacienteJogo;
