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

    //Delete JSON file
    app.delete('/api/notes/:id',(req,res) => {
        const reqID = req.params.id;

        fs.readFile('db/db.json', (err,data) => {
            if (err) throw err;
            let notesData=JSON.parse(data);
            
            let note = notesData.filter((note) => {
                return note.id = reqId;
            })[0];

            const index = notesData.indexOf(note);
            notesData.splice(index, 1);
            newData=JSON.stringify(notesData);

            fs.writeFile('db/db.json',newData, (err) => {
                if (err) throw err;

            });
            res.json(notesData);
        });l
    });


};
module.exports=apiRoutes