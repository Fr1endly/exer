import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List,
         ListItem, ListItemText } from '@material-ui/core';


const styles = {
    Paper: {
        padding: 20,
        margin: '10 auto 10 auto',
        overflowY: 'auto',
        height: 500,
    }
}

export default ({ exercises, category })  => 
    <Grid container >
        <Grid item sm>
            <Paper style={ styles.Paper}>
                {exercises.map(( [ group, exercises ] )=>
                    !category || category===group
                        ? <Fragment>
                            <Typography
                                variant="h4"
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
                        : null
                )}
                
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper}>
                <Typography
                variant='h2' gutterBottom
                >
                    Welcome!
                </Typography>
                <Typography
                variant='subtitle1' gutterBottom 
                style={{ marginTop: 20 }}
                >
                    Please select an excercise from the list on left.
                </Typography>
            </Paper>
        </Grid>
    </Grid>