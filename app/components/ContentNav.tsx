import Link from 'next/link'
import React from 'react'
import categoryApi from "../api/CategoryApi.json"
interface CategoryType {
    title: string,
    path: string
}
export default function ContentNav() {
    let data: CategoryType[] = []
    data = categoryApi.map((item) => ({
        title: item.title,
        path: item.path
    }))
    return (
        <div className='border-b border-zinc-500'>
            <div className='container mx-auto max-w-7xl font-semibold text-2xl py-6 flex flex-wrap justify-around'>
                {data?.map((item, index) => (
                    <Link key={index} href={item.path} className='px-8 pt-4'>{item.title}</Link>
                ))}
            </div>
        </div>
    )
}
