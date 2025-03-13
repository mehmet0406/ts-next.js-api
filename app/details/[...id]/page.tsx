import { MovieDetail, TvDetail } from '@/app/Types/MovieDetailResponse';
import { axiosInstance } from '@/app/utils/axiosInstance';
import Image from 'next/image';
import React from 'react';
import { FaLocationDot, FaStar } from 'react-icons/fa6';
import { IoLanguage } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';

export default async function Page({ params }: { params: Promise<{ id: string[] }> }) {
  const id = (await params).id
  let data: MovieDetail | TvDetail | null = null
  try {
    if (id[0] === "tv") {
      const res = await axiosInstance.get<TvDetail>(`${id[0]}/${id[1]}`)
      data = res.data
    } else {
      const res = await axiosInstance.get<MovieDetail>(`${id[0]}/${id[1]}`)
      data = res.data
    }
  } catch (e: unknown) {
    console.log('HATA VAR', e)
  }
  if (!data) {
    return (
      <div className="container mx-auto max-w-7xl p-8 h-[calc(100vh-96px)] flex justify-center items-center">
        <h2 className="text-center text-xl">Movie details not found!</h2>
      </div>
    )
  }

  const title = id[0] === "tv" ? (data as TvDetail).original_name : (data as MovieDetail).original_title;
  const releaseDate = id[0] === "tv" ? (data as TvDetail).first_air_date : (data as MovieDetail).release_date;

  const { overview, vote_average, original_language, genres, production_countries, poster_path } = data
  return (
    <div className='container mx-auto max-w-7xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='flex justify-center'>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path || "/fqqoUHpwI4epCGXy4VYqKwG54F6.jpg"}`}
          alt={title}
          className='max-w-72 rounded-xl'
          width={500}
          height={500}
          priority={true}
        />
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
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
          <MdDateRange size={20} /> <span>{releaseDate}</span>
        </div>

        <div className='flex items-center gap-2'>
          <span><FaLocationDot size={20} /></span>
          {production_countries?.map((country) => (
            <span key={country.name}>{country.name} ,</span>
          ))}
        </div>
      </div>
    </div>
  )
}
