import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {white,black,gray} from '../utils/colors'

class Deck extends React.Component{

	render(){
		const {selectedDeck,navigation} = this.props
		return(
			<View>
			<TouchableOpacity style={styles.container} onPress={()=>navigation.navigate(
				'DeckDetails',
				{deckTitle:selectedDeck.title}
				)}>
				<Text style={styles.title}>
					{selectedDeck.title}
				</Text>
				<Text style={styles.cardsCount}>
					{selectedDeck.cards.length} cards
				</Text>
			</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor: white,
		padding:50,
		borderColor:black,
		borderWidth:1,
		borderRadius:3,
		borderBottomWidth:0,
		shadowRadius:3,
		shadowOpacity:0.8,
		shadowColor:'rgba(0,0,0,0.24)',
		shadowOffset:{
			width:0,
			height:3,
		}
	},
	title:{
		fontSize:35,
	},
	cardsCount:{
		fontSize:20,
		color:gray,
	}
})

export default Deck