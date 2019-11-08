import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List,
         ListItem, ListItemText } from '@material-ui/core';


const styles = {
    Paper: {
        padding: 20,
        margin: '10 auto 10 auto'
    }
}

export default ({ exercises })  => 
    <Grid container >
        <Grid item sm>
            <Paper style={ styles.Paper}>
                {exercises.map(( [ group, exercises ] )=>
                    <Fragment>
                        <Typography
                         variant="headline"
                         style={{textTransform: "capitalize"}}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map( ({ title })=>
                                <ListItem button>
                                    <ListItemText primary={title}/>
                                </ListItem>
                            )}
                        </List>
                    </Fragment>

                )}
                
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper}>
          
            </Paper>
        </Grid>
    </Grid>