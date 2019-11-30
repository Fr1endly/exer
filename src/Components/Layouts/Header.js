import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import  CreateDialog  from '../Exercises/Dialog';

export default ({ muscles, onCreateExercise  }) =>
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h5' style={{ flex: 1 }}> 
                    Exercises
                </Typography>
                <CreateDialog
                    muscles={muscles}
                    onCreate={ onCreateExercise }
                />
            </Toolbar>
        </AppBar>
    </div>   