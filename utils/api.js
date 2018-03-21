import {AsyncStorage} from 'react-native'
import {DECK_STORAGE_KEY, checkDeckResults} from './_decks'

export function getDecks(){
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then(checkDeckResults)
}

export function addNewDeck(deck){
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck))
}

export function addNewCard(deckTitle, card){
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then((results)=>{
			const decks = JSON.parse(results)
			decks[deckTitle].cards.push(card)

			AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
		})
}

export function deleteDeck(deleteDeck){
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then((results)=>{
			const decks = JSON.parse(results)
			console.log(decks[deleteDeck.title])

			decks[deleteDeck.title] = undefined
			delete decks[deleteDeck.title]
			AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
		})
}