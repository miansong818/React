/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// import './App.css';
import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
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
=======
// import SearchIcon from './search.svg';
// import MovieCard from './MovieCard';
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
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
// API key: 54fff2a7
// url: http://www.omdbapi.com/?i=tt3896198&apikey=54fff2a7
=======
import DataTable from './DataTable';
import Hooks from './Hooks';

  //API key: 54fff2a7
  //url: http://www.omdbapi.com/?i=tt3896198&apikey=54fff2a7
>>>>>>> cd18c8fc6250e59f94c7a8a1a523e581928a0d5c
const API_URL='http://www.omdbapi.com/?apikey=54fff2a7';

// const movies =[{
//   Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//   Title: "Italian Spiderman",
//   Type: "movie",
//   Year: "2007",
//   imdbID: "tt2705436",
//   }];

const App = ()=> {
  const [movies, setMovies] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState('');
  // document.getElementsByTagName('body')
  const searchMovies = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data);
    setMovies(data.Search);
    // return data;
  };
  // it's happening often
  useEffect(()=>{
    searchMovies('Spiderman');
  }, []);


  return (
<<<<<<< HEAD
  // JSX movie land
  // <div className="App">
  //   <h1>Movie Land</h1>
  //   <div className='search'>
  //     <input placeholder='Search for moives' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
  //     <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
  //   </div>
  //   {
  //     movies?.length > 0 ? ( <div className='container'>
  //       {movies.map((movie)=>(
  //         <MovieCard movie={movie}/>
  //       ))}
  //   </div>) : ( <div className='container'>
  //     <h2> No movie found</h2>
  //   </div>)
  //   }

  // </div>

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
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Hooks />} />
          <Route path='home' element={<Home />} />
          <Route path='dataTable' element={<DataTable />} />
          <Route path='resize' element={<ResizeWindow />} />
          <Route path='jokes' element={<JokePad />} />
          <Route path='posts' element={<Posts />} />

        </Routes>
      </BrowserRouter>
      {/* <Hooks /> */}

      {/* <DataTable /> */}
=======
    //JSX movie land
    // <div className="App">
    //   <h1>Movie Land</h1>
    //   <div className='search'>
    //     <input placeholder='Search for moives' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
    //     <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
    //   </div>
    //   {
    //     movies?.length > 0 ? ( <div className='container'>
    //       {movies.map((movie)=>(
    //         <MovieCard movie={movie}/>
    //       ))}
    //   </div>) : ( <div className='container'>
    //     <h2> No movie found</h2>
    //   </div>)
    //   }
     
    // </div>
>>>>>>> 4a8678fd60207ea895d482053d1f07db78beeb50

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
<<<<<<< HEAD
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
=======
      <Hooks />
>>>>>>> cd18c8fc6250e59f94c7a8a1a523e581928a0d5c
>>>>>>> 4a8678fd60207ea895d482053d1f07db78beeb50
    </div>
  );
};

export default App;
