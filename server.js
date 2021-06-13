const express = require('express');
const path = require('path');   

// Sets up Express app
const app = express();   
const PORT = process.env.PORT || 3003;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));   
app.use(express.json());                          
app.use(express.static(__dirname + '/public'));  

// ROUTER dependencies
require('./routes/apiRoutes')(app); 
require('./routes/htmlRoutes')(app);

// Start server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));