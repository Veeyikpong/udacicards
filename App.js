import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import DeckList from './components/DeckList'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {Constants} from 'expo'
import {TabNavigator, StackNavigator} from 'react-navigation'
import DeckDetails from './components/DeckDetails'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import {white,purple} from './utils/colors'
import {MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons'

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
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>,
      title:'Decks'
    }
  },
  NewDeck:{
    screen:NewDeck,
     navigationOptions:{
      tabBarLabel:'NEW DECK',
      tabBarIcon: ({tintColor}) => <MaterialIcons name='add-circle' size={30} color={tintColor}/>,
      title:'New Deck'
    }
  }
},{
  navigationOptions:{
    headerTintColor:white,
    headerStyle:{
        backgroundColor:purple,
        marginTop:-50,
      },
  },
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios' ? purple:white,
    style:{
      height:56,
      marginBottom:-15,
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
      headerBackTitle: " ",
      headerTintColor:white,
      headerStyle:{
        backgroundColor:purple,
        marginTop:-50,
      }
    }
  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      headerTintColor:white,
      headerStyle:{
        backgroundColor:purple,
        marginTop:-50,
      }
    }
  },
  NewCard:{
    screen: NewCard,
    navigationOptions:{
      title:"Add Card",
      headerTintColor:white,
      headerStyle:{
        backgroundColor:purple,
        marginTop:-50,
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
