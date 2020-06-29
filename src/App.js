import React from 'react';
import './App.css';
import { Button,Typography } from '@material-ui/core'
import { ThemeProvider, makeStyles} from '@material-ui/core/styles'

import theme from './theme';

const useStyles = makeStyles({
  helloThereStyles : {

    fontStyle: 'oblique',
    color : 'grey'
  },
  buttonStyles : {
    color :'brown',
    border : 0
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    
    <div className="App">
    <Typography className={classes.helloThereStyles} variant='h1' color="secondary"> Hello There </Typography>
      <Button color="primary" variant='outlined'> This is from material</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
