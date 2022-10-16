const mongoose = require('mongoose');

//const MONGOOSE_URI = 

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Mongoose connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        //console.log(process.env.MONGO_URI);
        process.exit(1);
    }
}

module.exports = connectDB;