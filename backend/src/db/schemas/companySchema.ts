import * as mongoose from 'mongoose'

var companySchema: mongoose.Schema = new mongoose.Schema({
    name: {type: String, unique: true},
    {versionKey:false}
})


    
export default companySchema