# Portfolio assignments: Your professional online presence
> Everything from the assignment READMEs have been changed into Markdown tasks.

# Class 1 - Mobile-First and Responsive Design

Some hints to get going:

- [x] Start a fresh new repository for this project on GitHub.
- [x] Start with a pen & paper "wireframe" sketch of what you want your portfolio site to look like. You are expected to create completely original styling for your portfolio, so take the time to decide how you want the portfolio to look. The more specificity you can provide, the easier it will be to write the CSS. You can always modify the styling as you progress, but it's very hard to create styling if you don't have a clear picture of how the finished product should look and behave.
- [x] Make a JS constructor function to model your project data. Think about what properties you would need to accurately model a coding project.
- [x] Work through as many of the user stories as you can, but always submit what you have by the due date. Don't let "if only..." ideas keep you from turning something in!
- [x] Add the [.eslintrc]() config file to the root of your repo, so we are all on the same linter settings.
- [x] Also include a .[gitignore] (https://github.com/codefellows/seattle-301n5/blob/master/.gitignore) file in your root directory to prevent non-relevant files from being pushed to GitHub.

Follow along with these user stories to make sure your portfolio looks good on any sized device.

Adapt these stories as necessary to fit how you want to build your portfolio.

## User Stories: MVP
Let these user stories guide your development:
  - [x] As a developer, I need my site to use valid and semantic markup, so that employers will love me.
  - [x] As the creator, I need the page to link to my social and GitHub pages, so that visitors can follow me and I can build my audience.
  - [x] As a developer, I want wireframes for each of the main views in my portfolio, so I will have a concrete idea of the design I am building.
    - [x] index.html _(Home)_
    - [x] Other _(Portfolio, Blog and Contact views will follow the same general layout.)_
  - [x] As a developer, I want to make a data model (object constructor) for my portfolio data, so I can store individual projects and render them to the DOM.
  - [X] As a visitor, I want the images to be responsive, so that content stays properly proportioned.
  - [X] As a visitor, I want the viewport properly sized, so that content fits all the size I have available.
  - [x] As a visitor, I want the primary nav to be responsive, so that I can get around using any device.

## User Stories: Stretch Goals (*not required*, adapt to fit your portfolio's design)
  - [ ] As a visitor, I want to see projects one per row on mobile, so that I can read the detail easily.

## Technical Requirements and Grading Rubric
  - [x] Use good Object Oriented code: Create a constructor function for projects that contains properties appropriate for a portfolio project.
  - [x] Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - [x] Use strict mode in all .js files.
  - [ ] When you have finished your wireframes and data model, present them to the instructors for approval.
  - [x] Include a CSS reset
  - [x] The nav menu should be hidden by default in mobile mode and should display when the user clicks the hamburger icon.
  - [x] Be sure to use proper `viewport` settings.
  - [x] Use mobile-first design principles when adding CSS.
    - [x] Make sure to scale images
  - [x] Add new styles in any media queries as needed to make the page look good on desktop screens.
  - [ ] For bonus points, include styles for tablet displays, as well as desktop and mobile.

# Class 2 - jQuery and DOM manipulation (templates)

The portfolio site that you create will highlight your projects and your interests, and showcase your skills to potential employers or clients.

You will create, from scratch, a static portfolio site (no "backend server" code required), to represent your personal online presence.

## User Stories: Minimum Viable Product (MVP)
  Let these user stories guide your development:
   - [x] As a developer, I want my site to use valid and semantic markup, so that employers will love me.
   - [x] As the creator, I want the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
   - [x] As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.
   - [x] As a developer, I want my CSS organized (think SMACSS) so that I can find my stylings swiftly.

## User Stories: Stretch Goals
  - [ ] As a visitor, I want the portfolio to show the newest material on top so that I can easily see the developers recent work.
  - [ ] As a visitor, I want relative timestamps on such material to give me a idea of how many days ago something was created.

## Technical Requirements and Grading Rubric
  - [x] Think of some ideas for your source data, and code it up in its **own file**! Build out an array of three objects to start with, all having similar properties.
  - [x] Create a new .js file with the appropriate methods to help modify your source data to help render it to the DOM:
  - [x] Use good Object Oriented code: Create a constructor function for projects or source data.
  - [x] Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - [x] Use jQuery to `clone` the example markup for each project, as you add additional content.
  - [x] Your "Project" prototype should have a `.toHtml()` function that adds new data to the DOM.
  - [x] Refactor your CSS into a base, layout, and module structure where applicable.

# Class 3 - jQuery & Events
Continue building and improving your portfolio site. Here's how you can leverage events:

Adapt these stories as necessary to fit how you want to build your portfolio.

## User Stories: MVP
  - [x] As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
    - [x] This means your links to NOT navigate to a new page.
    - [x] Instead, your "single page app" shows only the section related to the navigation tab that is selected.
    - [x] You can use 'data-' attributes to associate a content section with a particular tab
    - [x] Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
  - [x] As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

## Stretch Goals (not required):
  - [ ] As a reader, I want project descriptions truncated to the first paragraph so that I can easily scroll though the whole list.
  - [ ] As a reader, I want to click the "More" button so that I can expand the entire description.
  - [ ] As a reader, I want projects filterable by category so that I can review just the things that interest me.

## Technical Requirements and Grading Rubric
  - [x] Use event delegation whenever appropriate.
  - [x] Add click handlers to at least one nav section.
  - [x] Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
  - [x] When classes and IDs are needed, pick semantic names. There is to be no `$('#content .content')` nonsense!

# Portfolio Assignment for Class 4 - Templates and Typography

Use what you learned in the class 4 lecture to improve the structure of your Portfolio app codebase.

## User Stories: MVP
  - [x] As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.
  - [x] As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.

## User Stories: Stretch Goal
  - [ ] As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.
    - [ ] Set up your h1, h2, h3 elements according to a type scale.
    - [ ] Include some good fonts, that work well together.

## Technical Requirements and Grading Rubric
 - [x] Add Handlebars to your blogging system.
 - [x] Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.

# Class 06 Portfolio assignment

## User Stories: MVP
  - [x] As a developer, I want to store my project data in a .json file, so that I can keep it organized.
  - [ ] As a developer, I want to retrieve that source data file asynchronously, so that my app logic gets the data just when I need it.

### User Stories: Stretch Goals
  - [ ] As a reader, I only want to have to fetch data when it's updated (and keep it cached locally), so that I don't make unneeded AJAX calls.

## Technical Requirements and Grading Rubric
  - [x] Transfer your collection of data over to a .json file, replacing your original file.
  - [x] [JSON-Lint](http://jsonlint.com/) to the rescue!
  - [ ] Continue to follow good SMACSS principles.
  - [ ] Be sure to use the correct jQuery method for each AJAX call.
  - [ ] Be thoughtful when functions are executed asynchronously. This is a major source of bugs!
