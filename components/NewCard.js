import React from 'react'
import {View,Text,KeyboardAvoidingView,TouchableWithoutFeedback,TextInput,TouchableOpacity,StyleSheet,Keyboard,Alert} from 'react-native'
import {black,darkBlue,white} from '../utils/colors'
import {addNewCard} from '../utils/api'
import {addCard} from '../actions'
import {connect} from 'react-redux'

class NewCard extends React.Component{

	state={
		question:'',
		answer:''
	}

	addCard(){
		const {question,answer} = this.state
		const {deck} = this.props.navigation.state.params
		const {dispatch} = this.props

		if(question === '' && answer === ''){
			Alert.alert('Please enter question and answer for this card')
		}
		else if(question === ''){
			Alert.alert('Please enter question for this card')
		}
		else if(answer === ''){
			Alert.alert('Please enter answer for this card')
		}else{
			const card = {
				question: question,
				answer: answer,
			}

			addNewCard(deck.title,card)
			.then(()=>dispatch(addCard(deck.title,card)))
			.then(this.showSuccessMessage)
		}
	}

	showSuccessMessage = () => {
		Alert.alert(
		  'New card added successfully!',
		  '',
		  [
		    {text: 'OK', onPress: () => {this.props.navigation.goBack()}},
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
						<TextInput style={styles.textInput} placeholder="Question" onChangeText={(text)=>{this.setState({question:text})}}/>
						<TextInput style={styles.textInput} placeholder="Answer" onChangeText={(text)=>{this.setState({answer:text})}}/>
						<TouchableOpacity style={styles.submitBtn} onPress={()=>this.addCard()}>
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
		justifyContent:'center'
	},
	title:{
		fontSize:35,
		color:black,
		marginBottom:10,
		fontWeight:'bold',
		alignSelf:'center'
	},
	textInput:{
		padding:10,
		fontSize:20,
		borderColor:black,
		borderWidth:1,
		borderRadius:10,
		margin:10,
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

export default connect(mapStateToProps,null)(NewCard)