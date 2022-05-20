import React, { useEffect, useState } from 'react';
import './CrearChar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisode, postCreaChar } from '../redux/actions';
import { Link, useHistory } from 'react-router-dom';

// validacion
export function validate(char){

  let errors = {};

  if (!/^[a-z ,.'-]+$/i.test(char.name)) {
    errors.name = 'Nombre invalido, no se adminten numeros';
  } else if(!char.name) {
    errors.name = 'Se requiere un Nombre de Personaje'
  }

  if(!char.species){
    errors.species = 'Debe ingresar un valor'
  }

  
  if(!char.origin){
    errors.origin = 'Debe ingresar un valor'
  }
       
  return errors;
}

export const CrearChar = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getEpisode())
  },[dispatch])

  const { allepisode } = useSelector(state => state.ui);
  const [errors, setErrors] = useState({});
  
  const [char, setChar] = useState({
    name:'',
    species: '',
    origin: '',
    image: '',
    created:'',
    selectedEpisode:[]
  })

  function handleChange(e) {
		setChar({
			...char,
			[e.target.name]: e.target.value
		});

    setErrors(validate({
      ...char, 
      [e.target.name]: e.target.value
    }))
	}

        
  function handleSelect(e){
    let hayepisode = char.selectedEpisode.find(epi => epi === e.target.value)
    if (!hayepisode){
      setChar({
        ...char,
        selectedEpisode: [...char.selectedEpisode, e.target.value],
        
      })
    }else alert("Episodio ya seleccionado...!");
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(char, 'submit')
    if(char.name !== '' || char.species !== '' || char.origin !== ''){
        dispatch(postCreaChar(char))
        alert("Personaje Creado con Exito!!")
        setChar({
          name:'',
          species: '',
          origin: '',
          image: '',
          created:'',
          selectedEpisode:[],
        })
    }else alert('Faltan datos no se puede Crear Personaje!') 
  history.push('/home')
  }

  return (
    <div className='container-form'>
        
        <h1>Create Your Character</h1>
        <form className='form' autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label className='form-label'>Name:</label>
                <input className='form-input'
                   type="text"
                   placeholder='nombre'
                   value={char.name}
                   name="name"
                   
                   onChange={(e) => handleChange(e)}
                 />
                 { errors.name && 
                   <p className='error'>{errors.name}</p>
                 }
            </div>
            <div>
                <label className='form-label'>Species:</label>
                <input className='form-input'
                   type="text"
                   placeholder="species"
                   value={char.species}
                   name="species"
                   //required
                   onChange={(e) => handleChange(e)}
                   />
                   {errors.species && (
                   <p className='error'>{errors.species}</p>
                    )}
            </div>
            <div>
                <label className='form-label'>Origin:</label>
                <input className='form-input'
                   type="text"
                   placeholder="origin"
                   value={char.origin} 
                   name="origin"
                   //required
                   onChange={(e) => handleChange(e)}
                   />
                   {errors.origin && (
                   <p className='error'>{errors.origin}</p>
                    )}
            </div>
            <div>
                <label className='form-label'>Created:</label>
                <input className='form-input'
                   type="text"
                   placeholder="created" 
                   value={char.created} 
                   name="created"
                   onChange={(e) => handleChange(e)}
                   />
            </div>
            <div>
                <label className='form-label'>Image:</label>
                <input className='form-input'
                   type="text"
                   placeholder='imagen'
                   value={char.image}
                   name="image"
                   //required
                   onChange={(e) => handleChange(e)}
                 />
            </div>
            <div>
                <label className='form-label'>Episodes</label>
              <select className='form-select'
                    
                   name="selectedEpisode"
                   required
                   onChange={e => handleSelect(e)}
                   >
                     <option>Select Episode</option>
                     {
                        allepisode?.map(epi =>(
                          <option value={epi.name} key={epi.id}>{epi.name}</option>
                          ))

                     }

                </select>     
            </div>
            <div className='form-lista-temp'>
            <ul><li>{char.selectedEpisode.map(e => e + ' - ')}</li></ul>
            </div>
            <div className='container-btn'>
            <Link to='/home'><button className='btn-volver'>Cancel</button></Link>
            <button className='btn-submit' type='submit'>Create Character</button>
            </div>
        </form>


    </div>
  )
}
