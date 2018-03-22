import {RECEIVE_DECKS,ADD_DECK,ADD_CARD,DELETE_DECK} from '../actions'

function decks(state={}, action){
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
	        ...state,
	        ...action.decks
	      }
	    break;
	  case ADD_DECK:
    	return{
    		...state,
    		...action.deck
    	}
    	break;
	  case ADD_CARD:
	    const currentDecks = {...state}
	    if(currentDecks[action.deckTitle]){
	    	currentDecks[action.deckTitle].cards.push(action.card)
	    }
	    return currentDecks
    	break;
	  case DELETE_DECK:
    	return Object.values(state).filter(deck=>deck.title!==action.deckTitle)
		default:
			return state
	}
}

export default decks