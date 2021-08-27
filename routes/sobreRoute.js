const router = require('express').Router();
const {getSobre, addSobre, getSobreId, updateSobre, delSobre} = require('../controllers/sobreCtrl');

const sobreSchema = require('../models/sobreModel');

//get sobre
router.get('/sobre', getSobre);

//ADD SOBRE USER
router.post('/sobre',addSobre);
  

//get específico user pelo id
router.get('/sobre/:id', getSobreId);


//atualizando específico user pelo id
router.put('/sobre/update/:id', updateSobre);

//excluindo específico user pelo id
router.delete('/sobre/:id',delSobre);



module.exports = router;