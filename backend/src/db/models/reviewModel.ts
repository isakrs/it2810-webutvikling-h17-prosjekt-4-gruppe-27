import * as mongoose from 'mongoose'

let reviewSchema = new mongoose.Schema({
    idCompany: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Company'
     },
     rating: {
         type:Number,
         required: true,
         min: 0,
         max: 5
     },
     comment: {
         type: String,
         required: true
     }
    },
    {
        versionKey:false
    }
)
let name ='Review'
if (process.env.NODE_ENV === 'test'){
    name = 'Reviewtest'
}

let Review = mongoose.model(name, reviewSchema)

export default Review