import * as mongoose from 'mongoose'
import Review from './../models/reviewModel'

interface IavgRatingAnNumberOfComments{
    averageRating:number
    nComments:number
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
            let result = aggreagtetResult[0] as IavgRatingAnNumberOfComments
            return result
            
        } catch (error) {
            throw error
        }
        
}

export {
    calculateAvgRatingAndNumberOfComments,
    IavgRatingAnNumberOfComments
}