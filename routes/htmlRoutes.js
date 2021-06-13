// DEPENDENCIES
const path = require('path');

// ROUTING below

module.exports = (app) => {
 
  // GET for /notes  
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found, default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
