const sequelize = require('../../database');
const TipoAssinatura = require('../models/TipoAssinatura');
const Profissional = require('../models/Profissional');
const TipoJogo = require('../models/TipoJogo');
const Responsavel = require('../models/Responsavel');
const TipoTranstorno = require('../models/TipoTranstorno');
const Assinatura = require('../models/Assinatura');
const Paciente = require('../models/Paciente');
const PacienteTipoTranstorno = require('../models/PacienteTipoTranstorno');
const Jogo = require('../models/Jogo');
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

Profissional.hasMany(Paciente, {
  foreignKey: 'id_profissional',
});
Paciente.belongsTo(Profissional, {
  foreignKey: 'id_profissional',
});

TipoTranstorno.belongsToMany(Paciente, {
  through: PacienteTipoTranstorno,
  foreignKey: 'id_transtorno',
});

Paciente.belongsToMany(TipoTranstorno, {
  through: PacienteTipoTranstorno,
  foreignKey: 'id_paciente',
});
TipoTranstorno.belongsToMany(Paciente, {
  through: PacienteTipoTranstorno,
  foreignKey: 'id_transtorno',
});

Paciente.belongsToMany(Jogo, {
  through: PacienteJogo,
  foreignKey: 'id_paciente',
});
Jogo.belongsToMany(Paciente, {
  through: PacienteJogo,
  foreignKey: 'id_jogo',
});

Paciente.belongsToMany(Responsavel, {
  through: PacienteResponsavel,
  foreignKey: 'id_paciente',
});
Responsavel.belongsToMany(Paciente, {
  through: PacienteResponsavel,
  foreignKey: 'id_responsavel',
});

Profissional.hasMany(Assinatura, {
  foreignKey: 'id_profissional',
});
Assinatura.belongsTo(Profissional, {
  foreignKey: 'id_profissional',
});

TipoAssinatura.hasMany(Assinatura, {
  foreignKey: 'id_tipo_assinatura',
});
Assinatura.belongsTo(TipoAssinatura, {
  foreignKey: 'id_tipo_assinatura',
});

TipoJogo.hasMany(Jogo, {
  foreignKey: 'id_tipo_jogo',
});
Jogo.belongsTo(TipoJogo, {
  foreignKey: 'id_tipo_jogo',
});

const options = {
  alter: true,
  beforeAssociate: async (sequelizeInstance) => {
    await List.init({}, { sequelize: sequelizeInstance });
    await List.sync();
  },
};

sequelize.sync(options);


module.exports = models;
