import React, {Component} from 'react';
import Forecast from './Forecast';
const API_KEY = '894c0c1d03546d1843b5efd334d6e479';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class WeatherProject extends Component{
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      forecast: null
    };
  }
  _handleTextChange(event){
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`).then((response) => response.json()).then((responseJSON) => {
      this.setState({
        forecast: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp
        }
      });
    }).catch((error) => {
      console.warn(error);
    });
  }
  render() {
    var content = null;
    if (this.state.forecast!== null){
      content = <Forecast 
                  main = {this.state.forecast.main}
                  description = {this.state.forecast.description}
                  temp = {this.state.forecast.temp}/>;
    }
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./image/cloudy.jpg')}
          resizeMode='cover'
          style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current Weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  onSubmitEditing={(event) => this._handleTextChange(event)}>
                </TextInput>
              </View>
            </View>
            {content}
          </View>
        </ImageBackground>
      </View>
    );
  };
}
const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
    padding: 0
  },
  mainText:{
    fontSize:baseFontSize,
    color: '#FFFFFF'
  }
});
export default WeatherProject;