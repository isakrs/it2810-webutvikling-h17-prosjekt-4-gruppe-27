import * as express from "express"
import mongoose = require('mongoose')
import * as promise from 'promise'
import apiRouter from './controllers/index'
import AuthRouter from './controllers/auth/authRouter'
import * as morgan from 'morgan'
import * as cors from 'cors'

let port = process.env.PORT || 3000
let app = express()
let connectionString = 'mongodb://applicationUser:ehysb7TXc2G7esapvF@it2810-27.idi.ntnu.no:27017/glassdoor'

//register middleware
app.use(cors())
//app.use(morgan('common'))
app.use('/auth', AuthRouter)
app.use('/api', apiRouter)
mongoose.Promise = promise


const init = async()=>{
    try{
        await mongoose.connect(connectionString,{useMongoClient: true})
        console.log('connected')
    }catch(e){
        console.log('could not connect to db')
        process.exit(1)
    }
    try{
        await app.listen(port)
        console.log('server is listening on port: ', port)
    }catch(e){
        console.log('could not start server')
    }
}

init()
export default app;
// comment
