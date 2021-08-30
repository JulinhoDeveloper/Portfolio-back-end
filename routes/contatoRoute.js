const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req,res)=>{
    res.send('contato')
})

router.post('/', (req, res)=>{
    let data = req.body;
let smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port:465,
    auth:{
        user:'juliodevfullstack@gmail.com',
        pass:'cachorrinho'
    }
})

let mailOptions = {
    from:data.email,
    to:'juliodevfullstack@gmail.com',
    pass:'cachorrinho',
    subject:`Message from ${data.name}`,
    html:`<h3>Informação</h3>
    <ul>
    <li>Nome: ${data.name}</li>
    <li>email: ${data.email}</li>
    </ul>
    <h3>Mensagem</h3>
    <p>${data.message}</p>    
    `
}

smtpTransport.sendMail(mailOptions, (err, response)=>{
    try {
        if(err) return res.status(400).json({msg:err})
        else{
            return res.status(200).json({msg:`A sua mensagem foi enviada`})
        }

    } catch (err) {
        res.status(500).json({msg:err})
    }
})


});




module.exports = router;