import axios from 'axios';
const urlChar = 'http://localhost:3001/characters';
const urlEpi = 'http://localhost:3001/episodes';

// TIPOS DE ACCIONES

export const GETAPICHAR = 'GETAPICHAR';
export const GETEPISODE = 'GETEPISODE';
export const SELECTPAG = 'SELECTPAG';
export const POSTCREACHAR = 'POSTCREACHAR';
export const FILTERID = 'FILTERID';
export const GET_CHARS_DETAIL = "GET_CHARS_DETAIL";
export const CLEARCHAR = 'CLEARCHAR';

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

export function selectPag(payload){
    return {
      type: SELECTPAG,
      payload
    }
}

export function postCreaChar(char){
    return async function(dispatch){
        
        const response = await axios.post(urlChar, char);
        char = response.data
        dispatch({type: 'POSTCREACHAR', payload: char});
    }
}

export function filterId(chars, value){
    let charsFilterById = []
    charsFilterById = [...chars]
    
      if(value === 'All'){
          charsFilterById = [...chars]
      }
  
      if(value === 'DB'){
        charsFilterById = chars?.filter(elem=>typeof elem.id==='string')
      }
  
      if(value === 'Api'){
        charsFilterById = chars?.filter(elem=>typeof elem.id==='number')
      }
      
     
  
      if(!charsFilterById.length){
              alert('No hay personajes en la Base de Datos');
        charsFilterById = [...chars]
      }
      
      return function (dispatch) {
        dispatch({type: FILTERID, payload: charsFilterById}) 
      }
}

export function getCharDetail(id) {
    return async function(dispatch) {
      return await fetch(`${urlChar}/${id}`)
      .then(response => response.json())
      .then(json => {
      dispatch({ type: "GET_CHARS_DETAIL", payload: json });
      });
    };
}

export function clearChar(){
  
   return function (dispatch) {
     dispatch({type: CLEARCHAR}) 
   }
}