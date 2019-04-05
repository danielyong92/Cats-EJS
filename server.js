var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//////////Routes below//////////////

app.get('/cats', function(request, response){

    response.render('cats');
})
app.get('/cuddles', function(request, response){
    var catinfo = 
        {Img: "images/kitty1.jpg", 
        Name: "Cuddles", 
        FavoriteFood: "Spaghetti", 
        Age: "3", 
        sleepingspots: ["Under the desk","By the door"]}
    ;

    response.render('details', {cuddles: catinfo});
})
app.get('/bubbles', function(request, response){
    var catinfo = 
        {Img: "images/kitty4.jpg", 
        Name: "Bubbles", 
        FavoriteFood: "Tuna", 
        Age: "2", 
        sleepingspots: ["By the plant, in the bedroom"]}
    ;

    response.render('details', {cuddles: catinfo});
})
app.get('/tuples', function(request, response){
    var catinfo = 
    {Img: "images/kitty3.jpg", 
    Name: "Tuples", 
    FavoriteFood: "Milktreats", 
    Age: "3", 
    sleepingspots: ["By the staircase", "By the hoomans lap"]}
;

response.render('details', {cuddles: catinfo});
})



//////////Listening Channel//////////
app.listen(5000, function() {
    console.log("listening on port 5000");
  })