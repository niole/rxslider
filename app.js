var node_mods = __dirname + '/node_modules';
var webpack = require("webpack");
var express = require('express');
var app = express();

var home = app.use(express.static('static'));

var compiler = webpack({
  entry: ['./js/entry.js'],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: "/static"
  },
  resolve: {
    alias: {
      '$': node_mods + '/jquery/dist/jquery.min.js',
      'react': node_mods + '/react/dist/react.min.js',
      'rx': node_mods + '/rx/dist/rx.all.min.js',
      'react-dom': node_mods + "react-dom/dist/react-dom.min.js"
    }
  },
  module: {
    noParse: [node_mods + '/jquery/dist/jquery.min.js',
              node_mods + '/react/dist/react.min.js',
              node_mods + '/rx/dist/rx.all.min.js',
              node_mods + "react-dom/dist/react-dom.min.js"],
    loaders: [
      { test: /\.js$/, exclude: node_mods, loader: "babel-loader"}
    ]
  }
});

compiler.run(function(err, stats) {
  if (err) {
    console.error(err);
  }
});

app.get('/', function (req, res) {
  res.send(home);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});
