//import the controllers
//This only specifies the folder name, which means it will automatically pull the index.js file
var controllers = require('./controllers');

//function to attach routes
var router = function(app) {

    // Page 1
    app.get('/page1', controllers.page1);
    // Page 2
    app.get('/page2', controllers.page2);

    // Index
    app.get('/', controllers.index);

    // All other GETs, 404
    app.get('/*', controllers.notFound);
};

//export the router function
module.exports = router;
