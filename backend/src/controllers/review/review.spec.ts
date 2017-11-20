import * as mocha from 'mocha'
import * as supertest from 'supertest'
import * as mongoose from 'mongoose'
import * as _ from 'lodash'
import Company from  './../../db/models/companyModel'
import Review from './../../db/models/reviewModel'
import {expect} from 'chai'
import {default as app} from './../../app'

describe('testing reveiew /api/review', function(){

    describe('POST api/review',function(){
        let testCompany = {
            name: 'testName'
        }
        let company = new Company(testCompany)  
        let companyName = 'reviewTest'
        let companyID = ''
        
        before( async function(){
            company = await company.save()
        })
    
        after( async function(){
            await Company.findByIdAndRemove(company._id)
        })
        
        
        it('should return 400 if not valid attributes POST /review', function(){
            let badTestReview = {
                rating:4,
                comment:'some comment',
            }
            return supertest(app)
            .post('/api/review')
            .send(badTestReview)
            .expect(400)
        })

        it('should be able to create a review if company exists and attributes are correct',function(){
            let testReview2 = {
                rating: 4,
                comment : 'comment',
                idCompany: company._id
            }
            return supertest(app)
            .post('/api/review')
            .send(testReview2)
            .expect(200)
            .then(function(response){
                expect(response.body, 'does not _id , rating , comment, idCompany').have.all.keys('comment','_id', 'rating', 'idCompany')
                return Review.findByIdAndRemove(response.body._id)
            })
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
        let review1 = new Review(
            {
                idCompany:company1._id,
                rating:1,
                comment: 'some comment'
            })
        let review1Updated = {
            idCompany:company1._id,
            rating:4,
            comment: 'very good'
        }
        
        before(async function(){
           await company1.save()
           await review1.save()
        })

        after(async function(){
            await Review.findByIdAndRemove(review1._id)
            await Company.findByIdAndRemove(company1._id)
        })

        it('should update a record provided right attributes', function(){
            return supertest(app)
            .put(`/api/review/${review1._id}`)
            .send(review1Updated)
            .expect(200)
            .then(function(response){
                expect(response.body, 'does not _id , rating , comment, idCompany').have.all.keys('comment','_id', 'rating', 'idCompany')
                expect(response.body.comment).to.equal(review1Updated.comment)
                expect(response.body.rating).to.equal(review1Updated.rating)
                expect(response.body.idCompany).to.equal(review1Updated.idCompany.toString())
                expect(response.body._id).to.equal(review1._id.toString())
                expect(response.body.idCompany).equal(company1._id.toString())
            })
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