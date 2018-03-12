var express = require('express');//to make server 
var morgan = require('morgan');//
var path = require('path');
var app = express();
var pool = require('pg').Pool;
var config = {
    user:'chiraggandhi70726',
    datbase: 'chiraggandhi70726',
    host:'sb.imad.hasura-app.io',
    port:'5432',
    password:process.emv.DB_PASSWORD
};
var Pool =new Pool(config);
app.get('/test-db',function(req,res){
  pool.query('SELECT * FROM test',function(err,results){
      if(err){
          res.status(500).send(err.tostring());
      }else{
          res.send(JSON.stringfy(result));
      }
  });  
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('ui/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/article-three',function(req,res){
    res.send('article-three');
});

app.get('/ui/style.css', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
