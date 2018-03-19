import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import DeckList from './components/DeckList'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {Constants} from 'expo'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DeckDetails from './components/DeckDetails'
import {white,purple} from './utils/colors'

function UdaciStatusBar({backgroundColor, ...props}){
  return(
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  Decks:{
    screen:DeckList,
     navigationOptions:{
      tabBarLabel:'DECKS',
    }
  },
  NewDeck:{
    screen:DeckList,
     navigationOptions:{
      tabBarLabel:'NEW DECK',
    }
  }
},{
  navigationOptions:{
    header:null
  },
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios' ? purple:white,
    style:{
      height:56,
      backgroundColor: Platform.OS === 'ios'?white:purple,
      shadowOffset:{
        width:0,
        height:3,
      },
      shadowRadius:6,
      shadowOpacity:1
    }
  }
})

const MainNavigator = StackNavigator({
  Home:{
    screen: Tabs
  },
  DeckDetails:{
    screen: DeckDetails,
    navigationOptions:{
      headerTintColor:white,
      headerStyle:{
        backgroundColor:purple
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
      <View style={{flex:1}}>
      <UdaciStatusBar backgroundColor='#000000' barStyle='light-content'/>
        <MainNavigator/>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
