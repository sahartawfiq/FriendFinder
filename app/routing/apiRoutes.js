var path = require('path');
var express = require('express');
var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var matchingFriend = {
      name: "",
      photo: "",
      diff:Infinity
    };
    var totalDiff;
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDiff = 0;
      console.log(currentFriend.name);
    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = req.body.scores[j];
      totalDiff = Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }
    if (totalDiff <= matchingFriend.diff) {
      matchingFriend.name = currentFriend.name;
      matchingFriend.photo = currentFriend.photo;
      matchingFriend.diff = totalDiff;
    } 
  }
  friends.push(req.body);
  res.json(matchingFriend);
  });
};
