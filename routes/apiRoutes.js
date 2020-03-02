const db = require("../db/db.json");
const fs = require("fs");
let id = db.length + 1;
function apiRoutes(app) {

    app.get("/api/notes", (req, res) => {
        res.json(db)
    })
    app.post("/api/notes", function (req, res) {
        req.body.id = id++;
        db.push(req.body)

        fs.writeFile("./db/db.json", JSON.stringify(db), function (error) {
            if (error) {
                console.log(error)
            }
        }
        )
        res.json(db)
    })

    //Delete JSON file
    app.delete('/api/notes/:id', (req, res) => {
        let reqId = req.params.id;
         reqId=parseInt(reqId)
           

              console.log(reqId)
        for (var i = 0; i < db.length; i++) {

            if (db[i].id === reqId) {
                db.splice(i, 1);
            }
        }

        fs.writeFile('./db/db.json',JSON.stringify(db),function (){

        })

        res.json(db)
        // fs.readFile('db/db.json', (err,data) => {
        //     if (err) throw err;
        //     let notesData=JSON.parse(data);

        //     let note = notesData.filter((note) => {
        //         return note.id = reqId;
        //     })[0];

        //     const index = notesData.indexOf(note);
        //     notesData.splice(index, 1);
        //     newData=JSON.stringify(notesData);

        //     fs.writeFile('db/db.json',newData, (err) => {
        //         if (err) throw err;

        //     });
        //     res.json(notesData);
        // });l
    });


};
module.exports = apiRoutes