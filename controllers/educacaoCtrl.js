
const educacaoSchema = require('../models/educacaoModel');


exports.getEducacao = async (req,res)=>{
    const educacao = await educacaoSchema.find();
    try {
        res.json(educacao);
    } catch (error) {
        res.status(500).json({msg: 'srver prblem'});
    }
}
    
exports.addEducacao = async (req,res)=>{
    const {educacao} = req.body;
    try {
        const newEducacao = new educacaoSchema({
         
            educacao
        })
        await newEducacao.save();
        res.json(newEducacao);
    } catch (error) {
        res.status(500).json({msg: 'srver prblem'});
    }
}
    
exports.getEducacaoId =  async (req, res)=>{

    try {
      const educacao = await educacaoSchema.findById(req.params.id);
    res.json(educacao);
    
    } catch (error) {
      res.status(500).json({msg:'server problem'})
    }
    
    
    }

    exports.updateEducacao = async (req, res)=>{
        const {educacao} = req.body;
       
        try {
         const newEducacao = await educacaoSchema.findByIdAndUpdate(req.params.id, {
      
            educacao
       
          });
       
          let results = await newEducacao.save();
          await results;
          res.json({msg:'Item atualizado'})
          
        } 
        catch (error) {
         res.status(500).json({msg:'server problem'})
        }
      
      
      
      }

  exports.delEducacao = async (req, res)=>{
    const educacao = await educacaoSchema.findByIdAndDelete(req.params.id)
 
    educacao;
 
    res.json({msg:"Item deletado"})
 
 }
