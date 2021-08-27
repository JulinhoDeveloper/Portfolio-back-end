const router = require('express').Router();
//const {getSobre, getSobreId, addSobre, updateSobre, delSobre} = require('../controllers/sobreCtrl');

const sobreSchema = require('../models/sobreModel');

//get sobre
router.get('/sobre', async(req, res)=>{
const sobre = await sobreSchema.find();
try {
    res.json(sobre);
} catch (error) {
    res.status(500).json({msg: 'srver prblem'});
}

})

//ADD SOBRE USER
router.post('/sobre',async (req, res)=>{
    const {sobre} = req.body;
try {
    const newSobre = new sobreSchema({
        sobre
    })
    await newSobre.save();
    res.json(newSobre);
   
} catch (error) {
    res.status(500).json({msg: 'srver prblem'});
}

})
  

//get específico user pelo id
router.get('/sobre/:id',async (req,res)=>{
try {
    const sobre = await sobreSchema.findById(req.params.id);
    res.json(sobre);
} catch (error) {
    res.status(500).json({msg: 'srver prblem'});
}
})


//atualizando específico user pelo id
router.put('/sobre/update/:id', async(req,res)=>{
const {sobre} = req.body;
try {
    const newSobre = await sobreSchema.findByIdAndUpdate(req.params.id,{
        sobre
    });
    let results = await newSobre.save();
    await results;
    res.json({msg: 'Atualizado'})
} catch (error) {

    res.status(500).json({msg: 'srver prblem'})
}
})

//excluindo específico user pelo id
router.delete('/sobre/:id',async (req,res)=>{
const sobre = await sobreSchema.findByIdAndDelete(req.params.id);
sobre;
res.status(500).json({msg: 'excluído com sucess'})
})



module.exports = router;