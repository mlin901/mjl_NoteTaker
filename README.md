# mjl_NoteTaker

Note Taker is a web app that enables you to add, view, and remove notes. It is deployed at [https://morning-taiga-99808.herokuapp.com/](https://morning-taiga-99808.herokuapp.com/). See [Description](#description) below for more information.

## Table of Contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Installation](#installation)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Usage](#usage)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Contributing](#contributing)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Questions](#questions)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Screenshot](#screenshot)<br/>

## Description

Each note consists of a title and text, and the app has two pages: a main page and the page that enables you to view and manage notes. Under the hood, each note also has a UID that enables the functionality that removes notes to remove the correct note when you invoke it.

Note taker is built and deployed using the following technologies:

- [Node.js](https://nodejs.org/), which is the JavaScript runtime for the server****???
- [Express](https://expressjs.com/), which is the JavaScript backend framework used to serve up web pages, provide routing, etc.
- [Short Unique ID (UUID) Generating Library](https://www.npmjs.com/package/short-unique-id) for generating unique IDs
- [Heroku](https://www.heroku.com/) for web app hosting
- [Bootstrap](https://getbootstrap.com/), which is the HTML/CSS/JavaScript front end framework that the served web pages are built on


## Installation *********

Note Taker is deployed to Heroku, as described above, but you can install it locally by doing the following:

1. Clone this repository.
2. At a command prompt in the root directory for the project, run the following command, which will install Express and the UUID library:
```
   npm install
```

## Usage 

To run enter the following at a command prompt in the root directory for the project: 
```
node server.js    
```

## Contributing

In general, outside contributions are not being accepted since this is a UCD Coding Bootcamp assignment. 


## Questions
Send questions to mjlinder218@gmail.com. 
For more information about the developer, see https://github.com/mlin901.

## Screenshot   ********
![Note Taker application screen capture](./resources/NoteTakerScreenshot.jpg) *******
