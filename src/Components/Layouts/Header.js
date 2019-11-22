import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import  CreateDialog  from '../Exercises/Dialogs/create';

export default ({ muscles }) =>
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h5' style={{ flex: 1 }}> 
                    Exercises
                </Typography>
                <CreateDialog muscles={muscles}/>
            </Toolbar>
        </AppBar>
    </div>   