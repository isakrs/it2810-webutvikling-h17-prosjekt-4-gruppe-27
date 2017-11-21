import * as express from 'express'
import {default as Company} from './../../db/models/companyModel'
import { error } from 'util';
import {calculateAvgRatingAndNumberOfComments,IavgRatingAnNumberOfComments} from './../../db/helpers/reviewHelper'
import * as companyHelpers from './../../db/helpers/companyHelper'
import * as _ from 'lodash'

let companyRouter: express.Router = express.Router()

//Returns compani given its id
companyRouter.get('/:id', async (req:express.Request, res:express.Response,next)=>{
    try{
        let company = await Company.findById(req.params.id)
        if(!company){
            throw new Error('company does not exist')
        }
        return res.status(200).send(JSON.stringify(company))
    }catch(e){
        return res.status(400).send(JSON.stringify({error:e.message}))
    }
})

//returns all companies
companyRouter.get('/', async (req:any, res:express.Response)=>{
    console.log(req.authed)
    let query = req.query
    try{
        let companies
        if (_.has(query,'name')){
            companies = await companyHelpers.searchByName(query.name)
            return res.status(200).send(JSON.stringify(companies))
        }
        if (_.has(query,'minRating')&&_.has(query,'minComments')){
            companies = await companyHelpers.findCompaniesMinRatingMinComments(query.minRating, query.minComments)
            return res.status(200).send(JSON.stringify(companies))
        }

        if (_.has(query,'minRating')){
            companies = await companyHelpers.findCompaniesMinRating(query.minRating)
            return res.status(200).send(JSON.stringify(companies))
        }
        if (_.has(query,'minComments')){
            companies = await companyHelpers.findCompaniesMinComments(query.minComments)
            return res.status(200).send(JSON.stringify(companies))
        }
        companies = await Company.find({})
        return res.status(200).send(JSON.stringify(companies))
    }catch(e){

        return res.status(400).send(JSON.stringify({error:e.message}))
    }
})

//deletes a company given a id 
companyRouter.delete('/:id', async(req:express.Request, res: express.Response)=>{
    try{
    let deletedComp = await Company.findByIdAndRemove(req.params.id)
    if(!deletedComp){
        let error:Error = new Error('The companany does not exist')
        throw error
    }
    res.status(200)
    res.send(JSON.stringify({message:`company ${req.params.id} is now deleted`}))
   return
    }catch(e){
        res.status(400)
        res.send(JSON.stringify(e.message))
        return
    }
})

//creates a new company
companyRouter.post('/', async(req:express.Request, res: express.Response)=>{
    let company = new Company({name:req.body.name})
    try{
        let existingCompany = await Company.findOne({name:req.body.name})
        if(existingCompany){
            let error:Error = new Error('company allready exist')
            throw error
        }
    }catch(error){
       return res.status(400).send(JSON.stringify(error.message))
    }
    try{
        await company.save()
       return res.status(200).send(JSON.stringify(company))
    }catch(e){
    
        return res.status(400).send(JSON.stringify(e))
    }
})
export default companyRouter