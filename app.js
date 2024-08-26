const express = require('express')
const dynamoose = require('dynamoose')
const routes = require('./routes/Bookroutes')

const app = express()
app.use(express.json())

dynamoose.aws.ddb.local('http://localhost:7000')

app.use("/books",routes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})