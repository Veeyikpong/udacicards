import {RECEIVE_DECKS,GET_DECK_BY_TITLE,ADD_DECK,ADD_CARD,DELETE_DECK} from '../actions'

function decks(state={}, action){
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
	          ...state,
	          ...action.decks
	        }
	        break;
	    case GET_DECK_BY_TITLE:
		    return Object.values(state).map(deck=>{
		    		    	console.log('DECK',deck.title)
		    		    	console.log('GETDECK',action.deckTitle)
		    	    		if(deck.title === action.deckTitle){
		    	    			return{
		    	    				...state,
		    	    				deck: deck
		    	    			}
		    	    		}
		    	    	});
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