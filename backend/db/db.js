// importar librerias
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: Ok");
  } catch (error) {
    console.log("Error connecting MongoDB: \n" + error);
  }
};

export default { dbConnection };
