import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    CircularProgress
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import MyButton from '../util/MyButton';
import { connect } from 'react-redux';
import { postScream } from '../redux/actions/dataAction';

const styles = {

}

class PostScream extends Component {

}

PostScream.propTypes = {
    postScream: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    UI: state.UI
})

export default connect((mapStateToProps, { postScream }))(withStyles(styles)(PostScream));