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

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title ,
        description
    }
}) => 
    <Grid container >
        <Grid item sm>
            <Paper style={ styles.Paper}>
                {exercises.map( ( [ group, exercises ] )=> 
                    !category || category===group
                        ? <Fragment
                            key={group}
                        >
                            <Typography
                                variant="h4"
                                style={{textTransform: "capitalize"}}
                            >
                                {group}
                            </Typography>
                            <List component="ul">
                                {exercises.map( ({ id, title })=>
                                    <ListItem button key={ id }>
                                        <ListItemText 
                                            primary={title}
                                            onClick={()=> onSelect(id) }    
                                        />
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
                    {title}
                </Typography>
                <Typography
                variant='subtitle1' gutterBottom 
                style={{ marginTop: 20 }}
                >
                    {description}
                </Typography>
            </Paper>
        </Grid>
    </Grid>