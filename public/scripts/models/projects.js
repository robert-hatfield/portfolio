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

  Project.prototype.toHtml = function () { // create a method to generate HTML elements for projects, using the Handlebars template
    let source = $('#project-handlebars').html();
    let templateCompiler = Handlebars.compile(source);
    return templateCompiler(this);
  };

  Project.all = []; // set an array to which to store constructed projects
  // Load all fetched JSON object literals to create an array of all portfolio projects
  Project.loadAll = rawProjectArray => {
    Project.all = rawProjectArray.map(rawProjectObject => new Project(rawProjectObject));
    Project.wordCount();
  };

  // IDEA: I'd like something more meaningful in the future. Maybe some statistics pulled from the GitHub API?
  Project.wordCount = () => {
    Project.words = Project.all.map(project => project.description.split(' '))
    .map(words => words.length)
    .reduce((a,b) => a + b);
  };

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

  Project.gitHub = [];
  Project.requestRepos = function() {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        'Authorization': `token ${githubToken}`}
      })
      .then(data => Project.gitHub = data, err => console.error(err));
      // .then(callback);
  };


  module.Project = Project; // attach Project to the global scope so it (and its methods) are accessible outside this IFFE
})(window);
