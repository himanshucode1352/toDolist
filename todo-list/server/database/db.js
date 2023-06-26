import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {

    
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.7kqxo.mongodb.net/ecommerce`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    try {
        await mongoose.connect( MONGODB_URI || 8000).then(console.log('connected'.bgYellow.green));
     } catch (error) {
        console.log(error +"mongodbError")
     }
  
}

export default Connection;