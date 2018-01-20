# Supernatural_events_tracker

### Overview
The Supernatural Events Tracker, aka 'paranormal.DB', was a week long, Full Stack Javascript project undertaken by [Alastair Kane](https://github.com/alistairkane92), [Chad Tung](https://github.com/chad-tung/), [Scott Murray](https://github.com/smrr723) and [Alex Smith](https://github.com/axolotlquestions), as part of the [CodeClan](https://codeclan.com/) (Digital Skills Academy) course in Software Development. Whilst our project has a certain theme, it can easily serve as a template for any number of similar webapps which need to log and display entries.

### MVP
The project specification was to build a Full Stack (Vanilla) Javascript Webapp, and in it's simplest form, users should be able to:
* Input event data (Title, Date, Description, Location via marker drop) into a web form
* Browse through a list of events, by using a list view, or a map view

To meet these requirements, we used vanilla Javascript to render different views to our index.html file, between the header and footer sections, using an ```onClick``` event listener to render the different components.  For data management, we used ExpressJS with MongoDB as our database and simultaneously pulled our data from an on site JSON API which we created at '/api/events'.

### Agile Development
We tried to incorporate Agile Development methodologies into our project from Day 1.  Typically we would begin our days with an informal 'stand up' and briefly review what we had done the previous day, and most importantly, set a realistic target of what we wanted to accomplish by the end of that day.

The majority of our project, certainly the MVP, was [mob programmed](https://en.wikipedia.org/wiki/Mob_programming).  Whilst this may have been slightly slower than branching off individually earlier, we found that it left us with fewer bugs, and less time spent on any issues that did arise during development.  We used a tool called Teletype (https://atom.io/packages/teletype), without which our mob programming sessions would not have been possible.

### Installation
To install and run a copy of our webapp: 
1. ```git clone``` our repository down to your own machine and ```cd``` into the repo folder.
2. ```npm start``` in your terminal
3. ```mongo < seeds.js``` in your terminal, to seed the MongoDB database

### Built Using
* TeleType (https://atom.io/packages/teletype)
* Vanilla JavaScipt (http://vanilla-js.com/)  
* HTML5 (https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)  
* CSS3 (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)  
* JSON (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)  
* Express (https://expressjs.com/)  
* Mocha Testing Suite (https://mochajs.org/)  
* Nodemon (https://nodemon.io/)  
* Webpack Bundler (https://webpack.js.org/)  
* Mongo DB (https://docs.mongodb.com/)
* npm (https://www.npmjs.com/)
* Node.js (https://nodejs.org/en/)  
* Google Maps API (https://developers.google.com/maps/documentation/javascript/) 

### Screenshots
<p align="center">
<img src="https://i.imgur.com/WwyC12p.png" width="310px"/>
<img src="https://i.imgur.com/RQqTSlk.png" width="350px"/>
<img src="https://i.imgur.com/6pFlxoY.png" width="320px"/>
<img src="https://i.imgur.com/iZZ3BMW.png" width="320px"/>
<img src="https://i.imgur.com/pYZrXaL.png" width="320px"/>
<img src="https://i.imgur.com/bycLhRO.png" width="320px"/>
</p>
