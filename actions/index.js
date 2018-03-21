export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveDecks (decks) {
	return{
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck (deck) {
	return{
		type: ADD_DECK,
		deck
	}
}

export function addCard (deckTitle, card){
	return{
		type: ADD_CARD,
		deckTitle,
		card
	}
}

export function deleteDeck (deckTitle){
	return{
		type: DELETE_DECK,
		deckTitle
	}
}