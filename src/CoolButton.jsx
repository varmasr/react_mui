import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import classNames from 'classnames';


const useStyles = makeStyles( theme => ({
     buttonText : props => {
        return {
            color : props.cool ? "blue":"red",
            [theme.breakpoints.up("sm")] : {
                color : "blue"
            } 
            //backgroundColor : props.cool ? "orange": "yellow"

        }
        
    } ,
    buttonBackground : props => {
        return {
            backgroundColor : props.cool ? "pink" :'yellow',
            [theme.breakpoints.up("sm")] : {
                backgroundColor : "pink"
            } 
        }
        
       
    }
    /* buttonStyle : {
        color : "red",
        [theme.breakpoints.up("sm")] : {
            color : "blue"
        }
    } */


}));

export default function Hook(props) {
    const classes = useStyles(props);
    return <Button fullWidth className={classNames(classes.buttonText, classes.buttonBackground)}>THIS BUTTON</Button>;
};