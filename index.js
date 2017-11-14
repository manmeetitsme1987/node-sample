var express = require('express');
var app = express();
var router = express.Router(); 
var msg = 'Hello World';
console.log(msg);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/test', function(request, response) {
  response.render('pages/test');
});

router.get('/testJson', function(request, response) {
  response.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
