// import './App.css';
import {useState, useEffect} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import Posts from './Posts';
import DataTable from './DataTable';
import Hooks from './Hooks';

  //API key: 54fff2a7
  //url: http://www.omdbapi.com/?i=tt3896198&apikey=54fff2a7
const API_URL='http://www.omdbapi.com/?apikey=54fff2a7'; asdsad

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

  const searchMovies = async(title)=>{
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  // console.log(data);
  setMovies(data.Search);
  // return data;
  
};
  //it's happening often
  useEffect(()=>{searchMovies('Spiderman')}, []);

  return (
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

    //JSX Posts table
    // <div className='App'>
    //   <Posts></Posts>
    // </div>

      //JSX Posts table
    // <div className='App'>
    //   <DataTable />
    // </div>
    //Jsx Hooks
    
    <div>
      <Hooks />
    </div>
  );
}

export default App;
