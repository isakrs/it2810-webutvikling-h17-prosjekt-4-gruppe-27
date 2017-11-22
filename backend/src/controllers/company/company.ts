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
    let query = req.query
    
    try{
        let companies
        if('skip' in query && 'size' in query && 'minRating' in query && 'minComments'){
            companies = await companyHelpers.findFromAndLimitFilterMinRatingAndMinComments(parseInt(query.skip) ,parseInt(query.size), parseInt(query.minRating), parseInt(query.minComments))
            return res.status(200).send(JSON.stringify(companies))
        }

        if('skip' in query && 'size' in query && 'minRating'){
            companies = await companyHelpers.findFromAndLimitFilterMinRating(parseInt(query.skip) ,parseInt(query.size), parseInt(query.minRating))
            return res.status(200).send(JSON.stringify(companies))
        }

        if('skip' in query && 'size' in query && 'minComments'){
            companies = await companyHelpers.findFromAndLimitFilterMinComments(parseInt(query.skip) ,parseInt(query.size), parseInt(query.minComments))
            return res.status(200).send(JSON.stringify(companies))
        }

        if('skip' in query && 'size' in query){
            companies = await companyHelpers.findFromAndLimit(parseInt(query.skip) ,parseInt(query.size))
            return res.status(200).send(JSON.stringify(companies))
        }
        if('top' in query){
            companies = await companyHelpers.findTopCompaniesBasedOnAverage(parseInt(query.top))
            return res.status(200).send(JSON.stringify(companies))
        }
        
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
companyRouter.delete('/:id', async function(req:any, res: express.Response){
    try{
        if (!req.authed.isAuthed){
            return res.status(401).send()
        }
        let deletedComp = await Company.findByIdAndRemove(req.params.id)
        if(!deletedComp){
            let error:Error = new Error('The companany does not exist')
            throw error
        }
        return  res.status(200).send(JSON.stringify({message:`company ${req.params.id} is now deleted`}))
    }catch(e){
        res.status(400)
        return res.send(JSON.stringify(e.message))
    }
})

//creates a new company
companyRouter.post('/', async(req:any, res: express.Response)=>{
    
    try{
        if (!req.authed.isAuthed){
            return res.status(401).send()
        }
        let company = new Company({name:req.body.name})
        let existingCompany = await Company.findOne({name:{
            $regex: new RegExp(req.body.name,'i')}})
        if(existingCompany){
            let error:Error = new Error('company allready exist')
            throw error
        }
        await company.save()
        return res.status(200).send(JSON.stringify(company))

    }catch(error){
       return res.status(400).send(JSON.stringify(error.message))
    }
})
companyRouter.put('/:id', async function(req:any, res:express.Response){
    try {
        
        if (!req.authed.isAuthed){
            return res.status(401).send()
        }
        
        if(!('name' in req.body)){
            throw new Error('must have name')
        }
        let existingCompany = await Company.findById(req.params.id)
        if(!existingCompany){
            throw new Error('must have name')
        }
        let companany = await Company.findByIdAndUpdate(req.params.id,req.body, {new:true})
        return res.status(200).send()
    } catch (error) {
        
        return res.status(400).send()
    }
})
export default companyRouter