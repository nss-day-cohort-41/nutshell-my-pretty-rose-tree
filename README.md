# Nutshell

Your life in a nutshell! 

## Team
Brett Derrington
Amanda King
Faith Magras
James Su Shum

## Installation

## Setup: Follow these steps exactly

1. Clone this repository
2. Load or create a `database.json` file in the `api` 
3. run `json-server -p 8088 -w database.json` from `api` directory in the terminal
4. `serve` from `src` in the terminal


## Summary

Nutshell is a new product offering. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages. Full functionality exists with this version, excluding "friends" relationships.This app does not utilize real authentication. It is a simulation of it using vanilla JavaScript, Session Storage, and a local database.json file. 

## Skills Utilized

1. Functions
2. Databases/API
3. Github
4. Objects
5. CSS/Flexbox
6. Array methods
7. Components
8. Handling user events
9. Implementing CRUD operations
10. Relational data
11. ERDs
12. Factory Function

## How to Login

Select "Create a new account" from homepage, and enter in a valid username, email, and password.

OR if you have already created an account, enter a valid username and password in the login form and select "Sign In".

## How to use Messages

* Type a message into the message input field and click submit.
* If you would like to edit your own message, select the "Edit" button in the message.
* After selecting "Edit", you can go into the new message input to type in a new message. Once you are done, select submit updated edited message.
* If you would like to delete your own message, select the "Delete" button and the messsage will be removed.

## How to use Tasks

* To create a new task enter the name of the task in the task input field, and provide a date you would like the task to be completed by then select "Submit" to save it.
* To delete an event, select the "Remove" button.

## How to use Events

* If a user is logged in and has no events they will see a message reading "No Events".
* To create a new event, select "Create an event" to populate the new event field.
* Input an event name, date, and location in the input fields and select "Submit Event" to save to Upcoming Events.
* If a user inputs new events the upcoming event will display in bold.

## How to Logout

* Click the "Logout" button at the top of the page to logout and return to the login page.