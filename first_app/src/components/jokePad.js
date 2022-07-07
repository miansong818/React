/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const jokePad = () => {
  const [firstName, setFirstName] = useState('mian');
  const [lastName, setLastName] = useState( 'song');
  const [joke, setJoke] = useState();
  const inputRef = useRef();

  useEffect(()=>{
    fetchJokes(firstName, lastName);
  }, []);
  const onChangeF=(e)=>{
    setFirstName(e.target.value);
  };
  const onChangeL=(e)=>{
    setLastName(e.target.value);
  };
  const submit = async (e, fName, lName)=>{
    const firstName = fName;
    const lastName =lName;

    await fetchJokes(firstName, lastName);

    inputRef.current.value = '';
    inputRef.current.focus();
  };
  const fetchJokes = async (firstName, lastName)=>{
    try {
      await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`, {firstName, lastName}).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setJoke(data.value.joke);
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className='container jokePad'>
      <h1>jokePad</h1>
      <div className="row">
        First name: <input ref={inputRef} type="text" onChange={(e)=>onChangeF(e)} />
      </div>
      <div className="row">
        Last name: <input type="text" onChange={(e)=>onChangeL(e)} />
      </div>
      <div className="row">
        <button className="btn btn-primary" onClick={(e)=>submit(e, firstName, lastName)}>Submit</button>

      </div>
      <div className="card">

        <div className="card-body">
          <h1 className="card-title"><label>{` the name ${firstName} ${lastName} `}</label></h1>
          <p>{joke}</p>
        </div>

      </div>
    </div>
  );
};

export default jokePad;
