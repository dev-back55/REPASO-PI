import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { getapichar, getEpisode } from '../redux/actions';
import { CardChar } from '../component/cardChar';
import Spinner from '../component/Spinner';
import Pagina from '../component/pagina';
import './Home.css';
import Filtrar from '../component/Filtrar';


export const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
        
    dispatch(getapichar());
    
  },[dispatch])

  useEffect(() => {
   dispatch(getEpisode())
  },[dispatch])

  const { allcharacter, pagina } = useSelector(state => state.ui)
  
    let currentPage = 0
    currentPage = pagina
    
  //? paginado de flechas
  const maxpage = Math.ceil(allcharacter?.length / 8)
   
    const charToShow = () => {
        const charShow = allcharacter?.slice(
            (currentPage - 1 ) * 8,            // inicio de slice
            (currentPage - 1 ) * 8 + 8         // final del slice   
        )
        return charShow
    }

  return (
    <>
        <main>
            <div className='container-navbar'>
                <Filtrar />
                <Link to='/characters/create' className='navbar-link'>
                  <button className='btn-create' type='button'>Create</button>
                </Link>  
                <Pagina currentPage={currentPage} maxpage={maxpage}></Pagina>
            </div>
              {               
                 !charToShow()?.length
                 ? <Spinner />
                 : charToShow()?.map(char =>(
                    <CardChar key={char.id} {...char} />
                 ))
              }



        </main>
    </>
  )
}