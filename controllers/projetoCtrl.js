
const projetoSchema = require('../models/projetoModel');


//get projeto
exports.getProjeto = async (req,res)=>{
    try {
        const project = await projetoSchema.find(req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json({msg:err})
    }
}
//add projeto
exports.AddProjeto = async (req,res)=>{
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
}

//get específico user pelo id
exports.getProjetoId = async (req,res)=>{
    try {
        let project = await projetoSchema.findById(req.params.id)
        res.json(project)
    } catch (err) {
        res.status(500).json({msg:err})
    }
}

exports.updateProjeto = async (req,res)=>{
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
}

exports.delProjeto =  async(req,res)=>{
    let project = await projetoSchema.findByIdAndDelete(req.param.id);
    try {
        await project;
        res.json({msg:"Excluído com sucesso"})
    } catch (err) {
        res.status(500).json({msg:err})
    }
}



