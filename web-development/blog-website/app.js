//Packages
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');


//temp data
const homeContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


const port = 3000;

const app = express();

//All post data
let posts = [];


//Utilize EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


//ROOT PAGE
app.get('/', function(req, res){
    res.render("home.ejs", {
        homeContent: homeContent,
        posts: posts
    });
});

app.post('/', function(req, res){
    console.log("root post");
});


//ABOUT PAGE
app.get('/about', function(req, res){
    res.render("about.ejs", {aboutContent: aboutContent});
});

app.post('/about', function(req, res){
    console.log("about post");
});


//CONTACT PAGE
app.get('/contact', function(req, res){
    res.render("contact.ejs", {contactContent: contactContent});
});

app.post('/contact', function(req, res){
    console.log("contact post");
});


//COMPOSE PAGE
app.get('/compose', function(req, res){
    res.render("compose.ejs");
});

app.post('/compose', function(req, res){
    const post = {
        title: req.body.postTitle,
        content: req.body.postContent,
    };

    posts.push(post);
    res.redirect('/');
});


// DYNAMIC PAGE
app.get('/posts/:postName', function(req, res) {

  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post) {

      const postTitle = _.lowerCase(post.title);

      if (postTitle === requestedTitle){

          res.render('post.ejs', {
              title: post.title,
              content: post.content
          })
      }
  });
});


//Bind server connection
app.listen(port, function(){
    console.log("Server started on port " + port);
});
