import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'UdaciCards:decks'

function initializeWithSampleDecks(){
	const sampleDeck = {
		React: {
			title:'React',
			description:'React',
			cards:[
				{
					question: 'What is React?',
					answer: 'A library for managing user interfaces'
				},
				{
					question: 'Where do you make Ajax requests in React?',
					answer: 'The componentDidMount lifecycle event'
				}
			]
		},
		Javascript: {
			title:'JavaScript',
			description:'Javascript',
			cards:[
				{
					question: 'What is a closure?',
					answer: 'The combination of a function and the lexical environment within which that function was declared.'
				}
			]
		}
	}

	AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(sampleDeck))

	return sampleDeck
}

export function checkDeckResults (decks) {
	console.log(decks)
  return decks === null
    ? initializeWithSampleDecks()
    : JSON.parse(decks)
}