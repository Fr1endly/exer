import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles }) =>
    <div>
        <Paper square>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
            >
            <Tab label="All" />
            {muscles.map( i => 
                <Tab label={i} />
            )}
            </Tabs>
        </Paper>
    </div> 