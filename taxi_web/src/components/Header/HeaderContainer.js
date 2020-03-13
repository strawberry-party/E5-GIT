import React from 'react';
import Header from './Header'
import {makeStyles,} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    appBarSpacer: theme.mixins.toolbar,
    title: {
        flexGrow: 1
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
}));


export default function HeaderContainer(){
    const classes = useStyles();

    return(
        <div>
            <Header/>
        </div>
    )
}