import React from "react";
import { Dimensions } from "react-native";
import { View,Text,Header, Left, Button, Icon, Body, Title, Right, Content, Container, Footer, FooterTab } from 'native-base';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends React.Component {


    constructor(props) {
        super(props);
    
        this.state = {
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        };

        console.log("CONSTRUcTOR INVOKED.");
      }
    
      onMapTap(e) {
          console.log("EVENT: ",e);
          alert(e);
      }

      onMarkerPress(e) {
          console.log("MARKER PRESSED!");
        alert("MARKER"+e);
      }
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

                <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    style={{flex:1}}
                    onPress={e => console.log(e.nativeEvent)}

                    onMarkerPress={() => this.onMarkerPress.bind(this)}
                >
                    <MapView.Marker
                    title="This is a title"
                    description="This is a description"
                    coordinate={this.state.region}
                    onPress={e => console.log(e.nativeEvent)}
                    />
                </MapView>


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