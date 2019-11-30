import React, { Fragment, Component } from 'react';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Fab,
    Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from "./Form"


export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    handleFormSubmit = exercise => {
        this.handleToggle()

        this.props.onCreate(exercise)
    }
    
    render() {
        const { open }  = this.state,
            { muscles } = this.props

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
                    <Form
                        muscles={muscles}
                        onSubmit={this.handleFormSubmit}
                    />
                </DialogContent>
                </Dialog>
            </Fragment>
        )
        
    }
}
