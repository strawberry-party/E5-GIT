import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        top: '0',
        width: '100%'
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textDecoration: 'none',
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    variant="h6"
                    className={classes.title}
                    noWrap
                    component={NavLink} to='/'>
                    카택전
                            </Typography>

                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    onClick={handleMenu}
                    color="inherit"
                    component={NavLink} to='/profile'
                    edge='end'>
                    <AccountCircle />
                </IconButton>

                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    onClick={handleMenu}
                    color="inherit"
                    component={NavLink} to='/notice'
                    edge='end'
                >
                    <NotificationsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default connect(
    null,
    function (dispatch) {
        return {
            onClick: function (mode) {
                dispatch({ type: mode });
            }
        }
    }
)(Header);
