import mongoose from "mongoose";

export const connection =async (username , password)=>{
    const URL =`mongodb://${username}:${password}@ecommerce-web-shard-00-00.a9rdo.mongodb.net:27017,ecommerce-web-shard-00-01.a9rdo.mongodb.net:27017,ecommerce-web-shard-00-02.a9rdo.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-qtojkf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Database is connected");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export default connection;