import React, { useState, useEffect } from "react";
import axios from "axios";

/* uses context api to manage application state, 
*the code below fetches data and handles state change 
*/
export const Context = React.createContext();


export function ContextController({ children }) {
    let intialState = {
      article_list: [],
      heading: ""
     
    };
  
    const [state, setState] = useState(intialState);
  
    useEffect(() => {
      axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ytklkqL1Ci5WiNwQjdrp4k7GIFdzoQnT`
        )
        .then(res => {
          
          setState({
            article_list: res.data.response.docs,
            heading: "Top News"
          });
        })
        .catch(err => console.log(err));
    }, []);
  
    return (
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
  }