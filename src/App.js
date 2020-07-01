import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';

import Header from './Header';
import Content from './Content';



function App() {
  return (
   <Grid container direction='column'>
    <Grid item>
      <Header/>     
    </Grid>
    <Grid item container>
      <Grid item xm={0} sm={2}/>
      <Grid item xm={12} sm={8}>
        <Content/>
      </Grid>
      <Grid item xm={0} sm={2}/>
    </Grid>

   </Grid>
  );
}

export default App;
