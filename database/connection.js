const mongoose = require('mongoose');

//console.log("el log del procces", process.env);

const connectDB = async () => {

    try {
        //mongoDB connection string
           const con = await mongoose.connect(process.env.MONGO_URI);
        //const con = await mongoose.connect('mongodb://localhost:27017/servisatTracking');
        console.log(`MongoDB se ha conectado: ${con.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB