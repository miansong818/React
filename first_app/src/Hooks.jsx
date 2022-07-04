import React, {useEffect, useState, useReducer, useRef, useLayoutEffect, useImperativeHandle, forwardRef, createContext, useMemo, useCallback} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import ChildBtn from './ChildBtn';
import TypeField from './TypeField'; 
import MatchField from './MatchField';
// import { type } from '@testing-library/user-event/dist/type';


//createContext has to be out of the model
export const TypeContext = createContext(null);

const Hooks=()=>{
    /**
     * useState
     * */ 
    const [counter, setCounter] = useState(0);
    // let counter;

    // It won't work, like below increment function, but it's running in console log
    // const increment=()=>{
    //     counter++;
    //     console.log(counter);
    // }
    const increment=()=>{
        setCounter(counter+1)
    };

    //input example
    const [inputVal, setInputVal] = useState(0);
    let onChange=(event)=>{
        const newVal = event.target.value;
        setInputVal(newVal);
    };

    /**
     * userReducer
     * Use case will be when have very complex cases, we have to set different state
     * */ 
    const reducer=(state, action)=>{
        switch(action.type) {
            case "INCREMENT":
                return {count: state.count+1, showText: state.showText};
            case "toggleShowText":
                return {count: state.count, showText: !state.showText};
                
            default: return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});

   /**
    * useEffect
    * use case: initial or mount at the beginning
    * Important to know, whenever the state changes, the page will be reloaded, and that's why console log so many times;
    * How can we only make it call one-tiem, put empty array for the param
    * put counter to triger everytime
    * */
    // useEffect(()=>{
    //     console.log('hello')
    // })

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            console.log(res.data)
            setData(res.data);
        })
    }, [counter]);

      /**
     * useRef
     * use case: focus on particular element, like vuejs reference $ref...
    */
    const inputRef = useRef(null);
    const onClick=(event)=>{
        console.log('useRef: ');
        console.log(inputRef.current.value);
        inputRef.current.focus();
       }

       /**
        * useLayoutEffect
        * user case: before page rendering, like created() in vuejs
       */
        useLayoutEffect(()=>{
            console.log('useLayoutEffect happened before useEffect, before name change to Cathy: ');
            console.log(inputRef.current.value);
        });

        useEffect(()=>{
            inputRef.current.value = "Cathy";
        });

        /**
         * forwardRef: which allows user to add forwardRef to child, and parent component can trace for child component as reference
         * useImperativeHandle: more like emmit Event function in vuejs, set in the child component and parent component can use as well, @customEvent.
        */
         const childBtnRef = useRef(null); 
        
         /**
          * CreateContext: same as vuex store-module, you can create global state/actions, they could be applied anywhere
          * useContext: same as getting the global state/actions by using mapState/mapActions of VueX
          * useCase: when have multi components and you have multi-props to pass, just put in context
         */
          const [text, setText] = useState('');

          /**
           * useMemo, useCallback
           * Next will be computed???
           * The major difference between useCallback and useMemo is that useCallback will memory the returned value, whereas useMemo will memory the function. Essentially, the only difference between these hooks is that one caches a value type, and the other caches a function
          */
         const [family, setFamily] = useState([]);
         const [showFamily, setShowFamily] = useState([true]);
        useEffect(()=>{
            const dady = {name: 'dady', id: 1};
            const mommy = {name: 'mommy', id: 2};
            const henry = {name: 'henry', id: 3};
            const families = [dady,mommy, henry]
            // setFamily(families)
        });
        const computedFun=()=>{
            console.log('Computed triggered!');
            const newFamily = family;
            if(showFamily){
                const cathy = {name: 'cathy', id: 4};
                newFamily.push(cathy);
                setFamily(newFamily);
                console.log(family.length)
                return;
            }
            newFamily.pop();
            setFamily(newFamily);
            console.log(family.length)
        };
         const getRefreshed = useMemo(()=>computedFun(showFamily),[showFamily]);

    return <div>
        <h4 className="text-primary">userState example: </h4>
        <h1>{counter}</h1>
        <div><button onClick={()=>increment()}>Increase</button></div>
        <p className="text-danger">Can triger api call when set counter as param for useEffect</p>
        <br /><br />
        <div>
            <input type="text" onChange={onChange} />
            <div>{inputVal}</div>
        </div>
        <br /><br />
        <h4 className="text-primary">userReducer example: </h4>
        <h1>{state.count}</h1>
        <div><button onClick={()=>{
            dispatch({type: 'INCREMENT'})
            dispatch({type: 'toggleShowText'})
            // setCounter();
            // setShowText();
        }}>Click here</button></div>
        {state.showText && <p>this is the text</p>}
        <br /><br />
        <h4 className="text-primary">useEffect example: </h4>
        <div>
            <p>title: {data[0]?.title ? data[0]?.title : "No data"}</p>
        </div>
        <br /><br />
        <h4 className="text-primary">useRef example: </h4>
        <h1>Henry</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
        <br />
        <br />
        <div>
        <h4 className="text-primary">useLayoutEffect example: </h4>
        <h1>From who's click</h1>
            <button onClick={()=>{childBtnRef.current.alterToggle()}}>Parent Btn</button>
            <ChildBtn ref={childBtnRef}/>  
        </div>
        <br />
        <br />
        <div>
            <TypeContext.Provider value={{text, setText}}>
            <h4 className="text-primary">useContext example: </h4>
            <TypeField></TypeField>
            <MatchField></MatchField>
            </TypeContext.Provider>
        </div>
        <br />
        <br />
        <h4 className="text-primary">useMemo example: </h4>
        <h4>We have {family.length} members in the family</h4>
        <h3>The last one is {getRefreshed} </h3>
        <button onClick={()=>setShowFamily(true)}>Show Current family</button>
        <button onClick={()=>setShowFamily(false)}>Show Old family</button>
    </div>
}

export default Hooks;