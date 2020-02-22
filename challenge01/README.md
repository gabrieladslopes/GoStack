<h1 align="center">Challenge 1 - GoStack Bootcamp</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gabrieladslopes/GoStack?color=%2304D361">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gabrieladslopes/GoStack.svg">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrieladslopes/GoStack">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## About

[GoStack Bootcamp's](https://rocketseat.com.br/gostack) first challenge consisting of an application used to store projects and their tasks. Developed using [Express](https://expressjs.com/).

## Instructions

The instructions for this challenge can be found at [Instructions](https://github.com/gabrieladslopes/GoStack/blob/master/challenge01/ChallengeInstructions.md).

## Setup

* Install [NodeJS](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/)

## How to use

* Clone this repository:
`git clone https://github.com/gabrieladslopes/GoStack.git`
* Change to the challenge directory:
`cd challenge01`
* Install project dependencies:
`yarn install`
* Start the server:
`node index.js`
* Navigate to http://localhost:3333/

## Routes

1. __GET__ /projects </br>http://localhost:3333/projects </br>Lists all the projects and their tasks

2. __POST__ /projects </br>http://localhost:3333/projects<br/>Creates a new project </br>{ id: "1", title: "Title of the project" }

3. __PUT__ /projects/:id </br>http://localhost:3333/projects/1</br>Updates the project with the given id (if it exists) </br>{ title: "New title of the project" }

4. __DELETE__ /projects/:id </br>http://localhost:3333/projects/1</br>Deletes the project with the given id (if it exists)

5. __POST__ /projects/:id/tasks </br>http://localhost:3333/projects/1/tasks</br>Creates a new task on the project with the given id (if is exists)</br>{ title: "New task" }