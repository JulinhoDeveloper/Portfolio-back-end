const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.MONGO_URL , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            //useCreateIndex: true
        });

        console.log('DB Online');


    } catch (error) {
        console.log(error);
        throw new Error('Error ao inicializar  o BD');
    }


}


module.exports = {
    dbConnection
}