const mongoose = require("mongoose");

const dbConnect = async () => {
    try{
            await mongoose.connect(process.env.mongo_connection)
            console.log('DB Connected successfully.');
    } catch(error){
        console.log('Connection failed', error.message);
    }
}
dbConnect();