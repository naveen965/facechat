import React from 'react';
import PropTypes from 'prop-types';
import NoImg from '../images/icon.png';
import withStyles from '@material-ui/core/styles/withStyles';
import { Paper } from '@material-ui/core';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    profile: {
        padding: 20,
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
    },
    cardContent: {
        width: '100%',
        flexDirection: 'column',
        padding: 25
    },
    cover: {
        minWidth: 200,
        objectFit: 'cover'
    },
    handle: {
        width: 60,
        height: 20,
        backgroundColor: theme.palette.primary.main,
        marginBottom: 7,
        margin: '0 auto 7px auto'
    },
    date: {
        height: 14,
        width: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginBottom: 10
    },
    fullLine: {
        height: 15,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginBottom: 10
    },
    halfLine: {
        height: 15,
        width: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        marginBottom: 10
    },
})

const ProfileSkeleton = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={NoImg} alt="profile" className="profile-image"/>
                </div>
                <hr/>
                <div className="profile-details">
                    <div className={classes.handle}/>
                    <hr/>
                    <div className={classes.fullLine}/>
                    <div className={classes.fullLine}/>
                    <hr/>
                    <LocationOn color="primary"/> <span>Location</span>
                    <hr/>
                    <LinkIcon color="primary"/> https://website.com
                    <hr/>
                    <CalendarToday color="primary"/> Joined date
                </div>
            </div>
        </Paper>
    )
}

ProfileSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton);