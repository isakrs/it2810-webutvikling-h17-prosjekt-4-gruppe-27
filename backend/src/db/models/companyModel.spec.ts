import {default as Company} from './companyModel'
import {expect} from 'chai'

describe('company model', function(){
    it('should be invalid if missing name',function(done){
        let company = new Company()
        company.validate(function(err){
            expect(err.errors.name).to.exist
            done()
        })
    })
})