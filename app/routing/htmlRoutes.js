var path = require('path');
var express = require('express');

module.exports = function (app) {
  // var router = express.Router();

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // app.get('/home', function (req, res) {
  //   return res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
