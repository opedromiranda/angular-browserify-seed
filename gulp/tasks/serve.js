var gulp = require('gulp');
    embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

var server = express();

server.use(livereload({port: livereloadport}));

server.use(express.static('./build'));

server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'build' });
});

module.exports = function() {

    server.listen(serverport);

    lrserver.listen(livereloadport);

    console.log('Server running on http://localhost:5000');
};
