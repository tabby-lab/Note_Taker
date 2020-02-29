var express=require("express")
var app=express()
var PORT= process.env.PORT || 8000

//route path for public to be local host
app.use(express.static("public"))
//converts users data into JSON and put in a request.body
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//require is function to import files
var apiRoutes=require("./routes/apiRoutes")
var htmlRoutes=require("./routes/htmlRoutes")
apiRoutes(app)
htmlRoutes(app)

app.listen(PORT,function(){
    console.log("app is listening http://localhost:"+PORT)
})


