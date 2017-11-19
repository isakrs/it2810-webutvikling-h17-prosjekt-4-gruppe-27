import {expect} from 'chai'
import * as mocha from 'mocha'
import * as supertest from 'supertest'
import * as mongoose from 'mongoose'
import {default as app} from './../../app'

let companyName = 'testTestTest1'
let companyID = ''

describe('testing api/company', function(){
    before(function(done){
         mongoose.connection.on('connected',done)
    })
    describe('testing GET api/company',function(){
        it('should return a list of companies', function(){
           return supertest(app)
            .get('/api/company')
            .expect(200)
            .then( response =>{
                expect(response.body, 'is not an array').to.be.an('array')
            })
        })
    })

    describe('testing POST api/company ', function(){
        it('should create a new company and retrive the same company', function(){
           
            return supertest(app)
            .post('/api/company')
            .send({
                name: companyName
            })
            .expect(200)
            .then(function(response){
                expect(response.body, 'is not an object').to.be.an('object')
                expect(response.body, 'does not have name and _id').have.all.keys('name','_id')
                expect(response.body.name, 'does not have the same name?').to.equal(companyName)
                companyID = response.body._id
                              
            })
            .then(function(){
                return supertest(app)
                .get(`/api/company/${companyID}`)
                .expect(200)
                .then(function(response){
                    expect(response.body, 'is not an object').to.be.an('object')
                    expect(response.body, 'does not have name and _id').have.all.keys('name','_id')
                    expect(response.body.name, 'does not have the same name?').to.equal(companyName)
                    expect(response.body._id).to.equal(companyID)
                    return response
                })
            })
        })
    })

    describe('Testing DELETE /api/company/:id',function(){
        it('should be able to delete a company', function(){
            return supertest(app)
            .delete(`/api/company/${companyID}`)
            .expect(200)
            .then(function(){
                return supertest(app)
                .get(`/api/company/${companyID}`)
                .expect(400)
            })
        })
    })

})