import {AsyncStorage} from 'react-native'
import {DECK_STORAGE_KEY, checkDeckResults} from './_decks'

export function getDecks(){

	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then(checkDeckResults)
}