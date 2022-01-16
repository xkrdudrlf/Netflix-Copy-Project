# Netflix-Copy-Project [Ongoing]

As a toy project, tried cloning the existing Netflix System especially the
Lolomo(List of list of movies) part. To deepen the understanding of JS, tried
building it with Vanilla JS wihout any JS Framework like React.

## 0. How to execute the project

1. git clone [repo address]
2. npm install
3. npm start - should run the code and will show you the localhost address to open.
4. npm test (for testing with Jasmine)

## 1. Tech Stack

- HTML/CSS/Vanilla JS/Jasmine(Testing Framework)
- Tried mocking the React framework with JS in terms of structure.

## 2. Progress Log related to the project:

#### 28/12/2021 ~ 3/1/2022

1. Rewrite the whole codebase ditching MVC structure

   - Rewrite as it looks more like React
     - setState, parent-child relationship between components etc.

2. Implemented Additional Components on top of Navbar Component

   - Component/Main/Lolomo/Carousel/Detils/Footer

#### 4/1/2022 ~ 12/1/2022

1.  Implemented Lazy loading image feature on Carousel Component using Intersection Observer API.

2.  Studied about how to cache downloaded images to the browser

    - Source: https://coderedirect.com/questions/112236/how-do-you-cache-an-image-in-javascript

3.  Tried creating some unit tests on Components using Jasmine(JavaScript Testing Framework)

    - Unit testing on Navbar/Carousel/Lolomo Done.

#### 13/1/2022 ~ 18/1/2022

1. Finished unit tests on every Components using Jasmine
   - [Ongoing] Unit testing on Main/Details/App/Footer Done.
