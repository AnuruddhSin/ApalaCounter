import mongoose from 'mongoose';


const connectDB = async() => { 
    try {
        
        const connection = await mongoose.connect(
            process.env.MONGO_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );

        console.log(`🌐 MongoDB Connected successfully on  => ${connection.connection.host}`);


    }catch (error) {
    
        console.log("Error connecting to MongoDB Database => ", error);
        process.exit(1);
    }
}

export default connectDB;