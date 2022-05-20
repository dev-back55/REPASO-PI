import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterId } from '../redux/actions';
import './Filtrar.css';

const Filtrar = () => {

    const dispatch = useDispatch();
    const { characterbkp } = useSelector(state => state.ui);
    

    function handleFilterId(e){
      
        dispatch(filterId(characterbkp, e.target.value))
    }


  return (
    <div className='container-api-db'>
        <label>Characters : </label>
        <select onChange={e => handleFilterId(e)}>
            <option value='All'>All</option>
            <option value='Api'>Api</option>
            <option value='DB'>Created DB</option>
        </select>
    </div>
  )
}

export default Filtrar