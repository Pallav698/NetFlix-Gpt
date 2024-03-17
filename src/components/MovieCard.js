import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MovieCard = ({poster_path}) => {

  return (
    <div className='w-48 pr-4'>
        <img alt='poster' src={IMG_CDN + poster_path} ></img>
    </div>
  )
}

export default MovieCard