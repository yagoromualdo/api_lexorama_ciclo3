const express = require('express');
const app = express();
const AssinaturaController = require('./app/controllers/AssinaturaController');
const assinaturaController = new AssinaturaController();
const JogoController = require('./app/controllers/JogoController');
const jogoController = new JogoController();
const PacienteController = require('./app/controllers/PacienteController');
const pacienteController = new PacienteController();
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

app.use(express.json());

app.get('/assinatura', (req, res) => assinaturaController.findAll(req, res));
app.post('/assinatura', (req, res) => assinaturaController.create(req, res));
app.get('/assinatura/:id', (req, res) => assinaturaController.findById(req, res));
app.put('/assinatura/:id', (req, res) => assinaturaController.update(req, res));
app.delete('/assinatura/:id', (req, res) => assinaturaController.delete(req, res));

app.get('/jogo', (req, res) => jogoController.findAll(req, res));
app.post('/jogo', (req, res) => jogoController.create(req, res));
app.get('/jogo/:id_jogo', (req, res) => jogoController.findById(req, res));
app.put('/jogo/:id_jogo', (req, res) => jogoController.update(req, res));
app.delete('/jogo/:id_jogo', (req, res) => jogoController.delete(req, res));

app.get('/paciente', (req, res) => pacienteController.findAll(req, res));
app.post('/paciente', (req, res) => pacienteController.create(req, res));
app.get('/paciente/:id_paciente', (req, res) => pacienteController.findById(req, res));
app.put('/paciente/:id_paciente', (req, res) => pacienteController.update(req, res));
app.delete('/paciente/:id_paciente', (req, res) => pacienteController.delete(req, res));

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


app.listen(3000, function() {
  console.log('Servidor iniciado na porta 3000');
});

