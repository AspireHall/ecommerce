import React from 'react'

export const Navbar = () => {
  return (
    <div className="flex w-full h-10 bg-amber-400 justify-center align-middle" >
        <ul className="grid-cols-4 flex justify-center items-center bg-blue-500 w-full text-white">
            <li className="w-full font-bold">AIDEN BEAR</li>
            <li className="w-full">TRENDING</li>
            <li className="w-full">BOYS</li>
            <li className="w-full">GIRS</li>
            <li></li>
        </ul>
    </div>
  )
}
