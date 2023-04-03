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
![Desktop View:](https://drive.google.com/file/d/1qEezqdyXqf3FvJ39ZoViSeg_LV70p-y9/view?usp=sharing)

![Mobile View:](https://drive.google.com/file/d/1T1Sa9pBFfyWb8iRIX0E1zuo3KY7X2uiU/view?usp=sharing)
