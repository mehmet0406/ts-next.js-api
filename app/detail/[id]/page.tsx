import { MovieDetail } from '@/app/Types/MovieDetailResponse'
import { axiosInstance } from '@/app/utils/axiosInstance'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { IoLanguage } from "react-icons/io5"
import { MdDateRange } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import Image from 'next/image'

export default async function page({ params }: { params: Promise<{id: number}> }) {
  let data: MovieDetail | null = null
  const id = (await params).id
  try {
    const res = await axiosInstance.get<MovieDetail>(`/movie/${id}`)
    data = res.data
  } catch (error) {
    console.error("Error fetching movie details:", error)
  }

  if (!data) {
    return (
      <div className="container mx-auto max-w-7xl p-8">
        <h2 className="text-center text-xl">Movie details not found!</h2>
      </div>
    )
  }

  const { original_title, overview, vote_average, original_language, release_date, genres, production_countries, poster_path } = data

  return (
    <div className='container mx-auto max-w-7xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex justify-center'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path || "/fqqoUHpwI4epCGXy4VYqKwG54F6.jpg"}`}
          alt={original_title}
          className='max-w-72 rounded-xl'
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl font-semibold'>{original_title}</h2>
        <p className='text-gray-600'>{overview}</p>

        <p className='flex items-center gap-1'>
          <span>Rating: </span> <FaStar size={16} className='text-yellow-500' /><span>{vote_average}</span>
        </p>

        <div className='flex items-center gap-2'>
          {genres?.map((genre) => (
            <span key={genre.name}>{genre.name} ,</span>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <IoLanguage size={20} /> <span>{original_language}</span>
        </div>

        <div className='flex items-center gap-2'>
          <MdDateRange size={20} /> <span>{release_date}</span>
        </div>

        <div className='flex items-center gap-2'>
          <span><FaLocationDot size={20}/></span>
          {production_countries?.map((country) => (
            <span key={country.name}>{country.name} ,</span>
          ))}
        </div>
      </div>
    </div>
  )
}
