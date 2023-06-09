const sequelize = require('../../database');
const TipoAssinatura = require('../models/TipoAssinatura');
const Profissional = require('../models/Profissional');
const TipoJogo = require('../models/TipoJogo');
const Responsavel = require('../models/Responsavel');
const TipoTranstorno = require('../models/TipoTranstorno');
const Assinatura = require('../models/Assinatura');
const Paciente = require('../models/Paciente');
const PacienteTipoTranstorno = require('../models/PacienteTipoTranstorno');
const Jogo = require('../models/Assinatura');
const PacienteJogo = require('../models/PacienteJogo');
const PacienteResponsavel = require('../models/PacienteResponsavel');

const models = {
  TipoAssinatura,
  Profissional,
  TipoJogo,
  Responsavel,
  TipoTranstorno,
  Assinatura,
  Paciente,
  PacienteTipoTranstorno,
  Jogo,
  PacienteJogo,
  PacienteResponsavel
};

Paciente.belongsTo(Profissional, { foreignKey: 'id_profissional', as: 'profissional' });
Profissional.hasMany(Paciente, { foreignKey: 'id_paciente', as: 'pacientes' });


const options = {
  alter: true,
  beforeAssociate: async (sequelizeInstance) => {
    await List.init({}, { sequelize: sequelizeInstance });
    await List.sync();
  },
};

sequelize.sync(options);


module.exports = models;
