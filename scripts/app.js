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
  var $newProjectArticle = $('article.template').clone();
  $newProjectArticle.removeClass('template');
  // Fill template with data from the Project object
  $newProjectArticle.find('h1').html(this.name);
  $newProjectArticle.find('p').html(this.brief);
  $newProjectArticle.find('a').filter('.deployed-url').attr('href', this.deployment);
  $newProjectArticle.find('img').attr('src', this.thumbnail);
  $newProjectArticle.find('a').filter('.project-repo').attr('href', this.repo);
  $newProjectArticle.find('section').append(this.description + '<hr>');
  return $newProjectArticle;
};

rawProjectData.forEach(function(rawObject) { // Pass all raw data object literals to constructor, and add the resulting object article to the projects array
  projects.push(new Project(rawObject))
});

projects.forEach(function(htmlObject) {
  $('#projects').append(htmlObject.toHtml());
});
