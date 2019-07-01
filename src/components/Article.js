import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

/*
*handles the way cards are displayed on the screen and design
*/
const styles = theme => ({
  card: {
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 150,
      margin: 50,
      },
      [theme.breakpoints.up('md')]: {
        width: 345,
        height: 150,
        margin: 50,
      },
      [theme.breakpoints.up('lg')]: {
        width: 345,
    height: 150,
    margin: 50,
      },
    
  },
  
 
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
    width: 200,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
      },
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize:12
      },
    fontSize: 15
  },
}));


const Article = props => {
  const { article, classes } = props;
  const [open, setOpen] = React.useState(false);
  
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const modalClasses = useStyles();

  return (
    <div >
    

           <Card className={classes.card} elevation={3}>
     
      
        <CardContent>
        
          <Typography  variant="body2" color="textSecondary" component="p">
          {article.headline.main}
          </Typography>
        </CardContent>
    
      <CardActions>
      <Button onClick={handleOpen}>see more details</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={modalClasses.paper}>
         
          <Typography className={modalClasses.text} variant="subtitle1" id="simple-modal-description">
            {article.lead_paragraph}
          </Typography>
        
        </div>
      </Modal>
      </CardActions>
    </Card>
    </div>
  );
};

export default withStyles(styles)(Article);

