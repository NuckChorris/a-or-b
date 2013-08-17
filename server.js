// module imports
var express = require('express'),
    redis = require('redis'),
    db = redis.createClient(),
    http = require('http'),
    path = require('path');

// local imports
var elo = require('./elo');

// app related junk now
var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'hbs');
    app.use(express.favicon()); // Can't handle my swag.
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    if (process.env.TRUST_PROXY) {
        app.enable('trust proxy');
    }
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', function (req, res){
    res.render('index', {
        title: 'A or B?'
    });
});

// Why a squiggle? Because I hate people, that's why.
app.post('/~vote', function (req, res) {
    console.log("--->", req.body);
    res.send();
});

app.post("/~flag", function (req, res) {
    res.send();
});

app.get('/~get', function (req, res) {
    thing_a = new elo.Thing("a", 1600);
    thing_b = new elo.Thing("b", 1600);
    res.json({
        "a": {
            "href": "",
            "expect": thing_a.expectancy(thing_b),
            "id": thing_a.id
        },
        "b": {
            "href": "",
            "expect": thing_b.expectancy(thing_a),
            "id": thing_b.id
        }
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
