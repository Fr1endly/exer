import React, { Component, Fragment } from 'react';
import { 
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/Styles"


const styles = theme => ({
  FormControl: {
    width: '100%'
  }
})

export default withStyles(styles)(class extends Component {
    state = this.getInitState()

    getInitState() {
        const { exercise } = this.props

        return exercise ? exercise : {
        title: '',
        description: '',
        muscles: ''
        }
    }

    componentWillReceiveProps({ exercise }) {
        this.setState({
            ...exercise
        })
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

        this.setState(this.getInitState())
    }

    render() {
        const { title, description, muscles } = this.state;
        const { muscles: categories, classes, exercise } = this.props;

        return <form>
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
        <FormControl className={ classes.FormControl } >
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
        >
        {exercise ? 'Edit' : 'Create'}
        </Button>
    </Fragment>
    </form>
    }
}) 