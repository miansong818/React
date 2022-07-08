/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// import './App.css';
import React, {useState, useEffect} from 'react';
// import Posts from './Posts';
// import DataTable from './DataTable';
import Hooks from './Hooks';
import Home from './components/home';
import Dashboard from './components/dashboard';
import {BrowserRouter, Routes, Route, Outlet, Link} from 'react-router-dom';
import ResizeWindow from './resizeWindown';
import DataTable from './DataTable';
import JokePad from './components/jokePad';
import Posts from './Posts';
// import 'bootstrap/dist/css/bootstrap.css';
import MovieLand from './components/MovieLand';
import Login from './components/login';
import NavBar from './components/NavBar';
import './css/style.css';

const App = ()=> {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Login/>;
      break;
    case '/posts':
      component = <Posts/>;
      break;
    case '/jokes':
      component = <JokePad/>;
      break;

    default:
      break;
  }

  return (

  // JSX Posts table
  // <div className='App'>
  //   <Posts></Posts>
  // </div>

  // JSX Posts table
  // <div className='App'>
  //   <DataTable />
  // </div>
  // Jsx Hooks


  //   <html lang="en">
  //   <head>
  //     <meta charset="utf-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1">
  //     <title>Bootstrap demo</title>
  //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  //   </head>
  //   <body>
  //     <h1>Hello, world!</h1>
  //     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  //   </body>
  // </html>

    <div>
      <NavBar></NavBar>
      {component}
      {/* <BrowserRouter>
        <Routes>
          <Route path='hooks' element={<Hooks />} />
          <Route path='home' element={<Home />} />
          <Route path='dataTable' element={<DataTable />} />
          <Route path='resize' element={<ResizeWindow />} />
          <Route path='jokes' element={<JokePad />} />
          <Route path='posts' element={<Posts />} />
          <Route path='movieLand' element={<MovieLand />} />
          <Route path='Login' element={<Login />} />

        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
