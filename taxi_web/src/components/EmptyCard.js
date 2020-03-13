import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

var cardStyle = {
    display: 'block',
    width: '100%',
    height: '5vw'
}

export default function HiddenCard() {
    return (
        <Card style={cardStyle}>
            <CardHeader/>
        </Card>
    );
}

