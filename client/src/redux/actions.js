
const urlChar = 'http://localhost:3001/characters';
const urlEpi = 'http://localhost:3001/episodes';

// TIPOS DE ACCIONES

export const GETAPICHAR = 'GETAPICHAR';
export const GETEPISODE = 'GETEPISODE';


export function getapichar() {
    return async function(dispatch){
        return await fetch(urlChar)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GETAPICHAR", payload: json});
        });
    };
}

export function getEpisode() {
    return async function(dispatch) {
        return await fetch(urlEpi)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GETEPISODE", payload: json});
        });
    };
}

