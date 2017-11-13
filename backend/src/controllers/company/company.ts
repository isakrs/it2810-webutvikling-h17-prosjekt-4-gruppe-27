import * as express from 'express'
import {default as Company} from './../../db/models/companyModel'
import {default as CompanySchema} from './../../db/schemas/companySchema'
import { error } from 'util';



let companyRouter: express.Router = express.Router()

companyRouter.get('/:id', async (req:express.Request, res:express.Response)=>{
    res.sendStatus(501)
})

companyRouter.delete('/:id', async(req:express.Request, res: express.Response)=>{
    
    try{
    let deletedComp = await Company.findByIdAndRemove(req.params.id)
    if(!deletedComp){
        let error:Error = new Error('Internal server Error')
        throw error
    }
    res.status(200).send(JSON.stringify({message:`company ${req.params.id} is now deleted`}))
    return
    }catch(e){
        res.status(501)
        res.send(JSON.stringify(e.message))
        return
    }
})

companyRouter.post('/', async(req:express.Request, res: express.Response)=>{
    let company = new Company({name:req.body.name})
    try{
        let existingCompany = await Company.findOne({name:req.body.name})
        if(existingCompany){
            let error:Error = new Error('company allready exist')
            throw error
        }
    }catch(error){
        res.status(400).send(JSON.stringify(error.message))
        return
    }
    try{
        await company.save()
        res.status(200).send(JSON.stringify(company))
        return
    }catch(e){
        res.status(501)
        res.send(JSON.stringify(e))
        return
    }
  
    

})
export default companyRouter