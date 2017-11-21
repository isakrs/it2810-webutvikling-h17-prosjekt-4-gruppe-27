import * as mongoose from 'mongoose'

let companySchema = new mongoose.Schema({
    name: {type: String, 
        unique: true,
        required:true
    },
    averageRating:{type:Number,
    default:null},
    nComments:{type:Number,
        default:null}
    },
 
    {versionKey:false},
)
let name = 'Company'
if (process.env.NODE_ENV === 'test'){
    name = 'Companytest'
}


let Company = mongoose.model(name,companySchema)

export default Company