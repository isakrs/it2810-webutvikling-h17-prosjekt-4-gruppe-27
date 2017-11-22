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

async function searchByName(searchTerm:string){
    return await Company.find({
        name:new RegExp(`${searchTerm}`,'i')
    }
    )
}

async function findFromAndLimit(from:number, size:number){
    return await Company.find({}).limit(size).skip(from)
}

async function findTopCompaniesBasedOnAverage(top:number){
    return await Company.find({}).limit(top).sort({averageRating:-1})
}
export {
    findCompaniesMinRatingMinComments,
    findCompaniesMinRating,
    findCompaniesMinComments,
    searchByName,
    findFromAndLimit,
    findTopCompaniesBasedOnAverage
}