import * as express from 'express'

let router:express.Router = express.Router()

router.post('/signup',async function(req, res) {
    res.status(200).send()
})

router.post('/login', async function(req,res){
    res.status(200).send()
})

router.post('/verify', async function (req:express.Request, res:express.Response) {
    res.status(200).send()
})

export default router