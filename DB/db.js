const mongoose = require('mongoose')


const connectDB = async () =>{

try {
   await mongoose.connect(process.env.MONGODB_URL)
    console.log("|| Data base is connectes successfully............ ||")
} catch (error) {
    console.log("Data base connection error ???????",error)
    throw error

}

}

module.exports = connectDB;