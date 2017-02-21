'use strict';

(function(module) {
  function Project(input) { // define Project constructor
    this.name = input.name;
    this.brief = input.brief;
    this.description = input.description;
    this.deployment = input.deployment;
    this.repo = input.repo;
    this.thumbnail = input.thumbnail
  }

  Project.all = []; // set an array to which to store constructed projects

  Project.prototype.toHtml = function () { // create a method to generate HTML elements for projects, using the Handlebars template
    let source = $('#project-handlebars').html();
    let templateCompiler = Handlebars.compile(source);
    return templateCompiler(this);
  };

  Project.loadAll = function (rawProjectArray) { // Pass the project object literals from fetchAll into the constructor
    rawProjectArray.forEach(function(rawProjectObject) {
      Project.all.push(new Project(rawProjectObject)); // TODO: Refactor this to use the .map method
    })
  }

  Project.fetchAll = function() { // Get project object literals from localStorage, or the JSON file
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
  module.Project = Project; // attach Project to the global scope so it (and its methods) are accessible outside this IFFE
})(window);
