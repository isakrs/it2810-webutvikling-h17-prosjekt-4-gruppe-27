import * as mongoose from 'mongoose'
import {default as companySchema} from '../schemas/companySchema'

interface ICompany extends mongoose.Document{
    name: string
}


let Company = mongoose.model('Company',companySchema)


export default Company