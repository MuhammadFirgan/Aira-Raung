'use client'

import { useState } from "react"

export default function Quantity() {
    const [ value, setValue ] = useState(0)

    const decrement = () => {
        setValue(prevValue => prevValue + 1)
    }

    const increment = () => {
        if (value > 0) {
            setValue(prevValue => prevValue - 1)
        }
    }

    return (
    <div className="mb-8">
        <h2 className='font-semibold mb-2'>Jumlah barang</h2>
        <div className="flex gap-2">
            <button 
                className={`bg-gray-950 px-3 py-1 text-white ${value === 0 ? 'cursor-not-allowed opacity-50' : ''}`} 
                onClick={increment} 
                disabled={value === 0}>
                -
            </button>
            <input 
                type="text" 
                className='w-12 px-2 border-2 text-center' 
                value={value} 
                readOnly 
            />
            <button 
                className="bg-gray-950 px-3 py-1 text-white" 
                onClick={decrement}>
                +
            </button>
        </div>
    </div>
    )
}
