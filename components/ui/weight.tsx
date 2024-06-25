'use client'

import { useState } from "react";

export default function Weight({ value } : { value: string; }) {
    const [ active, setActive ] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }

  return <div className={`border-2 border-gray-950 rounded-lg px-8 py-3 cursor-pointer ${active && 'border-green-600 text-green-600'}`} onClick={handleClick}>{value} gram</div>
  
}
