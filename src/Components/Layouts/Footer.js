import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import withWidth from "@material-ui/core/withWidth"

export default withWidth()(({ muscles, category, onSelect, width }) =>{
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
                scrollButtons='on'
                variant={width === 'xs' ? 'scrollable' : 'standard'}
                centered={width !== 'xs'}
                
            >
                 <Tab label="All" />

                {muscles.map( i => 
                    <Tab label={i} key={i}/>
                )}
            </Tabs>
        </Paper>
})