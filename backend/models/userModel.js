import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
//Assistant
    assistantName:{
        type: String,
    },
    assistantImage:{
        type: String,
    },

    history:[
        {type: String}
    ]
},{timeseries:true})

const User = mongoose.model("User",userSchema)

export default User;