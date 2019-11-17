import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, category, onSelect }) =>{
    const index = category
        ? muscles.findIndex( element => element===category ) + 1 
        : 0

    const onIndexSelect = (e, index) => 
        onSelect(index===0 ? '' : muscles[index-1])
    
    return <Paper square>
            <Tabs
                value={index}
                onChange={onIndexSelect}
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
} 