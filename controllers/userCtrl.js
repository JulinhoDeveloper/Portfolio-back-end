const userSchema = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');

const userCtrl = {
    //registro
    registerUser: async(req,res)=>{
       const { username, email, password } = req.body;

   try {
    const user = await userSchema.findOne({email:email});
    if(user){
        return res.status(400).json({msg:"Email já existe"})
    }
  // criar senha forte e atualizar o schema
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = new userSchema({
      username:username,
      email:email,
      password:passwordHash
  })
  await newUser.save();
  res.json({msg:"cadastrado com sucesso"})

   } catch (error) {
       return res.status(500).json({msg:error.message})
   }


    },

    // login
    loginUser:async(req,res)=>{
        try {
  
          const { email, password } = req.body;
          const user=await userSchema.findOne({email:email})
          if(!user){
              return res.status(400).json({msg:'Usuário não existe'})
          }
  
          const isMatch = await bcrypt.compare(password, user.password);
          if(!isMatch){
              return res.status(400).json({msg:"Senha Incorreta"})
          }
          // se o login for com sucesso
          const payload={
              id:user._id,
              name:user.username
          }
  
          const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: "1d"})
  
              res.json({token})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
            
        }
      },
    
     

    // verify
    verifiedToken:async(req,res)=>{
    try {

        const token = req.header("Authorization")
        if(!token) return res.send(false)

        jwt.verify(token, process.env.TOKEN_SECRET, async(err, verified)=>{
            if(err) return res.send(false)
            const user = await userSchema.findById(verified.id)
            if(!user) return res.send(false)

            return res.send(true)

        })
        
    } catch (error) {
        return res.status(500).json({msg:err.message})
    }
    }
}


module.exports = userCtrl;
