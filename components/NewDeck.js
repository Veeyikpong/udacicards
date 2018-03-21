import React from 'react'
import {Text,View,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native'
import {black,darkBlue,white} from '../utils/colors'
import {addNewDeck} from '../utils/api'
import {connect} from 'react-redux'
import {addDeck} from '../actions'

class NewDeck extends React.Component{

	state={
		deckTitle:''
	}

	addNewDeck = () => {
		const {dispatch} = this.props
		const deckTitle = this.state.deckTitle
		const decks = this.props.decks
		var foundDeckWithSameTitle = false

		/*Make sure there is no duplicate title / key in the decks*/
		Object.keys(decks).map((deck)=>{
		if(decks[deck].title === deckTitle){
				foundDeckWithSameTitle = true
			}
		})

		if(foundDeckWithSameTitle){
			Alert.alert('Deck with same title already exist. Please use another title.','')
		}
		else{
			if(deckTitle === ''){
				Alert.alert('Please enter deck title')
			}else{
				const newDeck = {
					[deckTitle]:{
						title:deckTitle,
						cards:[],
					}
				}

				addNewDeck(newDeck)
				.then(()=>dispatch(addDeck(newDeck)))
				.then(this.showSuccessMessage)
				.then(Keyboard.dismiss())
			}
		}
	}

	showSuccessMessage = () => {

		Alert.alert(
		  'New Deck Added successfully!',
		  '',
		  [
		    {text: 'OK', onPress: () => {this.props.navigation.navigate('Decks')}},
		  ],
		  { cancelable: false }
		)
	}

	render(){
		return(

			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				{/*TouchableWithoutFeedback here is to auto dismiss keyboard when user press outside of the textinput, improve user experience alot :)*/}
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View>
						<Text style={styles.helloText} >Hello</Text>
						<Text style={styles.title} >What is the title of your new deck?</Text>
						<TextInput style={styles.deckTextInput} placeholder="Deck Title" onChangeText={(text)=>{this.setState({deckTitle:text})}}/>
						<TouchableOpacity style={styles.submitBtn} onPress={this.addNewDeck}>
							<Text style={styles.btnText}>Submit</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginRight:30,
		marginLeft:30,
		justifyContent:'center',
	},
	helloText:{
		fontSize:50,
		color:darkBlue,
		marginBottom:10,
		fontWeight:'bold',
		alignSelf:'center'
	},
	title:{
		fontSize:35,
		color:black,
		marginBottom:10,
		fontWeight:'bold',
		alignSelf:'center'
	},
	deckTextInput:{
		padding:10,
		fontSize:30,
		borderColor:black,
		borderWidth:1,
		borderRadius:10,
	},
	submitBtn:{
		padding:10,
		backgroundColor:darkBlue,
		alignSelf:'center',
		borderRadius:10,
		marginTop:20,
	},
	btnText:{
		color:white,
		fontSize:30,
	}
})

function mapStateToProps (decks) {
  return {decks}
}

export default connect(mapStateToProps)(NewDeck)