/* This is a database connection function*/
import mongoose from "mongoose";

const connection = {}; /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    return;
  }
  //"mongodb+srv://nikan:Serarch12@cluster0.xpt9k.mongodb.net/?retryWrites=true&w=majority",
  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
