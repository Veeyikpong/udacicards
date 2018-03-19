import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

class DeckDetails extends React.Component{

	static navigationOptions = ({ navigation }) => ({
    	title: `${navigation.state.params.title}`,
     	headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
    });

	render(){
		const {navigation} = this.props

		return(
			<View>
			<Text>
				Deck details
			</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({

})
export default DeckDetails