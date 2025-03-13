import React from 'react'
import { FaCirclePlay, FaStar } from 'react-icons/fa6'
import { CartType } from '../Types/MovieResponse'
import Link from 'next/link'
import Image from 'next/image'

export default function Cart({
    id,
    poster_path,
    original_name,
    original_language,
    vote_average,
    first_air_date,
    original_title,
    release_date,
}: CartType): React.JSX.Element {
    return (
        <Link href={`${original_name ? `details/tv/${id}` : `details/movie/${id}`}`} className='bg-white p-4 shadow-md rounded-2xl max-w-80 group cursor-pointer'>
            <div className='relative'>
                <div className='rounded-xl overflow-hidden'>
                    <Image
                     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt="" 
                      className='h-80 w-80 object-fill  group-hover:scale-105 transition-all ease-linear'
                      width={500}
                      height={500}
                      priority={true}
                      />
                </div>
                <FaCirclePlay size={50} className='absolute max-w-36 -bottom-10 right-0 text-zinc-800' />
            </div>
            <div className='p-3'>
                <p className='font-semibold text-xl pr-8'>{original_name || original_title}</p>
                <div className='flex text-center justify-between pt-6'>
                    <div>
                        <p className='text-gray-500'>Lang</p>
                        <p>{original_language}</p>
                    </div>
                    <div>
                        <p className='text-gray-500'>Rating</p>
                        <p className='flex items-center gap-1 text-yellow-500 font-semibold'>
                            <span><FaStar size={16}/></span><span>{vote_average}</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-gray-500'>Date</p>
                        <p>{first_air_date || release_date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
