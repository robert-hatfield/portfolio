# Portfolio assignment for class 3
> Turned everything from the assignment README into tasks.

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
