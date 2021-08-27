
const sobreSchema = require('../models/sobreModel');


exports.getSobre = async (req,res)=>{
    const sobre = await sobreSchema.find();
    try {
        res.json(sobre);
    } catch (error) {
        res.status(500).json({msg: 'srver prblem'});
    }
}
    
exports.addSobre = async (req,res)=>{
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
}
    
exports.getSobreId =  async (req, res)=>{

    try {
      const sobre= await sobreSchema.findById(req.params.id);
    res.json(sobre);
    
    } catch (error) {
      res.status(500).json({msg:'server problem'})
    }
    
    
    }

    exports.updateSobre = async (req, res)=>{
        const {sobre} = req.body;
       
        try {
         const newSobre = await sobreSchema.findByIdAndUpdate(req.params.id, {
      
           sobre
       
          });
       
          let results = await newSobre.save();
          await results;
          res.json({msg:'Item atualizado'})
          
        } 
        catch (error) {
         res.status(500).json({msg:'server problem'})
        }
      
      
      
      }

  exports.delSobre = async (req, res)=>{
    const sobre = await sobreSchema.findByIdAndDelete(req.params.id)
 
    sobre;
 
    res.json({msg:"Item deletado"})
 
 }
