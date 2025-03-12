import React, { JSX } from 'react'

interface NavbarProps{
  title:string
}
export default function Navbar({title}:NavbarProps):JSX.Element {
  return (
    <div className='h-24 shadow-2xl flex items-center justify-center'>
      <h3 className='font-semibold text-2xl md:text-3xl '>{title}</h3>
    </div>
  )
}
