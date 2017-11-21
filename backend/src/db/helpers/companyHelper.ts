import * as mongoose from 'mongoose'
import Company from './../models/companyModel'

async function findCompaniesMinRatingMinComments(minRating:number, minComments:number){
    return await Company.find({
        averageRating: {$gte:minRating},
        nComments: {$gte:minComments}
    })
}

async function findCompaniesMinRating(minRating:number){
    return await Company.find({
        averageRating: {$gte:minRating},
    })
}

async function findCompaniesMinComments(minComments:number){
    return await Company.find({
        nComments: {$gte:minComments},
    })
}


export {
    findCompaniesMinRatingMinComments,
    findCompaniesMinRating,
    findCompaniesMinComments
}