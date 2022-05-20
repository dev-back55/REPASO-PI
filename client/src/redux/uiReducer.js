import { GETAPICHAR, GETEPISODE, SELECTPAG, POSTCREACHAR, FILTERID, GET_CHARS_DETAIL, CLEARCHAR } from './actions'

const initialState = {
    allcharacter: [],
    characterbkp: [],
    characterDb: [],
    allepisode: [],
    character: {},
    pagina: 1
};

export function uiReducer(state = initialState, { type, payload}) {
    switch (type) {
        case GETAPICHAR:
            return { ...state, allcharacter: payload, characterbkp: payload}

        case GETEPISODE:
            return { ...state, allepisode: payload }

        case SELECTPAG:
            return {...state, pagina: payload}
        
        case POSTCREACHAR:
            return {...state,
                allcharacter: [...state.allcharacter, payload],
                characterbkp: [...state.characterbkp, payload],
                characterDb: [...state.characterDb, payload]
            }    
        case FILTERID:
            return { ...state, allcharacter: payload, pagina: 1}    
        
        case GET_CHARS_DETAIL:
            return { ...state, character: payload };

        case CLEARCHAR:
            return {...state,
                     character: {},
                     allcharacter: []
            }
        
        
        default:
            return state;

    }
    
}

module.export={
    uiReducer
}