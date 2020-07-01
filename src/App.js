import React from 'react';
import TypographyDemo from './TypographyDemo';
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue'
//import { makeStyles } from '@material-ui/styles';
//import Typography from '@material-ui/core/Typography';
//import classNames from 'classnames'

const theme = createMuiTheme (
  {
    palette : {
      primary : purple,
      secondary : blue
    },
    typography:{
      h1: {
        fontSize:"1em"
      },
      
      fontFamily:"Roboto"
    }
  }
)



/* const useStyles = makeStyles({
  typographyStyle: {
    color: "blue"
  },
  gutterBottom : {
    marginBottom : "0.6em"
  }

}); */


function App() {
  //const classes = useStyles();
/*   return(
    <Typography 
    //align="center"
    //color="secondary" 
    gutterBottom 
    //nowrap
    //variantMapping={{
    //  h1:"p"
    //}}
    //component
    classes={{
      gutterBottom:classes.gutterBottom,
    }}
    variant="h1"
    className={classes.typographyStyle}
    >Hello World</Typography>
  ); */
 
 return (
   <ThemeProvider theme={theme}>
     <TypographyDemo/>
   </ThemeProvider>
   
 );

}; 

export default App;