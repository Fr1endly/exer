import React, { Component, Fragment } from 'react';
import { 
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from "@material-ui/core";


export default class extends Component {
    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props

        return exercise ? exercise : {
        title: '',
        description: '',
        muscles: ''
        }
    }

    handleChange = name => ({ target: { value }}) => 
        this.setState({
            [name]: value 
        })
    
    handleSubmit = () => {
        // TODO: validate

        this.props.onSubmit({
        id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
        ...this.state
        })
    }

    render() {
        const { title, description, muscles } = this.state;
        const { muscles: categories, exercise } = this.props;

        return <form>
    <Fragment>
        <TextField
            required
            label="Title"
            margin="normal"
            value={ title }
            onChange={this.handleChange('title')}//32 [name]
            fullWidth
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
            fullWidth
        />
        <br/>
        <FormControl fullWidth>
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
        <Button
            color="primary"
            onClick={ this.handleSubmit }
            disabled={!title || !muscles}
        >
        {exercise ? 'Edit' : 'Create'}
        </Button>
    </Fragment>
    </form>
    }
}