const express= require('express')
const app = express()
require('dotenv').config();
const connectDB = require('./DB/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require('./Routes/authRouter')
const foodRouter = require('./Routes/foodRouter')
connectDB()


app.use(bodyParser.json());
app.use(cors())

app.use('/auth',authRouter)
app.use('/food',foodRouter)




app.get('/',(req,res)=>{
    res.send('helow server ')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on  ${process.env.PORT}`)
})

