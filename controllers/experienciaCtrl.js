
const experienciaSchema = require('../models/experienciaModel');


exports.getExperiencia = async (req,res)=>{
    const experiencia = await experienciaSchema.find();
    try {
        res.json(experiencia);
    } catch (error) {
        res.status(500).json({msg: 'srver prblem'});
    }
}
    
exports.addExperiencia = async (req,res)=>{
    const {experiencia} = req.body;
    try {
        const newExperiencia = new experienciaSchema({
         
            experiencia
        })
        await newExperiencia.save();
        res.json(newExperiencia);
    } catch (error) {
        res.status(500).json({msg: 'srver prblem'});
    }
}
    
exports.getExperienciaId =  async (req, res)=>{

    try {
      const experiencia= await experienciaSchema.findById(req.params.id);
    res.json(experiencia);
    
    } catch (error) {
      res.status(500).json({msg:'server problem'})
    }
    
    
    }

    exports.updateExperiencia = async (req, res)=>{
        const {experiencia} = req.body;
       
        try {
         const newExperiencia = await experienciaSchema.findByIdAndUpdate(req.params.id, {
      
            experiencia
       
          });
       
          let results = await newExperiencia.save();
          await results;
          res.json({msg:'Item atualizado'})
          
        } 
        catch (error) {
         res.status(500).json({msg:'server problem'})
        }
      
      
      
      }

  exports.delExperiencia = async (req, res)=>{
    const experiencia = await experienciaSchema.findByIdAndDelete(req.params.id)
 
    experiencia;
 
    res.json({msg:"Item deletado"})
 
 }
