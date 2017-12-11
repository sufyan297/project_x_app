import React from "react";
import { } from "react-native";
import { View,Text,Header, Left, Button, Icon, Body, Title, Right, Content, Container, Footer, FooterTab } from 'native-base';


export default class Map extends React.Component {
    render() {   
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                <Text>
                    This is Content Section
                </Text>
                </Content>
                <Footer>
                <FooterTab>
                    <Button full>
                    <Text>Footer</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
        );
    }        
}