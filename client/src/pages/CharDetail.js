import React, { useEffect } from 'react';
import './CharDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearChar, getCharDetail } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import Spinner from '../component/Spinner';

export const CharDetail = ({match}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const matchId=match.params.id;

  useEffect(() => {
    dispatch(getCharDetail(matchId))
  },[dispatch, matchId]);
  
  const {character} = useSelector(state => state.ui);
  const { id, name, species, origin, image, created, episode } = character;

  const handlegoback = () => {
    dispatch(clearChar())
    history.goBack()
  }

if(!character) { return <Spinner />}

  return (
        
       <div className='container-details'>  
        <div className='container-btn'>
        <button className='btn-home' onClick={handlegoback}>Back</button>
        </div>
        <div className="container-card" key={id}>
            <div className="card-detail">
              <div className="imgBx">
                <img src={image} alt={name}/>
              </div>

              <div className="contenido-card">
                  <h2>{name}</h2>
                  <div className="peso">
                    <h3>Specie:</h3>
                    <span>{species}</span>
                    <h3>Origin:</h3>
                    <span>{origin}</span>
                    <h3>Created:</h3>
                    <span>{created}</span>
                  </div>
                  <div className="temps">
                    <h3>Episodes:</h3>
                    <p>{episode}</p>
                  </div>
              </div>
            </div>
        </div>
      </div>    
  )    
      
}