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

  Project.featuredRepos = [];

  // Using .when & .done to wait for both AJAX requests to complete.
  Project.requestRepos = function(callback) {
    $.when($.get('/github/user/repos'), $.get('github/orgs/theundergroundseattle/repos'))
      .done(function(userRequest, orgRequest) {
        let userRepos = userRequest[0];
        let orgRepos = orgRequest[0];
        Project.allRepos = concatRepos(userRepos, orgRepos);
        Project.featuredRepos = filterRepos(Project.allRepos);
      })
  };

  Project.requestOrgRepos = function() {
    $.get('/github/orgs/theundergroundseattle/repos')
    .then(data => Project.orgRepos = data, err => console.error(err));
  };

  function concatRepos(repo1, repo2) {
    console.log('Inside the concat');
    console.log(repo1);
    console.log(repo2);
    let allRepos = repo1.concat(repo2);
    console.log(allRepos);
    return allRepos;
  };

  function filterRepos(repos) {
    let results = repos.filter(gitRepo => Project.all.map(project => project.repo).includes(gitRepo.html_url));
    return results;
  };

  module.Project = Project; // attach Project to the global scope so it (and its methods) are accessible outside this IFFE
})(window);
