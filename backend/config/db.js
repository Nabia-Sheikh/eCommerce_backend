const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
 try {
   const conn = await mongoose.connect(process.env.DB_CONNECTION, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold.green);
 } catch (error) {
   console.error(`Error: ${error}`.red.underline.bold);
   process.exit(1);
 }
  
}
 
module.exports = connectDB;
