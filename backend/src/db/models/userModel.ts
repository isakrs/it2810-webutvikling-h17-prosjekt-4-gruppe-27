import * as mongoose from 'mongoose'


let userSchema = new mongoose.Schema({
    username:String,
    password:String
})

let name = 'user'
if (process.env.NODE_ENV === 'test'){
    name = 'usertest'
}


let User = mongoose.model(name, userSchema)

export default {Model:User,
    name:name}