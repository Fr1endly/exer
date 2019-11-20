import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import  CreateDialog  from '../Exercises/dialogs/create';

export default props =>
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h5' style={{ flex: 1 }}> 
                    Exercises
                </Typography>
                <CreateDialog/>
            </Toolbar>
        </AppBar>
    </div>   