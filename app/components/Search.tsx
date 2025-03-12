'use client'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { axiosInstance } from '../utils/axiosInstance'
import { SearchResponse } from '../Types/MovieResponse'
import { FaStar } from 'react-icons/fa6'
import Link from 'next/link'
import Image from 'next/image'

export default function Search() {
    const [value, setValue] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<SearchResponse[]>([])
    const ref = useRef<HTMLDivElement>(null)
    const [showResults, setShowResults] = useState<boolean>(false)
    const SearchData = async () => {
        setLoading(true)
        setShowResults(true)
        try {
            const res = await axiosInstance.get<{ results: SearchResponse[] }>(`/search/movie?query=${value}`)
            setData(res.data.results)
        } catch (error: unknown) {
           if(error instanceof Error){
            console.error("Hata oluştu:", error.message);
           }
        } finally {
            setLoading(false)
        }
    };

    const OnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        await SearchData()
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setShowResults(false)
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [])
    return (
        <div className='px-8 w-full max-w-xl'>
            <div className='py-4 relative'>
                <div className='border-2 border-gray-300 rounded-lg overflow-hidden flex items-center relative bg-white' >
                    <input
                        type="text"
                        value={value}
                        onChange={OnChange}
                        className='border-none focus:outline-none p-2 w-full bg-white'
                        placeholder='Search for movies...'
                    />
                    <button className='w-1/6 flex justify-center cursor-pointer' onClick={SearchData}>
                        <HiOutlineMagnifyingGlass size={25} />
                    </button>
                </div>

                {showResults && <div ref={ref} className='bg-white rounded-xl max-h-72 z-10 overflow-y-auto absolute shadow-2xl w-full'>
                    {loading ? (
                        <div className='text-center py-4'>Yükleniyor...</div>
                    ) : (data.length === 0 && value.trim() !== '') && (
                        <div className="text-center py-4">Sonuç yok</div>
                    )}
                    {data?.map((item) => (
                        <Link href={`/detail/${item.id}`} key={item.id} className='flex gap-5 rounded-b-2xl border-b-3 border-gray-300 p-3 group'>
                            <Image
                                src={`${item.backdrop_path === null ? '/images/not-image.png' : `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}`}
                                alt=""
                                className='w-20 rounded-lg object-cover group-hover:scale-105 transition-all ease-linear'
                                width={500}
                                height={500}
                            />
                            <div className=' flex flex-col justify-between font-semibold'>
                                <p className='text-xl'>{item.original_title}</p>
                                <p className='flex items-center gap-1 text-yellow-500'>
                                    <span className='text-gray-500'>Rating: </span> <span><FaStar size={16} /></span><span>{item.vote_average}</span>
                                </p>
                                <p><span className='text-gray-500'>Lang: </span> <span>{item.original_language}</span></p>
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>
        </div>
    )
}
