import * as mongoose from 'mongoose'
import Review from './../models/reviewModel'
import Company from './../models/companyModel'

interface IavgRatingAnNumberOfComments{
    averageRating:number
    nComments:number
}

async function updateCompanyStats(updatedResults:IavgRatingAnNumberOfComments, companyID:string){
    await Company.findByIdAndUpdate(companyID,updatedResults,{new:true})
}

async function calculateAvgRatingAndNumberOfComments(companyID:string){
        try {
            let aggreagtetResult = await Review.aggregate([
                {$match:{idCompany:mongoose.Types.ObjectId(companyID)}},
                {$group:{
                    _id:'$idCompany',
                    nComments:{$sum:1},
                    averageRating:{$avg:'$rating'}
                }} 
            ])
            
            let result:any  = aggreagtetResult[0]
            if(!result){
                return {
                    nComments:null,
                    averageRating:null
                }
            }
            delete result['_id']
            return result
        
            
        } catch (error) {
            throw error
        }
        
}

export {
    calculateAvgRatingAndNumberOfComments,
    IavgRatingAnNumberOfComments,
    updateCompanyStats
}