/* eslint-disable react/display-name */
import React, {forwardRef, useImperativeHandle, useState} from 'react';

const ChildBtn = forwardRef((props, ref)=>{
  const [toggle, setToggle] = useState(false);
  const [from, setFrom] = useState('');

  useImperativeHandle(ref, ()=>({
    alterToggle() {
      setFrom('Parent click');
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button onClick={()=>{
        setFrom('Child click'); setToggle(!toggle);
      }}>Child Btn</button>
      {toggle && <span>{from}</span>}
    </>
  );
});

export default ChildBtn;
