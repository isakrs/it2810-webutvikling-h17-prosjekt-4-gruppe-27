import * as express from "express"
import mongoose = require('mongoose')
import * as promise from 'promise'
import apiRouter from './controllers/index'
import AuthRouter from './controllers/auth/auth'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import * as jwt from 'jsonwebtoken'
let port = process.env.PORT || 3000
let app = express()
let connectionString = 'mongodb://applicationUser:ehysb7TXc2G7esapvF@it2810-27.idi.ntnu.no:27017/glassdoor'

//register middleware
app.use(cors())
//app.use(morgan('common'))

const options:bodyParser.OptionsJson ={
    type: 'application/json',
    strict: true
}

const setResponsePropterties = (req:express.Request, res: express.Response, next: express.NextFunction)=>{
    res.setHeader('Content-Type','application/json')
    next()
}

const checkContentType = (req:any,res:express.Response,next:express.NextFunction)=>{
    if (req.method !== 'GET' && req.method !== 'DELETE' && req.header('Content-Type') !== 'application/json'){
        res.status(403)
        res.send(JSON.stringify({error:'Content-Type should be application/json'}))
        return
    }
    //parse auth. 
    let authHeader:any = req.header('Authorization')
    req.authed = {
        isAuthed:false
    }
    if (authHeader && authHeader.split(' ')[0] === 'Bearer' && authHeader.split(' ').length === 2){
        try{
            let user = jwt.verify(authHeader.split(' ')[1],'superSecret')
            req.authed = {
                isAuthed:true,
                user
            }
        }catch(e){

        }
    }
    next()
}

//middleware
app.use(setResponsePropterties)
app.use(checkContentType)
app.use(bodyParser.json(options))
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
