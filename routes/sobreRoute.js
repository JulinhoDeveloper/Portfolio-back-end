const router = require('express').Router();


//get sobre
router.get('/sobre', (req,res)=>{
    res.send('sobre router')
})

//post sobre
router.post('/sobre', (req,res)=>{
    res.send('sobre post router')
})

//get específico user pelo id
router.get('/sobre/:id', (req,res)=>{
    res.send('sobre específico post router')
})

//atualizando específico user pelo id
router.put('/sobre/update/:id', (req,res)=>{
    res.send('atualizar específico post router')
})
//excluindo específico user pelo id
router.delete('/sobre/:id', (req,res)=>{
    res.send('excluir específico post router')
})


module.exports = router;