import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {NavigationActions} from 'react-navigation'
import {darkBlue,white} from '../utils/colors'

class Splash extends React.Component{

	componentDidMount(){
		/*Put a 1 seconds delay to display splash screen*/
		setTimeout( () => {
     		this.navigateToHomescreen();
  		},1000);
	}

	navigateToHomescreen(){
		this._navigateTo('Home')
	}

	_navigateTo = (routeName: string) => {
	  const actionToDispatch = NavigationActions.reset({
	    index: 0,
	    actions: [NavigationActions.navigate({ routeName })]
	  })

	  this.props.navigation.dispatch(actionToDispatch)
	}

	render(){
		return(
			<View style={styles.container}>
				<MaterialCommunityIcons name='cards-playing-outline' size={80} color={white}/>
				<Text style={styles.text}>UdaciCards</Text>
				<Text style={styles.text}>Developed by Pong Vee Yik</Text>
				<Text style={styles.text}>@ Udacity React Programme</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:darkBlue,
		justifyContent:'center',
		alignItems:'center'
	},
	text:{
		color:white,
		fontSize:20,
		fontWeight:'bold'
	}
})

export default Splash