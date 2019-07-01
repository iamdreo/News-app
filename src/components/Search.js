import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../context";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';


/* 
*handles search data fetching and search filter usig react hooks and use effect
*/
const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
    marginLeft: '14%'
    },
 
    [theme.breakpoints.up('lg')]: {
      padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginLeft: '36.5%'
    },
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize:20,
  },

  main: {
    textAlign: 'center', 
    paddingTop: '10%',
  
  },
  headline: {
    [theme.breakpoints.down('sm')]: {
    color : '#FFFFFF',
    fontSize : 20,
    },
    [theme.breakpoints.up('md')]: {
      color : '#FFFFFF',
    fontSize : 25
    },
    [theme.breakpoints.up('lg')]: {
      color : '#FFFFFF',
      fontSize : 30
    },
  },
});


const Search = (props) => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [articleName, setArticleName] = useState("");
  const [ sortBy, setSortBy] = useState("newest");
  const {classes} = props;

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${articleName}&sort=${sortBy}&api-key=ytklkqL1Ci5WiNwQjdrp4k7GIFdzoQnT`
      )
      .then(res => {
          console.log(res.data.response.docs)
        let article_list = res.data.response.docs;
        setState({ article_list: article_list, heading: "Search Results" });
      })
      .catch(err => console.log(err));
  },[articleName, setState, sortBy]);

  const findNews = e => {
    e.preventDefault();
    setArticleName(userInput);
    setUserInput('');
    
   
  };

  const handleSearchChange =  e => {
    setUserInput(e.target.value);
 
  };

  const handleFilterChange =  e => {
    setSortBy(e.target.value);
 
  };

  return (
    <div className={classes.main}>
      
      <p className={classes.headline}>Search for the latest news</p>
     
      <form autoComplete="off" onSubmit={findNews}>
      <Paper className={classes.root}>
    
      <InputBase
        className={classes.input}
        placeholder="Search News..."
        inputProps={{ 'aria-label': 'Search News' }}
        name="userInput"
        value={userInput}
        onChange={handleSearchChange}
      />
        <FormControl variant="filled" >
       
       <Select
         native
         value={sortBy}
         onChange={handleFilterChange}
         input={<FilledInput name="sortby" id="filled-filter-native-simple" />}
       >
        <option value={'newest'}>Newest</option>
         <option value={'oldest'}>Oldest</option>
       </Select>
     </FormControl>
    </Paper>
    
    
     
      </form>
    </div>
  );
};

export default withStyles(styles)(Search);