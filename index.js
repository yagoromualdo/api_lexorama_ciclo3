const express = require('express');
const app = express();
const AssinaturaController = require('./app/controllers/AssinaturaController');
const assinaturaController = new AssinaturaController();
const PacienteController = require('./app/controllers/PacienteController');
const pacienteController = new PacienteController();
const PacienteResponsavelController = require('./app/controllers/PacienteResponsavelController');
const pacienteResponsavelController = new PacienteResponsavelController();
const PacienteTipoTranstornoController = require('./app/controllers/PacienteTipoTranstornoController');
const pacienteTipoTranstornoController = new PacienteTipoTranstornoController();
const ProfissionalController = require('./app/controllers/ProfissionalController');
const profissionalController = new ProfissionalController();
const ResponsavelController = require('./app/controllers/ResponsavelController');
const responsavelController = new ResponsavelController();
const TipoAssinaturaController = require('./app/controllers/TipoAssinaturaController');
const tipoAssinaturaController = new TipoAssinaturaController();
const TipoTranstornoController = require('./app/controllers/TipoTranstornoController');
const tipoTranstornoController = new TipoTranstornoController();
const TipoJogoController = require('./app/controllers/TipoJogoController');
const tipoJogoController = new TipoJogoController();
const JogoController = require('./app/controllers/JogoController');
const jogoController = new JogoController();
const PacienteJogoController = require('./app/controllers/PacienteJogoController');
const pacienteJogoController = new PacienteJogoController();

app.use(express.json());

app.get('/assinatura', (req, res) => assinaturaController.findAll(req, res));
app.post('/assinatura', (req, res) => assinaturaController.create(req, res));
app.get('/assinatura/:id_assinatura', (req, res) => assinaturaController.findById(req, res));
app.put('/assinatura/:id_assinatura', (req, res) => assinaturaController.update(req, res));
app.delete('/assinatura/:id_assinatura', (req, res) => assinaturaController.delete(req, res));

app.get('/paciente', (req, res) => pacienteController.findAll(req, res));
app.post('/paciente', (req, res) => pacienteController.create(req, res));
app.get('/paciente/:id_paciente', (req, res) => pacienteController.findById(req, res));
app.put('/paciente/:id_paciente', (req, res) => pacienteController.update(req, res));
app.delete('/paciente/:id_paciente', (req, res) => pacienteController.delete(req, res));

app.get('/paciente_responsavel', (req, res) => pacienteResponsavelController.findAll(req, res));
app.post('/paciente_responsavel', (req, res) => pacienteResponsavelController.create(req, res));
app.get('/paciente_responsavel/:id_paciente_responsavel', (req, res) => pacienteResponsavelController.findById(req, res));
app.put('/paciente_responsavel/:id_paciente_responsavel', (req, res) => pacienteResponsavelController.update(req, res));
app.delete('/paciente_responsavel/:id_paciente_responsavel', (req, res) => pacienteResponsavelController.delete(req, res));

app.get('/paciente_tipo_transtorno', (req, res) => pacienteTipoTranstornoController.findAll(req, res));
app.post('/paciente_tipo_transtorno', (req, res) => pacienteTipoTranstornoController.create(req, res));
app.get('/paciente_tipo_transtorno/:id_paciente_tipo_transtorno', (req, res) => pacienteTipoTranstornoController.findById(req, res));
app.put('/paciente_tipo_transtorno/:id_paciente_tipo_transtorno', (req, res) => pacienteTipoTranstornoController.update(req, res));
app.delete('/paciente_tipo_transtorno/:id_paciente_tipo_transtorno', (req, res) => pacienteTipoTranstornoController.delete(req, res));

app.get('/paciente_jogo', (req, res) => pacienteJogoController.findAll(req, res));
app.post('/paciente_jogo', (req, res) => pacienteJogoController.create(req, res));
app.get('/paciente_jogo/:id_paciente_jogo', (req, res) => pacienteJogoController.findById(req, res));
app.put('/paciente_jogo/:id_paciente_jogo', (req, res) => pacienteJogoController.update(req, res));
app.delete('/paciente_jogo/:id_paciente_jogo', (req, res) => pacienteJogoController.delete(req, res));

app.get('/profissional', (req, res) => profissionalController.findAll(req, res));
app.post('/profissional', (req, res) => profissionalController.create(req, res));
app.get('/profissional/:id_profissional', (req, res) => profissionalController.findById(req, res));
app.put('/profissional/:id_profissional', (req, res) => profissionalController.update(req, res));
app.delete('/profissional/:id_profissional', (req, res) => profissionalController.delete(req, res));

app.get('/responsavel', (req, res) => responsavelController.findAll(req, res));
app.post('/responsavel', (req, res) => responsavelController.create(req, res));
app.get('/responsavel/:id_responsavel', (req, res) => responsavelController.findById(req, res));
app.put('/responsavel/:id_responsavel', (req, res) => responsavelController.update(req, res));
app.delete('/responsavel/:id_responsavel', (req, res) => responsavelController.delete(req, res));

app.get('/tipo_assinatura', (req, res) => tipoAssinaturaController.findAll(req, res));
app.post('/tipo_assinatura', (req, res) => tipoAssinaturaController.create(req, res));
app.get('/tipo_assinatura/:id_tipo_assinatura', (req, res) => tipoAssinaturaController.findById(req, res));
app.put('/tipo_assinatura/:id_tipo_assinatura', (req, res) => tipoAssinaturaController.update(req, res));
app.delete('/tipo_assinatura/:id_tipo_assinatura', (req, res) => tipoAssinaturaController.delete(req, res));

app.get('/tipo_jogo', (req, res) => tipoJogoController.findAll(req, res));
app.post('/tipo_jogo', (req, res) => tipoJogoController.create(req, res));
app.get('/tipo_jogo/:id_tipo_jogo', (req, res) => tipoJogoController.findById(req, res));
app.put('/tipo_jogo/:id_tipo_jogo', (req, res) => tipoJogoController.update(req, res));
app.delete('/tipo_jogo/:id_tipo_jogo', (req, res) => tipoJogoController.delete(req, res));

app.get('/tipo_transtorno', (req, res) => tipoTranstornoController.findAll(req, res));
app.post('/tipo_transtorno', (req, res) => tipoTranstornoController.create(req, res));
app.get('/tipo_transtorno/:id_tipo_transtorno', (req, res) => tipoTranstornoController.findById(req, res));
app.put('/tipo_transtorno/:id_tipo_transtorno', (req, res) => tipoTranstornoController.update(req, res));
app.delete('/tipo_transtorno/:id_tipo_transtorno', (req, res) => tipoTranstornoController.delete(req, res));

app.get('/jogo', (req, res) => jogoController.findAll(req, res));
app.post('/jogo', (req, res) => jogoController.create(req, res));
app.get('/jogo/:id_jogo', (req, res) => jogoController.findById(req, res));
app.put('/jogo/:id_jogo', (req, res) => jogoController.update(req, res));
app.delete('/jogo/:id_jogo', (req, res) => jogoController.delete(req, res));


app.listen(3000, function () {
  console.log('Servidor iniciado na porta 3000');
});

