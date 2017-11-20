import {expect} from 'chai'
import * as mocha from 'mocha'
import * as supertest from 'supertest'
import * as mongoose from 'mongoose'
import {default as app} from './../../app'
import * as _ from 'lodash'
import Company from './../../db/models/companyModel'

let companyName = 'testTestTest1'
let companyID = ''

describe('testing api/company', function(){
    before(function(done){
         mongoose.connection.on('connected',done)
    })
})

describe('testing GET api/company',function(){
    it('should return a list of companies', function(){
       return supertest(app)
        .get('/api/company')
        .expect(200)
        .then( function(response){
            expect(response.body, 'is not an array').to.be.an('array')
        })
    })
})

describe('testing POST api/company ', function(){
    let companyName ='comp1'
    it('should create a new company and retrive the same company', function(){     
        return supertest(app)
        .post('/api/company')
        .send({
            name: companyName
        })
        .expect(200)
        .then(async function(response){
            expect(response.body, 'is not an object').to.be.an('object')
            expect(response.body, 'does not have name and _id').have.all.keys('name','_id', 'averageRating', 'nComments')
            expect(response.body.name, 'does not have the same name?').to.equal(companyName) 
            let company:any  = await Company.findById(response.body._id) 
            expect(company._id.toString()).to.equal(response.body._id)
            expect(company.name.toString()).to.equal(response.body.name)
            await Company.findByIdAndRemove(company._id)          
        })
    })
})

describe('Testing DELETE /api/company/:id',function(){
    let company1 = new Company({
        name:'test1',
    })
    before(async function(){
        await company1.save()
    })
    it('should be able to delete a company', function(){
        return supertest(app)
        .delete(`/api/company/${company1._id}`)
        .expect(200)
        .then(async function(){
            let result = await Company.findById(company1._id)
            expect(result).to.be.null
        })
    })
})