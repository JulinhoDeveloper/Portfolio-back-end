const router = require('express').Router();
const projetoSchema = require('../models/projetomodel');

//get projeto
router.get('/projeto', async (req,res)=>{
    try {
        const project = await projetoSchema.find(req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json({msg:err})
    }
})

//ADD projeto
router.post('/projeto', async (req,res)=>{
    const {title, product_id, description, images} = req.body;

    try {

        const project = new projetoSchema({
            title,
            product_id,
            description,
            images
        })
        await project.save();
        res.json({msg:"Adicionado com sucesso"})
        
    } catch (err) {
        res.status(500).json({msg:err})
    }
});
  

//get específico user pelo id
router.get('/projeto/:id', async (req,res)=>{
    try {
        let project = await projetoSchema.findById(req.params.id)
        res.json(project)
    } catch (err) {
        res.status(500).json({msg:err})
    }
});


//atualizando específico user pelo id
router.put('/projeto/update/:id', async (req,res)=>{
    const {title, product_id, description, images} = req.body;
    try {
        const project = await projetoSchema.findByIdAndUpdate(req.params.id,{

            title,
            product_id,
            description,
            images  
        })
        await project.save();
        res.json({msg:"Atualizado com sucesso"})
        
    } catch (err) {
        res.status(500).json({msg:err})
    }
});

//excluindo específico user pelo id
router.delete('/projeto/:id',async(req,res)=>{
    let project = await projetoSchema.findByIdAndDelete(req.param.id);
    try {
        await project;
        res.json({msg:"Excluído com sucesso"})
    } catch (err) {
        res.status(500).json({msg:err})
    }
});



module.exports = router;