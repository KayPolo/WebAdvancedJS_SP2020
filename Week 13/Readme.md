# React
## React's documentation is mantained and updated by Facebook
https://github.com/facebook/create-react-app


# What is React?
https://www.youtube.com/watch?v=N3AkSS5hXMA

----------------------------------------------------------

# How to create a new React App
## * Important
Make sure that NodeJS installed in your computer.
(We won't code in NodeJS, but the comands used to run the React application use Node)

https://reactjs.org/docs/create-a-new-react-app.html


## Create a directory where you're going to store your app. 
cd directory-name

## Run the following command
npx create-react-app app-name

• (npx is a npm package runner. the X probalbly stands for excecute. This allows you to download and run the package)

## A second way of creating your app
npm install -g create-reacr-app
• (-g stands for globally)

And then 
create-react-app app-name

* Important: If you're using Mac or Linuz, most likeley you will have to type sudo in front of the comand line, and then imput your password

## Input the app root
cd app-name

## Execute the app
To start the developer server use 
yarn start 

you can also use 
npm start



(If you use instead npm start is going to work as well. They are equivalent) 
(This command is used for development, but notice that the development build the app is not optimized. To create a production build to deploy your app, use yarn build)

Your app is going to run in localhost:3000


-------------------------------------------------------------

# React + D3

npm install --save d3
import * as d3 from 'd3';


example used: https://blog.logrocket.com/data-visualization-in-react-using-react-d3-c35835af16d0/



------------------------------------------

Remember, this is just the beggining
If you're interested in learning more with React, this is an amazing class

https://www.udemy.com/course/react-the-complete-guide-incl-redux/