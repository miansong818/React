import React, {useContext} from 'react';
import {TypeContext} from "./Hooks";

const TypeField=()=>{
    const {setText}=useContext(TypeContext)

    return <input onChange={(event)=>{setText(event.target.value)}}/>;
};

export default TypeField;