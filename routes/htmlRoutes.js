const path=require("path")
function htmlRoutes(app){

    app.get("/",function(req,res){
        console.log(path.join(__dirname,"../public/index.html"))
         res.sendFile(path.join(__dirname,"../public/index.html"))
    })
    app.get("/notes",function(req,res){
        console.log(__dirname)
        res.sendFile(path.join(__dirname,"../public/notes.html"))
    })
}
module.exports=htmlRoutes