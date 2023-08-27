import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const SearchComponent = () => {
  return (
    <div className='w-full h-10 bg-slate-100 rounded-md border border-black flex items-center'>
        <div className='w-1/6 h-full flex justify-center items-center'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 h-4 text-slate-400' />
        </div>
        <input className='w-5/6 bg-slate-100 text-sm text-black outline-none px-2' placeholder='Search...' />
    </div>
  )
}
