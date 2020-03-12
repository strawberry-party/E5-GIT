import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store'

// import { Ionicons } from ' react-native-vector-icons/Ionicons';

function Counter({value}){
  return <Text>Count:{Value}</Text>
}

const CounterContainer = connect(state => ({value:state.count}))(Counter);




function TestScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Simple Test Screen!</Text>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function RoomScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Room!</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const RoomStack = createStackNavigator();
function RoomStackScreen() {
  return (
    <RoomStack.Navigator>
      <RoomStack.Screen name="Room" component={RoomScreen} />
      <RoomStack.Screen name="Details" component={DetailsScreen} />
    </RoomStack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Room" component={RoomStackScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="test" component={TestScreen} options={{title:() => <CounterContainer/>}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}