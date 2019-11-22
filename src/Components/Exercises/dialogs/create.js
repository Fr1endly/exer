import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";


export default class extends Component {
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


    render() {
        const { open, exercise: { title, description, muscles } } = this.state
        const {muscles: categories } = this.props

        return (
            <Fragment>
                <Button variant="outlined" color="secondary" onClick={this.handleToggle} >
                    <AddIcon />
                    {console.log(this.state)}
                </Button>
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
                            />
                            <br/>
                            <FormControl >
                                <InputLabel htmlFor="muscles">
                                    Muscles
                                </InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}
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
                    <Button color="primary">
                    Create
                    </Button>
                </DialogActions>
                </Dialog>
            </Fragment>
        )
        
    }
}

