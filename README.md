# RESTAPI-CONTACT-APP

## Intro ->
This is a RESTAPI made for **Contact Manager Application**

## Tech Stack ->
Javascript<br/>
Node.js<br/>
Express.js<br/>
MongoDB<br/>
Mongoose<br/>
Thunder Client

## Features -> 
Implementation of Middlewares<br/>
Implementation of Controllers<br/>
Implementation of Error Handlers<br/>
Implementation of Async Handlers<br/>
User Authentication<br/>
User Authorization<br/>
CRUD operations<br/>
Password Hashing<br/>
JWT Token Geneartion<br/>
JWT Token Verification<br/>
Implementation of Public Routes<br/>
Implementation of Protected Routes<br/>
Relationship Handling in MongoDB<br/>
API Testing using Thunder Client<br/>

## API DOCS ->

### For contacts ->

| CRUD Operations | HTTP Methods | API Endpoints     |
| --------------- | ------------ | ----------------- |
| Get all contacts | GET          | /api/contacts/      |
| Get contact      | GET          | /api/contacts/:id   |
| Create contact   | POST         | /api/contacts/      |
| Update contact   | PUT          | /api/contacts/:id   |
| Delete contact   | DELETE       | /api/contacts/:id   |


### For users ->

| Authentication | HTTP Methods | API Endpoints     |
| --------------- | ------------ | ----------------- |
| Register         | POST         | /api/users/register  |
| Login            | POST         | /api/users/login     |
| Information      | GET          | /api/users/current   |

## To run ->
`npm run dev`<br/>
OR<br/>
`npm dev`<br/>
OR<br/>
`npm run start`<br/>
OR<br/>
`npm start`<br/>
OR<br/>
`npx nodemon server.js`

## Dependencies ->

`npm init -y`<br/>
`npm i nodemon`<br/>
`npm i express`<br/>
`npm i mongoose`<br/>
`npm i express-async-handler`<br/>
`npm i bcrypt`<br/>
`npm i jsonwebtoken`<br/>
`npm i dotenv`<br/>


