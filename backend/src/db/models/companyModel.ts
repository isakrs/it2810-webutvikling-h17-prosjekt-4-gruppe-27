import * as mongoose from 'mongoose'

let companySchema = new mongoose.Schema({
    name: {type: String, 
        unique: true}
    },
    {versionKey:false},
)

let Company = mongoose.model('Company',companySchema)

export default Company