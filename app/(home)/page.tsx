import React from 'react'
import { axiosInstance } from '../utils/axiosInstance'
import { TvResponse } from '../Types/MovieResponse'
import Cart from '../components/Cart';
export default async function page() {
  let data: TvResponse[] = []
  try {
    const res = await axiosInstance.get<{ results: TvResponse[] }>("/discover/tv")
    data = res.data.results
  } catch (error:unknown){
    throw error
  }
  return (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center gap-5'>
  {data.map((item)=>(
    <Cart 
    key={item.id}
    id={item.id}
    poster_path={item.poster_path}
    original_name={item.original_name}
    original_language={item.original_language}
    vote_average={item.vote_average}
    first_air_date={item.first_air_date}
    original_title=''
    release_date=''
    />
  ))}
</div>

  )
}
