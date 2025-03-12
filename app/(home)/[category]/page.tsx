import React from 'react';
import { MovieResponse } from '../../Types/MovieResponse';
import api from "@/app/api/CategoryApi.json";
import GetData from '@/app/hooks/GetData';
import Cart from '@/app/components/Cart';

export async function generateStaticParams(): Promise<{ category: string }[]> {
  return api.map((item) => ({
    category: String(item.id), 
  }));
}

export default async function Page({ params }:{
  params: Promise<{category : string}>
}) {
  let data: MovieResponse[] = []
  const category = (await params).category
  data = await GetData(category)
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-self-center gap-5'>
        {data?.map((item) => (
          <Cart
            key={item.id}
            id={item.id}
            poster_path={item.poster_path}
            original_name=''
            original_language={item.original_language}
            vote_average={item.vote_average}
            first_air_date=''
            original_title={item.original_title}
            release_date={item.release_date}
          />
        ))}
      </div>
    </div>
  );
}
