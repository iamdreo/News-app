import React, { useContext } from "react";
import { Context } from "../context";
import Article from './Article';
import Grid from '@material-ui/core/Grid';

/*
-handles article fetching logic abd what content it displays
*/

const Articles = () => {
  const [state] = useContext(Context);
  const { article_list, heading } = state;

  if (article_list === undefined || article_list.length === 0) {
    return <p style={{textAlign: 'center'}}>loading..</p>;
  } else {
    return (
      <>
      <h3 style={{marginTop: 50, textAlign: 'center'}}>{heading}</h3>
       <Grid container justify="center"
  alignItems="center" style={{marginTop: 100}}>
       
      
        
          {article_list.map(item => (
          
            <Grid key={item._id} item xs={'auto'} sm={4}>
            <Article  key={item._id} article={item} />
            </Grid>
            
          ))}
     
      
       
        </Grid>
      </>
    );
  }
};

export default Articles;