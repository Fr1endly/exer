import React, { Fragment, Component } from 'react';
import Fab from "@material-ui/core/Fab"
import Button from '@material-ui/core/Button';
import {
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, TextField,
    FormControl, InputLabel,
    Select, MenuItem
    } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from "@material-ui/core/Styles"

const styles = theme => ({
  FormControl: {
    width: 500
  }
})


export default withStyles(styles)(class extends Component {
    state = {
        open: false,
        exercise: {
            title:'',
            description: '',
            muscles: ''
        }
    }

    handleToggle = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({ target: { value }}) => {
        this.setState({
            exercise: {
            ...this.state.exercise,
            [name]: value 
            }
        })
    }

    handleSubmit = () => {
        //To-do: Validation.

        const { exercise } = this.state;
        
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLocaleLowerCase()
        });

            this.setState({
            open: false,
            exercise: {
            title: '',
            description: '',
            muscles: ''
            }
        })
    }
    
    render() {
        const { open, exercise: { title, description, muscles } } = this.state
        const {
            muscles: categories,
            classes
        } = this.props

        return (
            <Fragment>
                <Fab size='small' color="secondary" onClick={this.handleToggle} >
                    <AddIcon />
                </Fab>
                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Create new exercise
                </DialogTitle>
                <DialogContent> 
                    <DialogContentText>
                    Please fill form below.      
                    </DialogContentText>
                    <form >
                        <Fragment>
                            <TextField
                            required
                            label="Title"
                            margin="normal"
                            value={ title }
                            onChange={this.handleChange('title')}//32 [name]
                            className={ classes.FormControl }
                            />
                            <br/>
                            <TextField
                            required
                            multiline
                            rows="3"
                            label="Description"
                            margin="normal"
                            value={ description }
                            onChange={this.handleChange('description')}//32 [name]
                            className={ classes.FormControl}
                            />
                            <br/>
                            <FormControl >
                                <InputLabel htmlFor="muscles">
                                    Muscles
                                </InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
                                    className={ classes.FormControl }
                                >
                                    {categories.map(category =>
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <br/>
                        </Fragment>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="primary"
                        onClick={ this.handleSubmit }
                    >
                    Create
                    </Button>
                </DialogActions>
                </Dialog>
            </Fragment>
        )
        
    }
})
