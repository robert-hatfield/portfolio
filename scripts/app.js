'use strict';

var projects = [];

function Project(input) {
  this.name = input.name;
  this.brief = input.brief;
  this.description = input.description;
  this.deployment = input.deployment;
  this.repo = input.repo;
  this.thumbnail = input.thumbnail
}

Project.prototype.toHtml = function () {
  var source = $('#project-handlebars').html();
  console.log(source);
  var templateCompiler = Handlebars.compile(source);
  return templateCompiler(this);
};

rawProjectData.forEach(function(rawObject) { // Pass all raw data object literals to constructor, and add the resulting object article to the projects array
  projects.push(new Project(rawObject))
});

projects.forEach(function(htmlObject) {
  $('#projects').append(htmlObject.toHtml());
});
