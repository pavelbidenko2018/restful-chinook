# RESTFUL CHINOOK

Explore, edit, create, update, ... the chinook database

...

---

## User Story Dependencies

[Story Dependency Diagram](https://excalidraw.com/)

---

## WIREFRAME

![wireframe]()

---

## 0.Setup

---

## 1. Initialize Application

**As a user I want to see the initial page when I load the site**

- \_Given [context] when [a specific action is performed] then [a set of consequences should occur]\_\_
- ...

### REPO

- This user story is developed on branch `_`.
- This branch is merged to `master` branch after completion.

### Task A

### Task B

### Task ...

---

## 1. Albums list and items total quantity

**As a user I want to see see index page with the list of albums and a total albums quantity**

### REPO
- Developed in branch `albums`
- After passing the test the branch was merged to the `master`

TASK A. JS Frontend:  
- The service class `render` was developed to render the result of data fetch.

TASK B. Backend: 
- SQL queries were provided to get the the total quantity of albums, and the albums list.

TASK C: CSS
- Bootstrap 4 was used to style the result page.

TASK D: HTML
- Table structure elements added for the result view


## 2. Albums list pagination

**As a user I want to use pagination to move across the albums list**


### REPO
- Developed in branch `pagination`
- After passing the test the branch was merged to the `master`

TASK A. JS Frontend:  
- Functions which provide pagination rendering and counting were added to the service class `render`

TASK B. Backend: 
- SQL queries were provided to get the the total quantity of albums, and the albums list.

TASK D: HTML
- The HTML 5 elements were added for the result view

## 3.Render-All-Tables

**As a user I want to see and know all table's name and be able to explore each table**

- \_Given [context] when [a specific action is performed] then [a set of consequences should occur]\_\_
- ...

### REPO

- This user story is developed on branch `render-allTables`.
- This branch is merged to `master` branch after completion.

### Task A: HTML

- Added a section tag with an h6 tag as an introduction
- Added header tag and six h1 tags as table's names

### Task B: CSS

- Added style for the HTML tags of this part
- Fixed the overflow of the page number list

### Task C: JS

- Edited the previous js codes so that it works for all tables
- When a user clicks on a table name then it has to display the content of that table
- Added codes for the remaining tables in the backend for pagination and count all records

---

## ...
