import React from 'react'
import { Input } from '../components/Input'

export const Home = () => {
  return (
    <div className="flex flex-col content-around items-center w-full">
      <div className="text-black font-bold text-5xl pt-20 border-cyan-">News</div>
      <Input placeholder='Search your news' inputClassName='mt-10 w-1/2 h-16 text-2xl' type='text' onChange={() => {}} onKeyUp={() => {}}/>
    </div>
  )
}
