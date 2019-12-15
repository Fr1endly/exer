import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles"
import  CreateDialog  from '../Exercises/Dialog';


const styles = {
    flex: {
        flex: 1
    }
}

export default withStyles(styles)(({ muscles, onCreateExercise, classes }) =>
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h5' className={classes.flex}> 
                    Exercises
                </Typography>
                <CreateDialog
                    muscles={muscles}
                    onCreate={ onCreateExercise }
                />
            </Toolbar>
        </AppBar>
    </div>)  