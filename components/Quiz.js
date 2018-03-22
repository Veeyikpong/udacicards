import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Platform} from 'react-native'
import {gray,red,green,white,lightBlue,warmBlue,darkBlue} from '../utils/colors'
import FlipCard from 'react-native-flip-card'
import {EvilIcons} from '@expo/vector-icons'
import {clearNotification, setLocalNotification} from '../utils/notifications'

class Quiz extends React.Component{

	static navigationOptions = ({navigation}) => {
		const {deck} = navigation.state.params

		return{
			title: `${deck.title} Quiz`
		}
	}

	state={
		currentCardIndex:0,
		correctCardCount:0,
		cardFlip:false,
		quizCompleted:false,
	}

	flipCard(){
		const {cardFlip} = this.state

		this.setState({
			cardFlip:!cardFlip
		})
	}

	correct(){
		const {correctCardCount} = this.state

		this.setState({
			correctCardCount:correctCardCount+1
		})

		this.nextCard()
	}

	nextCard(){
		const {currentCardIndex} = this.state
		const {cards} = this.props.navigation.state.params.deck

		if((currentCardIndex+1)<cards.length){
			this.setState({
				currentCardIndex:currentCardIndex+1,
				cardFlip:false
			})
		}else{
			clearNotification()
			.then(setLocalNotification)

			this.setState({
				quizCompleted:true
			})
		}
	}

	done(){
		this.props.navigation.goBack()
	}

	render(){
		const {navigation} = this.props
		const {cards} = navigation.state.params.deck
		const {currentCardIndex,cardFlip,quizCompleted,correctCardCount} = this.state

		if(quizCompleted){
			return(
				<View style={styles.completedContainer}>
					<EvilIcons name='like' size={150} color={darkBlue}/>
					<Text style={styles.congratulationText}>Congratulations!</Text>
					<Text style={styles.completedText}>You've completed the quiz.</Text>
					<Text style={styles.correctText}>Correct Percentage:</Text>
					<Text style={styles.correctValueText}>{(correctCardCount/cards.length*100).toFixed(2)}%</Text>
					<Text style={styles.correctText}>Correct Questions:</Text>
					<Text style={styles.correctValueText}>{correctCardCount} out of {cards.length}</Text>
					<TouchableOpacity style={styles.doneBtn} onPress={()=>this.done()}>
						<Text style={styles.flipCardBtnText}>Done</Text>
					</TouchableOpacity>
				</View>
			)
		}

		return(
			<View style={styles.container}>
				<View style={styles.top}>
					<Text style={styles.topText}>
						{currentCardIndex+1} / {cards.length}
					</Text>
				</View>
				<View style={styles.content}>
					<FlipCard
						style={styles.card}
						friction={6}
						perspective={2000}
						flipHorizontal={true}
						flipVertical={false}
						flip={cardFlip}
						clickable={false}
						onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}>

					  {/* Face Side */}
						<View style={styles.content}>
							<Text style={styles.contentText}>
								{cards[currentCardIndex].question}
							</Text>
							<TouchableOpacity style={styles.flipCardBtn} onPress={()=>this.flipCard()}>
								<Text style={styles.flipCardBtnText}>Answer</Text>
							</TouchableOpacity>
						</View>

					  {/* Back Side */}
					  <View style={styles.content}>
							<View style={styles.questionAnswer}>
								<Text style={styles.contentText}>
									{cards[currentCardIndex].answer}
								</Text>
								<TouchableOpacity style={styles.flipCardBtn} onPress={()=>this.flipCard()}>
									<Text style={styles.flipCardBtnText}>Question</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.bottom}>
								<TouchableOpacity style={styles.correctBtn} onPress={()=>this.correct()}>
									<Text style={styles.btnText}>Correct</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.incorrectBtn} onPress={()=>this.nextCard()}>
									<Text style={styles.btnText}>Incorrect</Text>
								</TouchableOpacity>
							</View>
						</View>
					</FlipCard>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:lightBlue,
	},
	completedContainer:{
		flex:1,
		backgroundColor:lightBlue,
		alignItems:'center',
		paddingTop:50,
	},
	top:{
		justifyContent:'flex-start',
		alignSelf:'stretch',
		backgroundColor:warmBlue,
		padding:10,
	},
	topText:{
		fontSize:20,
		fontWeight:'bold',
		color:white
	},
	card:{
		borderColor:'transparent',
		padding:10,
	},
	content:{
		justifyContent:'center',
		alignItems:'center',
		flex:2,
	},
	contentText:{
		fontSize:35,
		fontWeight:'bold'
	},
	questionAnswer:{
		flex:2,
		justifyContent:'center',
		alignItems:'center'
	},
	bottom:{
		flex:1,
		justifyContent:'flex-end',
	},
	flipCardBtn:{
		backgroundColor:warmBlue,
		borderColor: 'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:5,
		paddingRight:30,
		paddingLeft:30,
		marginBottom:10,
		alignSelf:'baseline',
		alignSelf:'center',
		marginTop:10
	},
	flipCardBtnText:{
		color:white,
		fontSize:20,
		fontWeight:'bold'
	},
	correctBtn:{
		backgroundColor:green,
		borderColor: 'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:10,
		paddingRight:50,
		paddingLeft:50,
		marginBottom:10,
	},
	incorrectBtn:{
		backgroundColor:red,
		borderColor: 'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:10,
		paddingRight:50,
		paddingLeft:50,
		marginBottom:10,
	},
	btnText:{
		color:white,
		fontSize:25,
		alignSelf:'center',
		fontWeight:'bold'
	},
	congratulationText:{
		fontSize:30,
		color:darkBlue,
		fontWeight:'bold'
	},
	completedText:{
		fontSize:20,
		color:darkBlue,
		fontWeight:'bold'
	},
	correctText:{
		marginTop:50,
		color:green,
		fontSize:25,
		fontWeight:'bold'
	},
	correctValueText:{
		color:green,
		fontSize:35,
		fontWeight:'bold'
	},
	doneBtn:{
		backgroundColor:warmBlue,
		borderColor: 'transparent',
		borderRadius:10,
		borderWidth:1,
		padding:10,
		paddingLeft:30,
		paddingRight:30,
		marginBottom:10,
		alignSelf:'baseline',
		alignSelf:'center',
		marginTop:50
	},
})

export default Quiz