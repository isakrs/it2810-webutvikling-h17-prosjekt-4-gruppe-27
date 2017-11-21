import * as express from 'express'
import User from './../../db/models/userModel'
import * as jwt from 'jsonwebtoken'
let router:express.Router = express.Router()

router.post('/signup',async function(req, res) {
    try {
        let user = new User(req.body)
        let exisitingUser = await User.findOne({username:req.body.username})
        if(exisitingUser){
            throw new Error('user exists')
        }
        await user.validate()
        await user.save()
        
        let response ={
            message:'signed upp'
        }
        return res.status(200).send(JSON.stringify(response))
    } catch (error) {
        return res.status(400).send(JSON.stringify(error.message))
    }
})

router.post('/login', async function(req:express.Request,res:express.Response){
 
    try {
        let user = await User.findOne({username:req.body.username, password:req.body.password})
       
        if(!user){
            throw new Error('user does not exist')
        }
        let response = {
            token: jwt.sign({userId:user._id}, 'superSecret', { expiresIn:'24h'})
        }
        return res.status(200).send(JSON.stringify(response))
    } catch (error) {
        return res.status(400).send()
    }
    
})

router.post('/verify', async function (req:express.Request, res:express.Response) {
    try {
        if(!req.body.token){
            throw new Error('provide a valid token')
        }
        try {
            jwt.verify(req.body.token, 'superSecret')
            
        } catch (error) {
            throw new Error('token is not valid')
        }
        
        return res.status(200).send(JSON.stringify({
            message:'verified token'
        }))
    } catch (error) {
        return res.status(401).send(JSON.stringify({message: error.message}))
    }
    
})

export default router