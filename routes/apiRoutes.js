// DEPENDENCIES
const ShortUniqueId = require('short-unique-id');
const fs = require('fs')
const noteData = require('../db/db.json');
const { LOADIPHLPAPI } = require('dns');

// ROUTING below
module.exports = (app) => {

  // GET - /api/notes
  app.get('/api/notes', (req, res) => res.json(noteData));

  // POSt - /api/notes
  app.post('/api/notes', (req, res) => {
    let uid = new ShortUniqueId();
    let uidWithTimestamp = uid.stamp(32);
    let noteObject = req.body;
    noteObject.id = String(uidWithTimestamp);  
    noteData.push(noteObject);
    res.json(true);
    fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
      if (err) {
        console.error(err)
        return
      }
    })
  });

  // DELETE - /api/notes/:id
  app.delete('/api/notes/:id', (req, res) => {
    const passedId = req.params.id;
    var elementPos = noteData.map(function(x) {return x.id; }).indexOf(passedId);
    noteData.splice(elementPos, 1);
    fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
      if (err) {
        console.error(err)
        return
      }
    })

    res.json(true);

  });

};
