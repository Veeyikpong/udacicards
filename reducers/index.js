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
	    	return Object.values(state).map(deck=>{
	    		if(deck.title !== action.deckTitle){
	    			return deck;
	    		}

	    		if(deck.title === action.deckTitle){
	    			return {
	    				...deck,
		    			cards: [...deck.cards,action.card]
		    		}
	    		}
	    	});
	    	break;
	    case DELETE_DECK:
	    	return Object.values(state).filter(deck=>deck.title!==action.deckTitle)
		default:
			return state
	}
}

export default decks