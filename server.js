const express = require('express');
const path = require('path');   // ********?????

// Sets up Express app
const app = express();   // ********??????
const PORT = process.env.PORT || 3003;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));   // *****????
app.use(express.json());                          // *****????
app.use(express.static(__dirname + '/public'));  //*******??? */

// // Routes
// // Basic route that sends the user first to the AJAX Page
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./routes/apiRoutes')(app); 
require('./routes/htmlRoutes')(app);


// Start server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

