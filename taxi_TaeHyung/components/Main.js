import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Item, Form, Label, Input, Container, Header, Title, Content, Footer, FooterTab, Fab } from 'native-base';
import RoomList from './RoomList';
import MyRoomList from './MyRoomList';
import CreateRoom from './CreateRoom';
import Room from './Room';
import Create from './Create';
import Back from './Back';

class Main extends Component {
    render() {
        var article = null;
        var fab = null;
        var foot = null;
        if (this.props.mode === 'MAIN'){
            article = 
                <View>
                    <MyRoomList />
                    <RoomList />
                </View>;     
            fab = <CreateRoom />
        } else if (this.props.mode === 'READ'){
            article = <Room />
            fab = <Back />
        } else if (this.props.mode === 'CREATE'){
            article = <Create />
            fab = <Back />
        }
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>카택전에 오신것을 환영합니다!</Title>
                    </Body>
                </Header>
                <Content>
                    {article}
                    {fab}
                </Content>
                <Footer>
                    <FooterTab>
                        {foot}
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default connect(
    function(state){
        return{
            rooms: state.rooms,
            selected_id: state.selected_id,
            mode: state.mode
        }
    }
)(Main)

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});