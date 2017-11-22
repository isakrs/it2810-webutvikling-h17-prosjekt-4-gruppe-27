import {expect} from 'chai'
import * as mongoose from 'mongoose'
import {calculateAvgRatingAndNumberOfComments,updateCompanyStats, IavgRatingAnNumberOfComments} from './reviewHelper'
import Company from './../models/companyModel'
import Review from './../models/reviewModel'

describe('testing reviewHelper',  function(){
    it('should return err if company does not exist', async function(){
        let compId:string = '123'
        try {
            await calculateAvgRatingAndNumberOfComments(compId)
            expect(true).to.be.false
        } catch (error) {
            expect(error).to.be.an('error')   
        }
        
    })
})

describe('testing calculations in reviewHelper', function(){
    let company1 = new Company({name:'test2'})
    let review1 = new Review(
        {
            idCompany:company1._id,
            rating:3,
            comment: 'some comment'
        })
    let review2 = new Review(
        {
            idCompany:company1._id,
            rating:2,
            comment: 'some comment'
        })
    let review3 = new Review(
        {
            idCompany:company1._id,
            rating:4,
            comment: 'some comment'
        })

    before(async function(){
        await Promise.all([review1.save(),review2.save(),review3.save(),company1.save()])

    })

    after(async function(){
        await Promise.all([Review.remove({}), Company.remove({})])

    })
    it('should calculate avg correctly', async function(){
        let response = await calculateAvgRatingAndNumberOfComments(company1._id.toString())
            expect(response.nComments).to.equal(3)
            expect(response.averageRating).to.equal((3+2+4)/3)
    })
})

describe('testing update company',function(){
    let company1 = new Company({name:'test2'})
    let review1 = new Review(
        {
            idCompany:company1._id,
            rating:3,
            comment: 'some comment'
        })

    before(async function(){
        await Company.remove({})
        await company1.save()
    })

    after(async function(){
        await Company.remove({})
        await Review.remove({})
    })

    it('should give the same results if companies are not updated', async function(){
        let updatedResult = await calculateAvgRatingAndNumberOfComments(company1._id.toString()) as IavgRatingAnNumberOfComments
        await updateCompanyStats(updatedResult, company1._id.toString())
        expect(updatedResult.averageRating).to.be.null
        expect(updatedResult.nComments).to.be.null
        let updatedCompany:any = await Company.findById(company1._id)
        expect(updatedCompany.averageRating).to.be.null
        expect(updatedCompany.nComments).to.be.null
    })

    it('should calculate average correctly', async function(){
        await review1.save()
        let updatedResult = await calculateAvgRatingAndNumberOfComments(company1._id.toString()) as IavgRatingAnNumberOfComments
        expect(updatedResult.averageRating).to.equal(3)
        expect(updatedResult.nComments).to.equal(1)
        await updateCompanyStats(updatedResult, company1._id.toString())
        let updatedCompany:any = await Company.findById(company1._id)
        expect(updatedCompany.averageRating).to.equal(3)
        expect(updatedCompany.nComments).to.equal(1)
    })

})