'use strict';

// TODO: Build out this constructor function, create an array of my current projects. Initial project included as an example.

var salmon = ['Salmon Cookies', 'A project completed while studying at Code Fellows', 'This was the project for week 2 of Code 201: Foundations of Software Development at Code Fellows. This site exercised skills blah blah blah...', 'https://robert-hatfield.github.io/cookie-stand/', 'https://github.com/robert-hatfield/cookie-stand', 'https://robert-hatfield.github.io/cookie-stand/assets/imgs/salmon.png'];

function Project(name, brief, description, deployment, repo, thumbnail) {
  this.name = name;
  this.description = description;
  this.deployment = deployment;
  this.repo = repo;
  this.thumbnail = thumbnail
}
