const ShortUniqueId = require('short-unique-id');

// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
const fs = require('fs')

const noteData = require('../db/db.json');
const { LOADIPHLPAPI } = require('dns');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', (req, res) => res.json(noteData));

  // app.get('/api/waitlist', (req, res) => res.json(waitListData));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
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

  app.delete('/api/notes/:id', (req, res) => {
    const passedId = req.params.id;
    // Get array from file - no, we already have that in noteData

    // Find index of array and use splice to remove the chosen item
    var elementPos = noteData.map(function(x) {return x.id; }).indexOf(passedId);
    noteData.splice(elementPos, 1);
    
    // Write new array to file?
    fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
      if (err) {
        console.error(err)
        return
      }
    })

    res.json(true);

  });

};
