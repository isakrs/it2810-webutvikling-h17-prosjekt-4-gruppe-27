import {expect} from 'chai'
import * as mocha from 'mocha'
import * as supertest from 'supertest'
import * as mongoose from 'mongoose'
import {default as app} from './../../app'
import * as _ from 'lodash'
import Company from './../../db/models/companyModel'
import User from './../../db/models/userModel'
import * as jwt from 'jsonwebtoken'

let companyName = 'testTestTest1'
let companyID = ''

describe('testing api/company', function(){
    before(function(done){
         mongoose.connection.on('connected',done)
    })
})

describe('testing GET api/company/:id , GET api/company/:id , GET api/company/ with searchTerms',function(){
    let comp1:any = new Company({
        name:'evry',
        averageRating: 1,
        nComments: 5
    })

    let comp2:any = new Company({
        name:'bain',
        averageRating: 2,
        nComments: 2
    })
    let comp3:any = new Company({
        name:'bainbain',
        averageRating: 1,
        nComments: 6
    })
    before(async function(){
        await Promise.all([comp1.save(), comp2.save(), comp3.save()])

    })

    after(async function(){
        await Promise.all([Company.findByIdAndRemove(comp1._id), Company.findByIdAndRemove(comp2._id), Company.findByIdAndRemove(comp3._id)])
    })

    it('should return a list of companies', function(){
       return supertest(app)
        .get('/api/company')
        .expect(200)
        .then( function(response){
            expect(response.body, 'is not an array').to.be.an('array')
        })
    })

    it('should rank on minComments if its given in the queryString', async function(){
        let response = await supertest(app).get('/api/company/?minComments=5').expect(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(2)
        expect(response.body).to.have.deep.members([
            {_id:comp1._id.toString(),
            averageRating:comp1.averageRating,
            nComments:comp1.nComments,
            name:comp1.name
            }, 
            {_id:comp3._id.toString(),
                averageRating:comp3.averageRating,
                nComments:comp3.nComments,
                name:comp3.name}
            ])
    })

    it('should rank on minRating if its given in the queryString', async function(){
        let response = await supertest(app).get('/api/company/?minRating=2').expect(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(1)
        expect(response.body).to.have.deep.members([
            {_id:comp2._id.toString(),
            averageRating:comp2.averageRating,
            nComments:comp2.nComments,
            name:comp2.name
            }
            ])
    })

    it('should rank on both minRating and minComments', async function(){
        let response = await supertest(app).get('/api/company/?minRating=1&minComments=6').expect(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(1)
        expect(response.body).to.have.deep.members([
            {_id:comp3._id.toString(),
            averageRating:comp3.averageRating,
            nComments:comp3.nComments,
            name:comp3.name
            }
            ])
    })

    it('should search based on term', async function(){
        let response  = await supertest(app).get('/api/company/?name=evry').expect(200)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.lengthOf(1)
        expect(response.body).to.have.deep.members([
            {_id:comp1._id.toString(),
            averageRating:comp1.averageRating,
            nComments:comp1.nComments,
            name:comp1.name
            }
            ])
    })

    it('should search based on term and only return relevant', async function(){
        let response  = await supertest(app).get('/api/company/?name=bai').expect(200)
        expect(response.body).to.have.lengthOf(2)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.deep.members([
            {_id:comp2._id.toString(),
            averageRating:comp2.averageRating,
            nComments:comp2.nComments,
            name:comp2.name
            },
            {_id:comp3._id.toString(),
                averageRating:comp3.averageRating,
                nComments:comp3.nComments,
                name:comp3.name
                }
            ])
    })
    it('should search based on term and only return relevant, should be case insensitive', async function(){
        let response  = await supertest(app).get('/api/company/?name=BaI').expect(200)
        expect(response.body).to.have.lengthOf(2)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.deep.members([
            {_id:comp2._id.toString(),
            averageRating:comp2.averageRating,
            nComments:comp2.nComments,
            name:comp2.name
            },
            {_id:comp3._id.toString(),
                averageRating:comp3.averageRating,
                nComments:comp3.nComments,
                name:comp3.name
                }
            ])
    })

    it('should search based on term and only return relevant, should be case insensitive', async function(){
        let response  = await supertest(app).get('/api/company/?name=BaIn').expect(200)
        expect(response.body).to.have.lengthOf(2)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.deep.members([
            {_id:comp2._id.toString(),
            averageRating:comp2.averageRating,
            nComments:comp2.nComments,
            name:comp2.name
            },
            {_id:comp3._id.toString(),
                averageRating:comp3.averageRating,
                nComments:comp3.nComments,
                name:comp3.name
                }
            ])
    })

    it('should search based on term, only return relevant term bainba', async function(){
        let response  = await supertest(app).get('/api/company/?name=bainba').expect(200)
        expect(response.body).to.have.lengthOf(1)
        expect(response.body).to.be.an('array')
        expect(response.body).to.have.deep.members([
            {_id:comp3._id.toString(),
                averageRating:comp3.averageRating,
                nComments:comp3.nComments,
                name:comp3.name
                }
            ])
    })
    
})

describe('testing POST api/company ', function(){
    let company4 = {
        name:'some Name'
    }
    let company4id:string

    let company5 = {
        name:'some naMe'
    }
    let company6 = {
        name:'SOMe name'
    }
    let company7 = {
        name:'SomE Name'
    }
    let user2 = new User.Model({
        username:'someNm',
        password: 'pass'
    })

    let token2 = jwt.sign({userId:user2._id}, 'superSecret', { expiresIn:'24h'})
  

    before(async function(){
        await user2.save()
    })

    after(async function(){
        await Promise.all([User.Model.findByIdAndRemove(user2._id), Company.findByIdAndRemove(company4id)])
    })

    it('should not be able to create company if not signed in', async function(){
        await  supertest(app).post('/api/company').send(company4).expect(401)
    })

    it('should create a new compnay if logged in', async function(){     
       let respone =  await supertest(app).post('/api/company').set({Authorization:`Bearer ${token2}`}).send(company4).expect(200)
       company4id = respone.body._id
       expect(respone.body).to.have.all.keys('name','_id','nComments','averageRating')
    })

    it('should not be able to create a company with the same name', async function(){
        let respone =  await supertest(app).post('/api/company').set({Authorization:`Bearer ${token2}`}).send(company4).expect(400)
    })

    it('should not be possible to create a company with another caseSensitivity', async function(){
        await Promise.all([supertest(app).post('/api/company').set({Authorization:`Bearer ${token2}`}).send(company5).expect(400),
         supertest(app).post('/api/company').set({Authorization:`Bearer ${token2}`}).send(company6).expect(400),
         supertest(app).post('/api/company').set({Authorization:`Bearer ${token2}`}).send(company7).expect(400)])
    })
})

describe('Testing DELETE /api/company/:id',function(){
    let company1 = new Company({
        name:'test1',
    })

    let user2 = new User.Model({
        username:'someNm',
        password: 'pass'
    })

    let token2 = jwt.sign({userId:user2._id}, 'superSecret', { expiresIn:'24h'})
    
    before(async function(){
        await Promise.all([company1.save(), user2.save()])
    })

    after(async function(){
        await Promise.all([User.Model.findByIdAndRemove(user2._id)])
    })
    it('shouls be able to delete if signed in an company id is correct', async function(){
        await supertest(app).delete(`/api/company/${company1._id}`).set({Authorization:`Bearer ${token2}`}).send().expect(200)
    })
    it('should not be able to delete a company if not signed in', async function(){
        await supertest(app).delete(`/api/company/${company1._id}`).expect(401)
    })

    it('should not be able to delete if company does not exist, but user is authed', async function(){
        await supertest(app).delete(`/api/company/${1111111}`).set({Authorization:`Bearer ${token2}`}).expect(400)
    })

})
describe('Testing company update name', function(){
    let comp1:any = new Company({
        name:'evry2',
        averageRating: 1,
        nComments: 5
    })

    let comp1NewName = {
        name:'evrynew'
    }

   
    let user2 = new User.Model({
        username:'someNm',
        password: 'pass'
    })

    let token2 = jwt.sign({userId:user2._id}, 'superSecret', { expiresIn:'24h'})

    before(async function(){
        await Promise.all([comp1.save(), user2.save()])

    })

    after(async function(){
        await Promise.all([Company.remove({}), User.Model.remove({})])
    })

    it('should not be possible to update a company if auth is not provided', async function(){
        await supertest(app).put(`/api/company/${comp1._id}`).send(comp1NewName).expect(401)
    })

    it('should not be possible to update a company if it does not exist', async function(){
        await supertest(app).put(`/api/company/${324234234}`).set({Authorization:`Bearer ${token2}`}).send(comp1NewName).expect(400)
    })

    it('should not be possible to update a company if exists but body is not name and user is authed', async function(){
        await supertest(app).put(`/api/company/${comp1._id}`).set({Authorization:`Bearer ${token2}`}).send({other:1}).expect(400)
    })

    it('should be possible to update if exists and body is name and user is authed', async function(){
        await supertest(app).put(`/api/company/${comp1._id}`).set({Authorization:`Bearer ${token2}`}).send(comp1NewName).expect(200)
        let updatedComp:any = await Company.findById(comp1._id)
        expect(updatedComp).not.to.be.null
        expect(updatedComp.name.toString()).to.equal(comp1NewName.name)
    })

})
