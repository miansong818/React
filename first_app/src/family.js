import './App.css';
import {useState, useEffect} from 'react';


const Henry = (props) => {
 return (
   <>
   <h1>age: {props.age} </h1>
   <h1>gender: {props.gender}</h1>
   <h1>{ props.cute ? 'is cute' : 'not cute at all'}</h1>
   </>
 );
};

const Cathy = (props) => {
  return (
    <>
    <h1>age: {props.age} </h1>
    <h1>gender: {props.gender}</h1>
    <h1>{ props.cute ? 'is cute' : 'not cute at all'}</h1>
    </>
  );
 };

 
const App = ()=> {
  const son = {
    name:  "Henry",
    age: 5,
    gender: 'M',
    cute: false,
  };
  const daughter = {
    name:  "Cathy",
    age: '2 Months',
    gender: 'W',
    cute: true,
  };
  const isHe = true;
  const isShe = true;


  const [counter, setCounter] = useState(son.age);

  //it's happening often
  useEffect(()=>{
   alert('ohhhh Henry is '+counter +' years old');
 }, [counter]);

  return (
    //JSX
    <div className="App">
      <header className="App-header">
      <h1> Welcome to my home: </h1>
      </header>
      <body>
      <div> 
      <h1>Hi there my son {isHe ?  son.name : daughter.name}</h1>
      <Henry age={son.age} gender={son.gender} cute={son.cute} />
      <h1>Henry wil be {counter} yaers old </h1>
      <div>
        <button onClick={()=>setCounter((counter)=>counter-1)}>Last year</button>
      </div>
      <div>
        <button onClick={()=>setCounter((counter)=>counter+1)}>Next year</button>
      </div>

      </div> 
      <div>
      <h1>Hi there my daughter {!isShe ? (<> {daughter.name} </>)  : (<> {daughter.name} </>)}</h1>
      
      <Cathy age={daughter.age} gender={daughter.gender} cute={daughter.cute} />
      </div>  
      </body>
    </div>
  );
}

export default App;
