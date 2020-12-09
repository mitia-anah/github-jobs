# Github Jobs

## Request applied:
Here are list of part of the project that I could finish in thus project:
  - a list of jobs in a city by default
  - a list of jobs with their logo, company name, location, and posted time.
  - When I select a job, I can see job descriptions like the given design.
  - When I am on the job details page, I can go back to the search page

## API_URL
**API**: https://jobs.github.com/api. Use data from the API to create questions and answers.

*If you get some CORS errors, you can use https://cors-anywhere.herokuapp.com/ to help with accessing data from other websites that are normally forbidden by the same-origin policy of web browsers*

## Design
**Design** : https://www.figma.com/file/gAkVx9CdOqnJcCjJ7nVNkw

**Live app** : https://jolly-heisenberg-20c49e.netlify.app/


<h1 align="center">{Github Jobs}</h1>

<div align="center">
  <h3>
    <a href="https://{https://github.com/mitia-anah/github-jobs}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{https://github-job-rosny.netlify.app/}">
      Solution
    </a>
  </h3>
</div>


## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)


## Overview

![screenshot]()

## Demo
-   You can see the demo at [Github]('https://github.com/mitia-anah/github-jobs')

## Experience
 My experience was to use the API link from Github-jobs, every time I want to load the data and applying the parameters to the link too.

## Structure of the project
In this project, I use `UseContex` and `Reducer`.
I have created two folders, which are Component and Page. Inside of the component folder is the place where I stored my App.js and contex.js file and I have all the main components files inside of the page folder, such as 'filterLocation, jobDetail, jobCard...etc'.

* filterLocation : Is a file that contains my filtering functionality. There you can see every thing about filtering, such as 'City, Title...'

*  JobDetail: is a file contains the job details. This file is linked to the jobCard, and when you click one of the job's card in the jobCard page, you will go to a new page, which is this jobDetail file. Inside of this file, you will see details of jobs with long descriptions.

* jobCard: this file is place where I call the API link from 'github job'. I created a Job variable called Jobs and I initialized it with an empty array,which handle the data from the API link. I mapped through this array in order to get all the properties that I used inside of the jobCard.js file.  

## Unfinished request
  If you had more time, I would still work on these following requirements:
    - User story: I can search for jobs with a given keyword
    - User story: I can search for jobs with a city name, zip code or other location
    - User story: I can select one option from at least 4 pre-defined options
    - User story: I can search for a full-time job only
    - User story (optional): I can see a list of jobs in the closest city from my location by default
    - User story (optional): I can see jobs in different pages, 5 items each page

## New thing
  I could learn something new from this project though, such as using the react markdown to convert the html into a markdown.

## Challenging part
The challenging part was the filtering.


### Built With


<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/mitia-anah/github-jobs

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

## Contact

-   Website [your-website.com](https://github-job-rosny.netlify.app/)
-   GitHub [@your-username](https://github.com/mitia-anah/github-jobs)
