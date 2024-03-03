import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// import requireDir from 'require-dir';

// requireDir('../models')

const options: mongoose.ConnectOptions = {
  // autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
// mongoose.connect('mongodb://localhost:27017/paralelo', options).then(
  //To test local: ipconfig or ifconfig and get ip of  Ethernet adapter vEthernet (Default Switch) and IPV4 or Ethernet adapter vEthernet (WSL):
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, options).then(

  () => {
    console.log("connection to mongoDB successfully")
  },
  err => {
    console.log("Error to connect to mongoDB: ", err)
  }

)
