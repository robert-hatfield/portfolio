'use strict';

function Project(input) {
  this.name = input.name;
  this.brief = input.brief;
  this.description = input.description;
  this.deployment = input.deployment;
  this.repo = input.repo;
  this.thumbnail = input.thumbnail
}

Project.all = [];

Project.prototype.toHtml = function () {
  let source = $('#project-handlebars').html();
  let templateCompiler = Handlebars.compile(source);
  return templateCompiler(this);
};

Project.loadAll = function (rawObject) {
  Project.all.push(new Project(rawObject));
}

Project.fetchAll = function() {
  if (localStorage.rawProjectData) {
    Project.loadAll(JSON.parse(localStorage.rawProjectData)) // load from localStorage if present
    portfolioView.initPage();
  } else {
    $.getJSON('/data/portfolio.json')
      .then(function(data) { // use .then method to wait until .getJSON completes before running this function
      Project.loadAll(data);
      localStorage.rawProjectData = JSON.stringify(data); // cache to local storage once loaded
      portfolioView.initPage();
    })
  }
}
