import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb://Ansh:Ansh2019@spotlight-shard-00-00.us8hb.mongodb.net:27017,spotlight-shard-00-01.us8hb.mongodb.net:27017,spotlight-shard-00-02.us8hb.mongodb.net:27017/SPOTLIGHT?ssl=true&replicaSet=atlas-670t35-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with Database", error);
  }
};

export default Connection;
