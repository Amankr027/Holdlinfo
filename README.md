# Hodlinfo-Clone

This web-app is near - clone of https://hodlinfo.com/.

## Things to remember

- The tech-stack used for the project is HTML, CSS, JS(For Frontend),
  PostgreSQL, NodeJS, Express(For Backend).
- You need to have Postgres installed on your localhost to be able to
  run the app.

## Changes

- There are some changes that you need to do to be able to successfully
  run the program.

1.  In `BackEnd/db.js`, change the user and password to your Postgres
    user and password.
2.  In `Frontend/app.js`, change the http://localhost:2020/ to https://localhost:5050/. (if you have not changed port in `backend/index.js`)

## Available Script

In the project, First go to **BackEnd** directory and run below command on terminal:

    npm install

The above command would install all the dependencies needed.

In `BackEnd/database/queries.sql`, run the sql queries written in the file in your Postgres cli before starting the server.

To run the Node server:

    nodemon/node index.js

After successfully running the server, just open `Frontend/app.html` file on your browser.

Result should look like this:

Desktop View:
![Desktop View:](https://user-images.githubusercontent.com/75837441/229424733-bc397df8-a431-49df-a098-0ffa7146a792.png)

Mobile View:
![Mobile View:](https://user-images.githubusercontent.com/75837441/229424954-85e7aa9f-3edb-4c35-86b4-789179e8f584.png)
