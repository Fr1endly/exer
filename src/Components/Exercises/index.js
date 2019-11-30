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
    <Grid item sm>
        <Paper style={ styles.Paper}>
        {editMode?
            <Form
                muscles={muscles}
                exercise={exercise}
                onSubmit={onEdit}
            />
        :
        <Fragment>
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
        </Fragment>
        }

        </Paper>
    </Grid>
</Grid>