const dynamoose = require('dynamoose')

const Bookschema = new dynamoose.Schema({
    id:{
        type:String,
        hashKey:true
    },
    name:String,
    price:Number
})

const Books = dynamoose.model('Books',Bookschema);

module.exports = Books;