import * as mongoose from 'mongoose'


let userSchema = new mongoose.Schema({
    username:String,
    password:String
})

let User = mongoose.model('user', userSchema)

export default User