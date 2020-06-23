import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import MyButton from '../../util/MyButton';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';

class navbar extends Component {
    render() {
        const { authenticated } = this.props;
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    {authenticated ? (
                        <Fragment>
                            <PostScream/>
                            <Link to="/">
                                <MyButton tip="Home">
                                    <HomeIcon/>
                                </MyButton>
                            </Link>
                            <Notifications/>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button color="inherit" component={ Link } to="/">Home</Button>
                            <Button color="inherit" component={ Link } to="/login">Login</Button>
                            <Button color="inherit" component={ Link } to="/signup">Signup</Button>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
};

navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps  = (state) => ({
    authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(navbar);
