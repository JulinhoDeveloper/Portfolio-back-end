const router = require('express').Router();
const {getEducacao, addEducacao, getEducacaoId, updateEducacao, delEducacao} = require('../controllers/educacaoCtrl');

const educacaoSchema = require('../models/educacaoModel');

//get Educacao
router.get('/educacao', getEducacao);

//ADD Educacao USER
router.post('/educacao',addEducacao);
  

//get específico user pelo id
router.get('/educacao/:id', getEducacaoId);


//atualizando específico user pelo id
router.put('/educacao/update/:id', updateEducacao);

//excluindo específico user pelo id
router.delete('/educacao/:id',delEducacao);



module.exports = router;