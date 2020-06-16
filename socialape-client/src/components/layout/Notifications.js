import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { 
    Menu,
    MenuItem,
    IconButton,
    Tooltip,
    Typography,
    Badge
} from '@material-ui/core';
import NotigicationIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import { markNotificationsRead } from '../../redux/actions/userAction';

class Notifications extends Component {
    state = {
        anchorEl: null
    }
    render() {
        const notifications = this.props.notifications;
        const anchorEl = this.state.anchorEl;
        let notificationIcon;
        if (notifications && notifications.length > 0) {
             notifications.filter(not => not.read === false).length > 0
                ? notificationIcon = (
                    <Badge badgeContent={notifications.filter(not => not.read === false).length}
                        color="secondary"
                    >
                        <NotificationIcon/>
                    </Badge>
                ) : (
                    notificationIcon = <NotificationIcon/>
                )
        }
        else {
            notificationIcon = <NotificationIcon/>
        }

        return (
            <Fragment>
                <Tooltip placement="top" title="Notifications">
                    <IconButton aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleOpen}
                    >
                        {notificationIcon}
                    </IconButton>
                </Tooltip>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    onEntered={this.onMenuOpened}
                >
                    {notificationsMarkup}
                </Menu>
            </Fragment>
        )
    }
};

Notifications.propTypes = {
    markNotificationsRead: PropTypes.func.isRequired,
    notifications: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    notifications: state.user.notifications
})

export default connect(mapStateToProps, { markNotificationsRead })(Notifications);
