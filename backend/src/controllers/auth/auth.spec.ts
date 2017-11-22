import {expect} from 'chai'
import * as mocha from 'mocha'
import * as supertest from 'supertest'
import * as mongoose from 'mongoose'
import {default as app} from './../../app'
import * as _ from 'lodash'
import User from './../../db/models/userModel'
import * as jwt from 'jsonwebtoken'

describe('Testing signup in auth',function(){
    let user = {
        username:'someusername',
        password: 'somepassword'
    }

    after(async function(){
        let us = await User.Model.findOne({username:user.username})
        await User.Model.findByIdAndRemove(us._id)
    })

    it('shoudl be able to sign up and not sign up with the same ', async function(){
        let response = await supertest(app).post('/auth/signup').send(user).expect(200)
        let userFromDb:any = await User.Model.findOne({username:user.username})
        expect(userFromDb.username.toString()).to.equal(user.username)
        expect(userFromDb.password.toString()).to.equal(user.password)
        let response2 = await supertest(app).post('/auth/signup').send(user).expect(400)
    })

})

describe('testing login', function(){
    let user = {
        username:'username',
        password:'password'
    }

    let userM = new User.Model(user)

    before(async function(){
        await userM.save()
    })

    after(async function(){
        await User.Model.findByIdAndRemove(userM._id)
    })

    it('should not give tokes if  login credetnials are wrong',async function(){
        await supertest(app).post('/auth/login').send({username:'', password:''}).expect(400)
    })

    it('should receive a valid token if credential are correct', async function(){
        let response = await supertest(app).post('/auth/login').send(user).expect(200)
        expect(response.body).to.have.keys('token','username')
        let decoded:any = jwt.verify(response.body.token,'superSecret')
        expect(decoded).to.include.keys('userId')
        expect(decoded.userId).to.equal(userM._id.toString())
    })

})

describe('testing /auth/verify ',function(){
    let user = {
        username:'username',
        password:'password'
    }

    let userM = new User.Model(user)
    before(async function(){
        await userM.save()
    })

    after(async function(){
        await User.Model.findByIdAndRemove(userM._id)
    })

    it('should not verify if token is not provided', async function(){
        await supertest(app).post('/auth/verify').send({other:''}).expect(401)
    })

    it('should not verify if token is wrong', async function(){
        await supertest(app).post('/auth/verify').send({token:'token'}).expect(401)
    })

    it('should verify if token is correct', async function(){
        let body = {
            token: jwt.sign({userId:userM._id}, 'superSecret', { expiresIn:'24h'})
        }
        let response = await supertest(app).post('/auth/verify').send(body).expect(200)
        expect(response.body).to.have.keys('message')
    })
})

