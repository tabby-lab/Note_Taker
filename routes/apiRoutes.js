var db=require("../db/db.json")
var fs=require("fs")
function apiRoutes(app){

    app.get("/api/notes",function(req,res){
       res.json(db)
    })
    app.post("/api/notes",function(req,res){
        db.push(req.body)

       fs.writeFile("./db/db.json",JSON.stringify(db),function(error){
                 if (error){
                     console.log(error)
                 }
       }
       )
       res.json(db)
    })
}
module.exports=apiRoutes