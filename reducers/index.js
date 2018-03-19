import {RECEIVE_DECKS} from '../actions'

function decks(state={}, action){
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
	          ...state,
	          ...action.decks
	        }
	        break;
		default:
			return state
	}
}

export default decks