import * as mocha from 'mocha'
import * as supertest from 'supertest'
import * as mongoose from 'mongoose'
import * as _ from 'lodash'
import Company from  './../../db/models/companyModel'
import Review from './../../db/models/reviewModel'
import User from './../../db/models/userModel'
import {expect} from 'chai'
import {default as app} from './../../app'
import * as jwt from 'jsonwebtoken'

describe('testing reveiew /api/review', function(){

    describe('POST api/review',function(){
        let testCompany = {
            name: 'testName'
        }
        let company = new Company(testCompany)  
        let companyName = 'reviewTest'
        let companyID = ''
        let user = new User.Model({
            username:'someNm',
            password: 'pass'
        })

        let token = jwt.sign({userId:user._id}, 'superSecret', { expiresIn:'24h'})

        before( async function(){
            company = await company.save()
            await user.save()
        })
    
        after( async function(){
            await Company.findByIdAndRemove(company._id)
            await User.Model.findByIdAndRemove(user._id)
        })
        
        
        it('should return 401 if not valid attributes POST /review and not logged in', function(){
            let badTestReview = {
                rating:4,
                comment:'some comment',
            }
            return supertest(app)
            .post('/api/review')
            .send(badTestReview)
            .expect(401)
        })

        it('should not be able to create a review if company exists and attributes are correct but not signed in',function(){
            let testReview2 = {
                rating: 4,
                comment : 'comment',
                idCompany: company._id
            }
            return supertest(app)
            .post('/api/review')
            .send(testReview2)
            .expect(401)
        })

        it('should be able to create a review if company exists and attributes are correct and user signed in',async function(){
            let testReview2 = {
                rating: 4,
                comment : 'comment',
                idCompany: company._id
            }
            let response = await supertest(app).post('/api/review').set({Authorization:`Bearer ${token}`}).send(testReview2).expect(200)
            expect(response.body, 'does not _id , rating , comment, idCompany').have.all.keys('comment','_id', 'rating', 'idCompany', 'user')
            expect(response.body.user).have.all.keys('username', '_id')
            await Review.findByIdAndRemove(response.body._id)
        })

        it('should give 400 if not correct attrb, but signed in',async function(){
            let testReview2 = {
                comment : 'comment',
                idCompany: company._id
            }
            let response = await supertest(app).post('/api/review').set({Authorization:`Bearer ${token}`}).send(testReview2).expect(400)
            await Review.findByIdAndRemove(response.body._id)
        })
    })

    

    describe('GET api/review/company/:id',function(){
        let companyTest2 = new Company({name:'test2'})
        let review1 = new Review(
            {
                idCompany:companyTest2._id,
                rating:1,
                comment: 'some comment'
            })
        let review2 = new Review(
            {
                idCompany:companyTest2._id,
                rating:1,
                comment: 'some comment'
            })
        let review3 = new Review(
            {
                idCompany:companyTest2._id,
                rating:1,
                comment: 'some comment'
            })

        before(async function(){
            await companyTest2.save()
            await review1.save()
            await review2.save()
            await review3.save()
        })
        after(async function(){
            await Company.findByIdAndRemove(companyTest2._id)
            await Review.findByIdAndRemove(review1._id)
            await Review.findByIdAndRemove(review2._id)
            await Review.findByIdAndRemove(review3._id)
        })
        it('should return all reviews for a company given a companyid /api/reviews/company/:id', function(){
            return supertest(app)
            .get(`/api/review/company/${companyTest2._id}`)
            .expect(200)
            .then(function(response){
                expect(response.body, 'is an array').to.be.an('array')
                expect(response.body, 'should have length 3').to.have.length(3)
                _.forEach(response.body,function(reviewObject){
                    expect(reviewObject).to.have.all.keys('rating','comment','idCompany','_id')
                })
                
            })

        })

    })

    describe('testing UPDATE /api/review/:id',function(){
        let company1 = new Company({name:'test'})    
        let review1Updated = {
            idCompany:company1._id,
            rating:4,
            comment: 'very good'
        }
        

        let user1 = new User.Model({
            username:'someNm',
            password: 'pass'
        })

        let token1 = jwt.sign({userId:user1._id}, 'superSecret', { expiresIn:'24h'})

        let user2 = new User.Model({
            username:'someNm',
            password: 'pass'
        })

        let token2 = jwt.sign({userId:user2._id}, 'superSecret', { expiresIn:'24h'})
        
        let review1 = new Review(
            {
                idCompany:company1._id,
                rating:1,
                comment: 'some comment',
                user:user1._id
            })
        before(async function(){
           await company1.save()
           await review1.save()
           await Promise.all([user1.save(), user2.save()])
        })

        after(async function(){
            await Review.findByIdAndRemove(review1._id)
            await Company.findByIdAndRemove(company1._id)
            await Promise.all([User.Model.findByIdAndRemove(user1._id), User.Model.findByIdAndRemove(user2._id)])
        })

        it('should not be able to update record provided right attributes missing login', async function(){
            await supertest(app).put(`/api/review/${review1._id}`).send(review1Updated).expect(401) 
        })

        it('should not be able to update record provided right attributes with login but not same user', async function(){
            await supertest(app).put(`/api/review/${review1._id}`).set({Authorization:`Bearer ${token2}`}).send(review1Updated).expect(401)
        })

        it('should be able to update a record provided right attributes and sgined in and same user', async function(){
            let response = await supertest(app).put(`/api/review/${review1._id}`).set({Authorization:`Bearer ${token1}`}).send(review1Updated).expect(200)
                expect(response.body, 'does not _id , rating , comment, idCompany and user').have.all.keys('comment','_id', 'rating', 'idCompany','user')
                expect(response.body.comment).to.equal(review1Updated.comment)
                expect(response.body.rating).to.equal(review1Updated.rating)
                expect(response.body.idCompany).to.equal(review1Updated.idCompany.toString())
                expect(response.body._id).to.equal(review1._id.toString())
                expect(response.body.idCompany).equal(company1._id.toString())
        })
    })

    describe('testing DELETE /api/review/:id',function(){
        let company1 = new Company({name:'test'})
        let review1 = new Review(
            {
                idCompany:company1._id,
                rating:1,
                comment: 'some comment'
            })
        
        before(async function(){
            await company1.save()
            await review1.save()
        })

        after(async function(){
            await Company.findByIdAndRemove(company1._id)
        })

        it('should delete /api/review/:id',function(){
            return supertest(app)
            .delete(`/api/review/${review1._id}`)
            .expect(200)
        })
    
    })
})