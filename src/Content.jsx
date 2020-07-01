import React from 'react';
import CoffeCard from './CoffeeCard';
import { Grid } from '@material-ui/core';
import coffeeMakerList from './Constants';


const Content = () => {

    const getCoffeeMakerCard = (coffeeMakerObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeCard {...coffeeMakerObj}/>
            </Grid>
            
            );
    
    };
    return (
        <Grid container spacing={4}>
            
            {coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
             
        </Grid>
            
    );
};

export default Content;