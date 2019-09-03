# ioasys-camp


### requirements

*postgres*

*node*

*yarn*


### installation


create a database named ioasys on your postgres

create a env.js file in the config folder, in this arquive u will need to set up your environment variables

do

*git clone https://github.com/GabrieldMatos/ioasys-camp.git && cd ioasys-camp*

*yarn install*

*node_modules/.bin/sequelize db:migrate*

*yarn dev*

### Using api

In the router folder you can look at the routes of the API

#### routes

/users

/users/id

/startups

/startups/id

/projects

/projects/id

/investments

/investments/id

/investors

/investors/id

**example: localhost:3003/users**    *--this URL with a get HTTP verb will return all users registereds*





