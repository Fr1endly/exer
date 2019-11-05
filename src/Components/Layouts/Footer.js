import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default props =>
    <div>
        <Paper square>
            <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Active" />
                <Tab label="Disabled" disabled />
                <Tab label="Active" />
            </Tabs>
        </Paper>
    </div> 