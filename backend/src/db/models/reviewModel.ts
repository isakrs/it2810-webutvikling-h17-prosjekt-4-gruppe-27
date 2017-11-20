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

let Review = mongoose.model('Review', reviewSchema)
export default Review