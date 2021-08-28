const router = require('express').Router();
const {getExperiencia, addExperiencia, getExperienciaId, updateExperiencia, delExperiencia} = require('../controllers/ExperienciaCtrl');

const sobreSchema = require('../models/experienciaModel');

//get experiência
router.get('/experiencia', getExperiencia);

//ADD experiência USER
router.post('/experiencia',addExperiencia);
  

//get específico user pelo id
router.get('/experiencia/:id', getExperienciaId);


//atualizando específico user pelo id
router.put('/experiencia/update/:id', updateExperiencia);

//excluindo específico user pelo id
router.delete('/experiencia/:id',delExperiencia);



module.exports = router;