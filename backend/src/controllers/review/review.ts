import * as express from 'express'
import Review from './../../db/models/reviewModel'
import User from './../../db/models/userModel'
let reviewRouter = express.Router()
import {calculateAvgRatingAndNumberOfComments, updateCompanyStats, IavgRatingAnNumberOfComments} from './../../db/helpers/reviewHelper'

//calculate rating 
reviewRouter.post('/', async function(req:any, res: express.Response){
    try {
        if (!req.authed.isAuthed){
            return res.status(401).send()
        }
        let review = new Review({...req.body,user:req.authed.user.userId})
        await review.validate()
        await review.save()
        review = await Review.findOne({_id:review._id}).populate('user','username')
        let updatedReviews  = await calculateAvgRatingAndNumberOfComments(req.body.idCompany)
        await updateCompanyStats(updatedReviews,req.body.idCompany)
        return res.status(200).send(JSON.stringify(review))
    } catch (error) {
        return res.status(400).send()
        
    }
})

reviewRouter.get('/company/:id', async function(req:express.Request, res: express.Response){
    try {
        let reviews= await Review.find({idCompany:req.params.id})
        return res.set(200).send(JSON.stringify(reviews))
    } catch (error) {
        return res.status(400).send()
    }
})

//TODO update rating 
reviewRouter.put('/:id', async function(req:any, res: express.Response){
    try {
        if (!req.authed.isAuthed){
            return res.status(401).send()
        }
        let review:any = await Review.findById(req.params.id).populate('user','username')
        if(review.user._id.toString() !== req.authed.user.userId){
            return res.status(401).send()
        }
        review = await Review.findByIdAndUpdate(req.params.id,req.body, {new:true})
        let updatedReviews  = await calculateAvgRatingAndNumberOfComments(req.params.id)
        await updateCompanyStats(updatedReviews,req.params.id)
        res.status(200).send(JSON.stringify(review))
    } catch (error) {
        res.status(400).send()
    }
})

reviewRouter.delete('/:id', async function(req:any, res: express.Response){
    try {
        if (!req.authed.isAuthed){
            return res.status(401).send()
        }
        let review:any = await Review.findById(req.params.id).populate('user','username')
        if(review.user._id.toString() !== req.authed.user.userId){
            return res.status(401).send()
        }
        review = await Review.findByIdAndRemove(req.params.id)
       let updatedReviews  = await calculateAvgRatingAndNumberOfComments(req.params.id)
       await updateCompanyStats(updatedReviews,req.params.id)
        res.status(200).send(JSON.stringify(review))
    } catch (error) {
        res.status(400).send()
    }
})


export default reviewRouter