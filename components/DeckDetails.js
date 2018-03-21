import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native'
import {connect} from 'react-redux'
import {black,gray,white,darkBlue,red,warmBlue} from '../utils/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {deleteDeck as deleteDeckAPI}  from '../utils/api'
import {deleteDeck} from '../actions'

class DeckDetails extends React.Component{

	static navigationOptions = ({navigation}) => {
		const {deck} = navigation.state.params

		return{
			title: `${deck.title}`
		}
	}

	addCard = (deck) => {
		this.props.navigation.navigate(
			'NewCard',
			{deck:deck}
		)
	}

	startQuiz = (deck) => {
		if(deck.cards.length <= 0){
			Alert.alert('No cards in this deck. Please add card before you start the quiz.')
		}else{
			this.props.navigation.navigate(
				'Quiz',
				{deck:deck}
			)
		}
	}

	deleteDeck = (deck) => {
		const {dispatch} = this.props

		Alert.alert(
		  'Confirm to delete deck?',
		  '',
		  [
		  	{text: 'Cancel', onPress: () => {}},
		    {text: 'OK', onPress: () => {
		    	deleteDeckAPI(deck)
				.then(()=>dispatch(deleteDeck(deck.title)))
				.then(this.props.navigation.goBack())
		    }},
		  ],
		  { cancelable: false }
		)

	}

	render(){
		const {navigation} = this.props
		const {deck} = navigation.state.params

		return(
			<View style={styles.container}>
				<View style={styles.topPart}>
					<MaterialCommunityIcons
						style={styles.icon}
						name={'cards'}
						color={black}
						size={80}
					/>
					<Text style={styles.deckTitle}>
						{deck.title}
					</Text>
					<Text style={styles.cardsCount}>
						{deck.cards.length} cards
					</Text>
				</View>
				<View style={styles.bottomPart}>
					<TouchableOpacity style={styles.addCardBtn} onPress={()=>this.addCard(deck)}>
						<Text style={styles.addCardBtnText}>Add Card</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.startQuizBtn} onPress={()=>this.startQuiz(deck)}>
						<Text style={styles.startQuizBtnText}>Start Quiz</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.deleteDeckBtn} onPress={()=>this.deleteDeck(deck)}>
						<Text style={styles.deleteDeckBtnText}>Delete this deck</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	topPart:{
		flex:2,
		justifyContent:'center'
	},
	bottomPart:{
		flex:1,
		justifyContent:'center'
	},
	icon:{
		alignSelf:'center'
	},
	deckTitle:{
		fontSize:40,
		fontWeight:'bold',
		alignSelf:'center',
		marginBottom:10
	},
	cardsCount:{
		fontSize:30,
		color:gray,
		alignSelf:'center'
	},
	addCardBtn:{
		backgroundColor:warmBlue,
		borderColor:'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:10,
		paddingRight:30,
		paddingLeft:30,
		marginBottom:10,
	},
	addCardBtnText:{
		color:white,
		fontSize:25,
		alignSelf:'center'
	},
	startQuizBtn:{
		backgroundColor:black,
		borderColor:'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:10,
		paddingRight:30,
		paddingLeft:30,
	},
	startQuizBtnText:{
		color:white,
		fontSize:25,
		alignSelf:'center'
	},
	deleteDeckBtn:{
		backgroundColor:red,
		borderColor:'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:10,
		paddingRight:30,
		paddingLeft:30,
		marginTop:50,
	},
	deleteDeckBtnText:{
		color:white,
		fontSize:25,
		alignSelf:'center'
	}
})


function mapStateToProps (decks) {
  return {decks}
}

export default connect(mapStateToProps,null)(DeckDetails)