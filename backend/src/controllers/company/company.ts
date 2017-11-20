import * as express from 'express'
import {default as Company} from './../../db/models/companyModel'
import { error } from 'util';
import {calculateAvgRatingAndNumberOfComments,IavgRatingAnNumberOfComments} from './../../db/helpers/reviewHelper'
import * as _ from 'lodash'


let companyRouter: express.Router = express.Router()

companyRouter.get('/:id', async (req:express.Request, res:express.Response)=>{
    try{
        let company = await Company.findById(req.params.id)
        let review = await calculateAvgRatingAndNumberOfComments(req.params.id) as IavgRatingAnNumberOfComments
        if(!company){
            throw new Error('company does not exist')
        }
        if(!review){
            review = {
                averageRating:null,
                nComments:null
            }
        }
        return res.status(200).send(JSON.stringify({...company.toObject(),...review}))

    }catch(e){

        return res.status(400).send(JSON.stringify({error:e.message}))
    }
})

companyRouter.get('/', async (req:express.Request, res:express.Response)=>{
    try{

        let companies = await Company.find({})
        if(!companies){
            throw new Error('company does not exist')
        }

        let companieResponse = await Promise.all( _.map(companies, async function(company){
            let review = await calculateAvgRatingAndNumberOfComments(company._id) as IavgRatingAnNumberOfComments 
            if(!review){
                review = {
                    averageRating:null,
                    nComments:null
                }
            }
            return {...company.toObject(), ...review}
        }))
        console.log(companieResponse)
        return res.status(200).send(JSON.stringify(companieResponse))

    }catch(e){

        return res.status(400).send(JSON.stringify({error:e.message}))
    }
})

companyRouter.delete('/:id', async(req:express.Request, res: express.Response)=>{

    try{
    let deletedComp = await Company.findByIdAndRemove(req.params.id)
    if(!deletedComp){
        let error:Error = new Error('The companany does not exist')
        throw error
    }
    res.status(200).send(JSON.stringify({message:`company ${req.params.id} is now deleted`}))
    return
    }catch(e){
        res.status(400)
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