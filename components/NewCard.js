import React from 'react'
import {View,Text,KeyboardAvoidingView,TouchableWithoutFeedback,TextInput,TouchableOpacity,StyleSheet,Keyboard} from 'react-native'
import {black,darkBlue,white} from '../utils/colors'

class NewCard extends React.Component{

	state={
		question:'',
		answer:''
	}

	render(){
		return(
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				{/*TouchableWithoutFeedback here is to auto dismiss keyboard when user press outside of the textinput, improve user experience alot :)*/}
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View>
						<TextInput style={styles.textInput} placeholder="Question" onChangeText={(text)=>{this.setState({question:text})}}/>
						<TextInput style={styles.textInput} placeholder="Answer" onChangeText={(text)=>{this.setState({answer:text})}}/>
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

export default NewCard