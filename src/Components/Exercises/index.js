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
        overflowY: 'auto',
        padding: 20,
        [theme.breakpoints.up('sm')]: {
            margintop: 5,
            height: 'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]: {
            margintop: 5,
            height: '100%'
        }

    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)'
        }, 
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
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
<Grid container className={classes.container}>
    <Grid item className={classes.item} sm={6} xs={12}>
        <Paper className={ classes.Paper}>
            {exercises.map( ( [ group, exercises ] )=> 
                !category || category===group
                    ? <Fragment
                        key={group}
                    >
                        <Typography
                            color='secondary'
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
                                        <IconButton color='primary' onClick={ ()=>onDelete(id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                        <IconButton color='primary' onClick={ ()=>onSelectEdit(id)}>
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
    <Grid item className={classes.item} sm={6} xs={12}>
        <Paper className={ classes.Paper}>
            <Typography
                variant='h2'
                gutterBottom
                color='secondary'
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