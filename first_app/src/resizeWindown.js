/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';


const resizeWindown = () => {
  const [windowSize, setWindowSize] = useState(0);
  // this is usecases for useEffect
  useEffect(()=>{
    console.log('render only the 1st time');
  }, []);

  useEffect(()=>{
    console.log(`Current window size is: ${windowSize}`);
  }, [windowSize]);

  useEffect(()=>{
    console.log(`this happens later`);
    // for unmount / clean up function
    return ()=>{
      console.log('this happens first');
    };
  });


  useEffect(()=>{
    // attach listener
    window.addEventListener('resize', resize);
    // To get rid of increasing resize events
    return ()=>{
      // detach listener
      window.removeEventListener('resize', resize);
    };
  });

  const resize = ()=>{
    // browser console command getEventListeners(window) to check how many resize array
    setWindowSize(window.innerWidth);
  };

  const onChange=(e)=>{
    // console.log(e);
    setWindowSize(e.target.value);
  };
  return (
    <div>
      <h1>Resize Windown</h1>
      Window size: <input type="text" onChange={(e)=>onChange(e)} />
      <div>Current window size is: {windowSize}</div>
    </div>
  );
};

export default resizeWindown;
