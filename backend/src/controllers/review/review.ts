import * as express from 'express'
import Review from './../../db/models/reviewModel'
let reviewRouter = express.Router()

reviewRouter.post('/', async function(req:express.Request, res: express.Response){
    try {
        let review = new Review(req.body)
        await review.validate()
        await review.save()
        return res.status(200).send(JSON.stringify(review))
    } catch (error) {
        return res.status(400).send()
        
    }
})

reviewRouter.get('/company/:id', async function(req:express.Request, res: express.Response){
    try {
        let reviews= await Review.find({idCompany:req.params.id})
        return res.set(200).send(JSON.stringify([...reviews]))
    } catch (error) {
        return res.status(400).send()
    }
})

reviewRouter.put('/:id', async function(req:express.Request, res: express.Response){
    try {
        console.log(req.body)
        let review = await Review.findByIdAndUpdate(req.params.id,req.body, {new:true})
        res.status(200).send(JSON.stringify(review))
    } catch (error) {
        res.status(400).send()
    }
})

reviewRouter.delete('/:id', async function(req:express.Request, res: express.Response){
    try {
       let review = await Review.findByIdAndRemove(req.params.id)
        res.status(200).send(JSON.stringify(review))
    } catch (error) {
        res.status(400).send()
    }
})


export default reviewRouter