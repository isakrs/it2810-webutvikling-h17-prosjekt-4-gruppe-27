import {expect} from 'chai'
import * as mongoose from 'mongoose'
import {calculateAvgRatingAndNumberOfComments} from './reviewHelper'
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

describe('testing calculations in reviewHelps', function(){
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
        await company1.save()
        await [review1.save(),review2.save(),review3.save()]

    })

    after(async function(){
        await Company.findByIdAndRemove(company1._id)
        await [Review.findByIdAndRemove(review1._id),Review.findByIdAndRemove(review2._id),Review.findByIdAndRemove(review3._id)]

    })
    it('should calculate avg correctly', async function(){
        let response = await calculateAvgRatingAndNumberOfComments(company1._id.toString())
            expect(response.nComments).to.equal(3)
            expect(response.averageRating).to.equal((3+2+4)/3)
    })
})