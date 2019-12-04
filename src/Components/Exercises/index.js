import React, { Fragment } from 'react';
import Form from './Form';
import { 
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/Styles"

const styles = theme => ({
    Paper: {
        padding: 20,
        margintop: 5,
        overflowY: 'auto',
        height: 500
    }
})

export default withStyles(styles)(({
        classes,
        exercises,
        muscles,
        category,
        onSelect,
        exercise,
        exercise: {
            id,
            title='Welcome',
            description="Please select exercise on the left."
        },// nested destructring
        onDelete,
        editMode,
        onSelectEdit,
        onEdit
    }) =>
<Grid container >
    <Grid item sm={6} xs={12}>
        <Paper className={ classes.Paper}>
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
                                <ListItem button key={ id } onClick={ ()=> onSelect(id) }>
                                    <ListItemText 
                                        primary={title}

                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={ ()=>onDelete(id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                        <IconButton onClick={ ()=>onSelectEdit(id)}>
                                            <EditIcon/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                        </Fragment>
                    : null
            )}
        </Paper>
    </Grid>
    <Grid item sm={6} xs={12}>
        <Paper className={ classes.Paper}>
            <Typography
                variant='h2'
                gutterBottom
            >
                {title}
            </Typography>
            {editMode?
                <Form
                    key={id}
                    muscles={muscles}
                    exercise={exercise}
                    onSubmit={onEdit}
                />
            :
                <Fragment>
                    <Typography
                        variant='subtitle1' 
                        style={{ marginTop: 20 }}
                    >
                        {description}
                    </Typography>
                </Fragment>
            }
        </Paper>
    </Grid>
</Grid>
)