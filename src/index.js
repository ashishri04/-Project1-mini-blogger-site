const express= require("express")
const bodyParser = require ("body-parser")
const {default:mongoose} = require ("mongoose")
const router = require("./routes/route")
const app = express()


app.use(bodyParser.json())
app.use (bodyParser.urlencoded({extended : true}))

mongoose.connect("mongodb+srv://ashi:jhansi284205@myfirstcluster.tfihevu.mongodb.net/project1",{ 
   useNewUrlParser: true})
.then( ()=> console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use('/',router)

app.listen(process.env.PORT || 3000, function(){
   console.log('express app running on PORT'+ (process.env.PORT || 3000))
})
