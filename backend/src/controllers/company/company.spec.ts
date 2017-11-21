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
    let comp1:any = new Company({
        name:'name1',
        averageRating: 1,
        nComments: 5
    })

    let comp2:any = new Company({
        name:'name2',
        averageRating: 2,
        nComments: 2
    })
    let comp3:any = new Company({
        name:'name3',
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