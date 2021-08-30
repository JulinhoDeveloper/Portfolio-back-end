const jwt = require('jsonwebtoken');

const auth = (req, res, next)=>{
    try {

        const token = req.header("Authorization");
        if(!token){
            return res.status(400).json({msg:"Autorização Inválida"})
        }

        jwt.verify(token, process.env.TOKEN_SECRET, (err,user)=>{
            if(err){
                return res.status(400).json({msg:"Autorizaçao não validada"})
            }
            req.user = user;
            next();
        })
        
    } catch (err) {
        return res.status(400).json({msg:err.message});
    }
}

module.exports = auth;