import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Forecast extends Component{
    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.bigText}>
            {this.props.main}
          </Text>
          <Text style={styles.mainText}>
            Current conditions: {this.props.description}
          </Text>
          <Text style={styles.bigText}>
            {this.props.temp}ºF
          </Text>
        </View> 
      );
    };
  }

  const styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
  });
  
  export default Forecast;