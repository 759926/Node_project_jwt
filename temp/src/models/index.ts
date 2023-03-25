// creating schemas and models :

 import mongoose, { Schema } from "mongoose";
 import { databaseLoader } from "./../loaders/database/index";
import joi from 'joi';
 databaseLoader();
// making a schema using joi 

const basicSch = new mongoose.Schema({
    title : String,
    price : Number,
    catagory : String,
    image: String
    
});

// creating schemas for two collections
const sch1 = new mongoose.Schema({
    name : String ,
    Branch : String,
    Age : Number
})

const sch2 = new mongoose.Schema({
    name : String ,
    Branch : String,
    Age : Number
})

const schemaValue = new mongoose.Schema({
    name : String,
    age : Number,
    password : String,
    email: {
        type: String,
        required: true,
        unique : true,
    },
    confirm_password: String
    
})
// schemaValue.pre('save', function(){
//     this.confirm_password = undefined;
// }) // in this case before saving into database pre-hooks is applied into schemas 

// post hooks :
schemaValue.post('save', function(doc) {
    console.log(doc);
})

const  basicModel = mongoose.model('product', basicSch);


export {basicModel};




