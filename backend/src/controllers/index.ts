import * as express from 'express'
import * as bodyParser from 'body-parser'
import CompanyRouter from './company/company'

let apiRouter:express.Router = express.Router()

const options:bodyParser.OptionsJson ={
    type: 'application/json',
    strict: true
}

const setResponsePropterties = (req:express.Request, res: express.Response, next: express.NextFunction)=>{
    res.setHeader('Content-Type','application/json')
    next()
}

const checkContentType = (req:express.Request,res:express.Response,next:express.NextFunction)=>{
    if (req.method !== 'GET' && req.header('Content-Type') !== 'application/json'){
        res.status(403)
        res.send(JSON.stringify({error:'Content-Type should be application/json'}))
        return
    }
    next()
}

//middleware
apiRouter.use(setResponsePropterties)
apiRouter.use(checkContentType)
apiRouter.use(bodyParser.json(options))

apiRouter.use('/company', CompanyRouter)

export default apiRouter
