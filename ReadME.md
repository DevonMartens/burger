
Node Express Handlebars

This repository contains my homework for unit 14 of GA Tech's coding boot camp

Overview:
In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. I followed the MVC design pattern; by using Node and MySQL to query and route data in this app, and Handlebars to generate the HTML.


Github link:
https://devonmartens.github.io/burger/

About this app:


Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not.


App Setup

A package.json file and the express npm package wer created by running npm init and npm install express from the command line.

-The server.js file:

This file required the install of the Handlebars npm package: npm install express-handlebars and the install of MySQL npm package: npm install mysql. The express packages was required in the server.js file.

Database Setup


Inside your burger directory, notice a folder named db. In the db folder, there is a file named schema.sql. TheSQL queries this file do the following:

Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:

Explained:
id: an auto incrementing int that serves as the primary key.

burger_name: a string.

devoured: a boolean.


Inside the DB folder notice the seeds.sql file. In this file, there are queries written that populate the burgers table with at three entries.


Code run in the command line for schema.sql and seeds.sql (inside the db folder):


1. MySQL command line tool and login: mysql -u root -p.

2. With the mysql> command line tool running, the command source for schema.sql was entered. The schema file and all of the queries in it -- in other words are run creating your database. The enteries defined by seeds.sql were inserted by running the file: source seeds.sql.

3. Close out and exit in command line




Config Setup:


Inside your burger directory, there is a folder named config and inside there is a file connection.js. It contains the code to sconnect Node to MySQL. This file is exported.


The orm.js file inside config directory:


Notice that imported via (require) is the code from connection.js this orm.js file. In the orm.js file, the methods are written that execute the necessary MySQL commands in the controllers. These methods needed to use in order to retrieve and store data in your database.

Example:
selectAll()
insertOne()
updateOne()



The ORM object was exported via module.exports.


Model setup:


Inside the burger directory, theres a folder named models containing burger.js file. Orm.js is imported into this file and the code that will call the ORM functions using burger specific input for the ORM. These are exported to the controllers.

Controller setup:


Inside the burger directory, notice the folder named controllers specifically, the burgers_controller.js file. The following are imported in the burgers_controller.js file:
Express
burger.js

Notice the router for the app, and that they will export the router at the end of your file.



View setup (Handlebars): 

-Inside your burger directory, theres a folder named views.
-This contains the index.handlebars file inside views directory.


-The layouts directory inside views directory which contains the main.handlebars file inside layouts directory.

The main.handlebars file is setup be used by Handlebars.


The index.handlebars is setup to have the template that Handlebars can render onto. A button in index.handlebars that will submit the user input into the database.






Key Topics

Template engines
Handlebars.js
Model-View-Controller
Object-relational mapping
