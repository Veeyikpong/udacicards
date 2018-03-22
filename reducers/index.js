import {RECEIVE_DECKS,ADD_DECK,ADD_CARD,DELETE_DECK} from '../actions'

function decks(state={}, action){
	const currentDecks = {...state}

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
	    if(currentDecks[action.deckTitle]){
	    	currentDecks[action.deckTitle].cards.push(action.card)
	    }
	    return currentDecks
    	break;
	  case DELETE_DECK:
	    if(currentDecks[action.deckTitle]){
	    	currentDecks[action.deckTitle] = undefined
	    	delete currentDecks[action.deckTitle]
	    }
	    return currentDecks
    	break;
		default:
			return state
	}
}

export default decks