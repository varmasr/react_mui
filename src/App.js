import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root : {
    color : "red",
    border : "none"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
{/*     <Button className={classes.root} variant="outlined" size="small" color="primary">
      small button
    </Button> */}
     <Button
      classes={{
        root: classes.root
     }} 
     variant="outlined"
     size="small"
     color="primary">
      small button
    </Button>
    
    </>
  );
}

export default App;
