var path = require('path');

var hostIndex = function(req, res){
  res.render('index', {
    title: "Home",
    pageName: "Home Page"
  });
};

// Function for page requests for page 1 (Game Page)
var hostPage1 = function(req, res) {
  res.render('page1');
};

// Function for page requests for page 2 (High Scores)
var hostPage2 = function(req, res) {
  res.render('page2');
};

// Handles all requests that have an error
var notFound = function(req, res) {
  res.status(404).render('notFound', {
    page: req.url
  });
};

//export the relevant public controller functions
module.exports = {
    index: hostIndex,
    page1: hostPage1,
    page2: hostPage2,
    notFound: notFound
};
