import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogTitle
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { connect } from 'react-redux';
import { deleteScream } from '../redux/actions/dataAction';

const styles = {

}

class DeleteScream extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, { deleteScream })(withStyles(styles)(DeleteScream));
