import React from 'react'
import {View,Text,StyleSheet,FlatList,Dimensions} from 'react-native'
import {getDecks} from '../utils/api'
import {white} from '../utils/colors'
import {connect} from 'react-redux'
import {receiveDecks} from '../actions'
import Deck from './Deck'
import {AppLoading} from 'expo'
import {clearNotification, setLocalNotification} from '../utils/notifications'

class DeckList extends React.Component{

	componentWillMount(){
		const {dispatch} = this.props

		getDecks()
		.then(decks=>dispatch(receiveDecks(decks)))

		/*
		To make sure to remind user if first time using, without even enter the quiz
		*/
		clearNotification()
		.then(setLocalNotification)
	}

	renderItem = ({item}) => {
		return(
			<Deck selectedDeck={item} title={item.title} cardsCount={item.cards.length} navigation={this.props.navigation}/>
		)
  }

	render(){
		const {decks,navigation} = this.props
	    const listOfDecks = Object.values(decks)

		if(!this.props.decks){
			return <AppLoading/>
		}

		return(
			<View style={styles.container}>
				<FlatList style={styles.list}
					data={listOfDecks}
					extraData={this.state}
					renderItem={this.renderItem}
					keyExtractor={(item,index) => index}
					/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	list:{
		height: Dimensions.get("window").height,
	},
	title: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center'
  },
})

function mapStateToProps (decks) {
	console.log(decks)
  return {decks}
}

export default connect(mapStateToProps)(DeckList)