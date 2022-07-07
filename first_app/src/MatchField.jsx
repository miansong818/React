import React, {useContext} from 'react';
import {TypeContext} from './Hooks';

const MatchField=()=>{
  const {text} = useContext(TypeContext);

  return <div>
        Matching typed content: {text}
  </div>;
};

export default MatchField;
