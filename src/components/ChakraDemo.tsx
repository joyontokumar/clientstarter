import { any, string } from "prop-types";
import React, { ReactElement,useEffect,useState } from "react";
import {getPosts} from "../api/index";

interface Props {
  
}

const ChakraDemo = ({}: Props): ReactElement =>{
  const[items, setItems] = useState([]);
    useEffect(()=>{
        getPosts()
        .then(outputdata => {
          setItems(outputdata);
        });
    },[]);
  return (
    <div>
      <h1 style={{textAlign:"center", marign:"auto", width:"100%", display:"block"}}>Hello React Redux Chakra Sass Typescript</h1>
      <pre>
        <code>
          {JSON.stringify(items, null, 4)}
        </code>
      </pre>
    </div>
  );
};

export default ChakraDemo;
