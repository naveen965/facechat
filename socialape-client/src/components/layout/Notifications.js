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
import NotificationIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import { markNotificationsRead } from '../../redux/actions/userAction';

class Notifications extends Component {
    state = {
        anchorEl: null
    };
    handleOpen = (event) => {
        console.log(event.target);
        this.setState({ anchorEl: event.target });
        // this.setState({ anchorEl: true });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    onMenuOpened = () => {
        // console.log(this.props.notifications); // notification read err fix using this command
        let unreadNotificationsIds = this.props.notifications
            .filter(not => !not.read)
            .map(not => not.notificationsId);
            // console.log(unreadNotificationsIds);
            this.props.markNotificationsRead(unreadNotificationsIds);
    };
    render() {
        const notifications = this.props.notifications;
        const anchorEl = this.state.anchorEl;
        dayjs.extend(relativeTime);
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
        let notificationsMarkup = notifications && notifications.length > 0 ? (
            notifications.map(not => {
                const verb = not.type === 'like' ? 'liked' : 'commented on';
                const time = dayjs(not.createdAt).fromNow();
                const iconColor = not.read ? 'primary' : 'secondary';
                const icon = not.type === 'like' ? (
                    <FavoriteIcon color={iconColor} style={{ marginRight: 10 }}/>
                ) : (
                    <ChatIcon color={iconColor} style={{ marginRight: 10 }}/>
                )
                return (
                    <MenuItem key={not.createdAt} onClick={this.handleClose}>
                        {icon}
                        <Typography
                            component={Link}
                            color="primary"
                            variant="body1"
                            to={`/users/${not.recipient}/scream/${not.screamId}`}
                        >
                            {not.sender} {verb} your scream {time}
                        </Typography>
                    </MenuItem>
                )
            })
        ) : (
            <MenuItem onClick={this.handleClose}>
                You have no notifications yet
            </MenuItem>
        )
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
}

Notifications.propTypes = {
    markNotificationsRead: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    notifications: state.user.notifications
});

export default connect(mapStateToProps, { markNotificationsRead })(Notifications);
