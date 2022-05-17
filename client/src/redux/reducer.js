import { GETAPICHAR, GETEPISODE } from './actions'

const initialState = {
    allcharacter: [],
    characterbkp: [],
    characterDb: [],
    allepisode: [],
    character: {}
};

export default function rootReducer(state = initialState, { type, payload}) {
    switch (type) {
        case GETAPICHAR:
            return { ...state, allcharacter: payload, characterbkp: payload}

        case GETEPISODE:
            return { ...state, allepisode: payload }
    default:
        return state;

    }
    
}

