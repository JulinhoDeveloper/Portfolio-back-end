const router = require('express').Router();
const {getProjeto, AddProjeto, getProjetoId, updateProjeto, delProjeto} = require('../controllers/projetoCtrl');

//get projeto
router.get('/projeto', getProjeto );

//ADD projeto
router.post('/projeto', AddProjeto );
  

//get específico user pelo id
router.get('/projeto/:id', getProjetoId);


//atualizando específico user pelo id
router.put('/projeto/update/:id',updateProjeto );
//excluindo específico user pelo id
router.delete('/projeto/:id', delProjeto);

module.exports = router;