import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton'
//Redux
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';
//MUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//Icons
import EditIcon from '@material-ui/icons/Edit';
const styles = theme => ({
    //...theme,
    button: {
        float: 'right'
    }
})

class EditDetails extends Component {
    state = {
        bio: '',
        website: '',
        location: '',
        open: false
    };

    mapUserDetailsToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : ''
        });
    };

    handleOpen = () => {
        this.setState({ open: true });
        this.mapUserDetailsToState(this.props.credentials);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        const { credentials } = this.props;
        this.mapUserDetailsToState(credentials);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = () => {
        const userDetails = {
            bio: this.state.bio,
            website: this.state.website,
            location: this.state.location
        };
        this.props.editUserDetails(userDetails);
        this.handleClose();
    };

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <MyButton tip="Edit details" onClick={this.handleOpen} btnClassName={classes.button}>
                    <EditIcon color="primary" />
                </MyButton>
                <Dialog open={this.state.open} onClose={this.onClose} fullWidth maxWidth="sm">
                    <DialogTitle>Edit your Details</DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField name="bio" type="Text" label="Bio" multiline rows="3" className="classes.textField"
                                placeholder="A short bio about yourself" value={this.state.bio} onChange={this.handleChange} fullWidth />
                            <TextField name="website" type="Text" label="Website" className="classes.textField"
                                placeholder="Your website" value={this.state.website} onChange={this.handleChange} fullWidth />
                            <TextField name="location" type="Text" label="Location" className="classes.textField"
                                placeholder="Your location" value={this.state.location} onChange={this.handleChange} fullWidth />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={this.handleSubmit} color="primary">Save</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: state.user.credentials
});

EditDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    editUserDetails: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { editUserDetails })(withStyles(styles)(EditDetails));
