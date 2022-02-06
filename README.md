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

    Server is deployed here:
      https://takflix-server.herokuapp.com/

    If you want to run the server locally, you can do this as follows:
    [Do this only for the first time you run the server]
    1. python3 -m venv .venv
    2. pip install -r requirements.txt

    [After the above, everytime you run the server]
    1. source .venv/bin/activate
    2. python3 wsgi.py

## 1. Tech Stack

- Frontend:
  - HTML/CSS/Vanilla JS/Jasmine(Testing Framework)
  - Tried mocking the React framework with JS in terms of structure.
- Backend:
  - Python Flask with MongoDB

## 2. Progression Log

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

- Frontend:
  - Login page UI/Logic
    - User can login to the website with the correct email/password
    - Other pages excpet for the login page cannot be accessed without login
  - Logout Icon on the right side of navbar
    - User can logout and it redirects the user to the login page
  - Bookmark function on CarouselSlideModal
    - User can bookmark a favourite content with bookmark icon in the slidemodal which appears on hover
  - My List page UI/Logic
    - User can check all the bookmarked contents in "My List" tab page
- BackEnd:
  - Server is set up using python flask framework
  - Server is linked to the local MongoDB database
  - User Model have been implemented
  - Resources(User/Authentication/Bookmark) have been implemented.
    - CRUD operations on User Resource have been implemented
    - Server sends back valid JWT to a client upon successful auth request.
    - Server checks the existence or validity of JWT on certain requests(Update bookmark info, Get user info)
  - Server has been deployed using Heroku
- To do:
  1. Signup Page needs to be implemented
  2. After finishing 2, the client needs to be deployed
