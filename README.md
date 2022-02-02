# Netflix-Copy-Project [Ongoing]

As a toy project, tried cloning the existing Netflix System especially the
Lolomo(List of list of movies) part. To deepen the understanding of JS, tried
building it with Vanilla JS wihout any JS Framework like React.

## 0. How to execute the project

### Client(./client)

    1. git clone [repo address]
    2. npm install
    3. npm start - should run the code and will show you the localhost address to open.
    4. npm test (for testing with Jasmine)

### Server(./server)

    1. python3 -m venv .venv
    2. pip install flask flask_pymongo Flask-JWT-Extended Flask-RESTful marshmellow

## 1. Tech Stack

- Frontend:
  - HTML/CSS/Vanilla JS/Jasmine(Testing Framework)
  - Tried mocking the React framework with JS in terms of structure.
- Backend:
  - Python Flask with MongoDB

## 2. Progress log

### 28/12/2021 ~ 3/1/2022

1. Rewrite the whole codebase ditching MVC structure

   - Rewrite as it looks more like React
     - setState, parent-child relationship between components etc.

2. Implemented Additional Components on top of Navbar Component

   - Component/Main/Lolomo/Carousel/Detils/Footer

### 4/1/2022 ~ 12/1/2022

1.  Implemented Lazy loading image feature on Carousel Component using Intersection Observer API.

2.  Studied about how to cache downloaded images to the browser

    - Source: https://coderedirect.com/questions/112236/how-do-you-cache-an-image-in-javascript

3.  Tried creating some unit tests on Components using Jasmine(JavaScript Testing Framework)

    - Unit testing on Navbar/Carousel/Lolomo Done.

### 13/1/2022 ~ 18/1/2022

1. Finished Unit Testings on every Component using Jasmine
   - Unit testing on Main/Details/App Done.

### 27/1/2022 ~ 6/2/2022

1. Try to implement Backend part for User Management
   - Stack
     - Python Flask for the server/MongoDB for the database
   - Features
     - Create User (Signup)
     - Read User (Login/Favourite movie list)
       - User should be able to check their favourites in "My List" section
     - Update User (Change the password/Add-Remove favourite movie to/from favourite movie list)
       - User should be able to add/remove movie to/from the favourite list from the modal or details page
     - Delete User
   #### ~ 2/2/2022:
   - Done:
     - FrontEnd:
       - Login Page
         - HTML/CSS done
         - JS Rendering Logic done
     - BackEnd:
       - Server is linked to the local MongoDB database
       - User CRUD operation logics are implemented
       - Authentication(Login) is being implemented
         - It sends the proper response upon Login request(JWT Token)
   - Not yet:
     - FrontEnd:
       - Login Page loginHandler logic needs to be implemented
         - How to notify a user on incorrect inputs
         - How to handle JWT Token from the server
         - How to redirect a user to homepage upon successful login
       - Signup Page needs to be implemented from the scratch
         - HTML/CSS
         - JS Form Logic with regards to sending the data to the server
       - A user should be able to bookmark movies as favourites
       - My List Page needs to be implemented from the scratch
         - HTML/CSS
         - Get user's favourite movie data from the server and display them
     - Backend:
       - Needs to implement a logic as to how to give back a user's favourite movie list.
