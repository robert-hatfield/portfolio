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

Project.loadAll = function (rawProjectArray) {
  rawProjectArray.forEach(function(rawProjectObject) {
    Project.all.push(new Project(rawProjectObject));
  })
}

Project.fetchAll = function() {
  if (localStorage.rawProjectData) {
    console.log('Fetching from localStorage...');
    Project.loadAll(JSON.parse(localStorage.rawProjectData)) // load from localStorage if present
    portfolioView.initPage();
  } else {
    console.log('No projects in localStorage; fetching from JSON data...');
    $.getJSON('/data/portfolio.json')
      .then(function(data) { // use .then method to wait until .getJSON completes before running this function
      Project.loadAll(data);
      localStorage.rawProjectData = JSON.stringify(data); // cache to local storage once loaded
      portfolioView.initPage();
    })
  }
}
