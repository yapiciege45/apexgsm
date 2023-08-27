import Link from 'next/link'
import React from 'react'

export const NavbarLink = ({name, link, icon, dropdownLinks = []}) => {
  return (
    <Link href={link} className='h-10 flex flex-col justify-between items-center group relative'>
        {icon}
        <p className='text-white text-md uppercase group-hover:text-slate-300 transition-all'>{name}</p>
        {dropdownLinks.length > 0 && (
                <div className='absolute hidden group-hover:flex bg-white w-48 border border-black rounded top-10 right-0 z-50'>
            
                <div className='flex flex-col w-full relative'>
                    <div className='absolute -top-2 right-2 text-black w-0 h-0 
      border-l-[5px] border-l-transparent
      border-b-[7.5px] border-b-white-500
      border-r-[5px] border-r-transparent'></div>
                    {
                        dropdownLinks.map(x => (
                            <Link href={x.link} className='flex p-3 justify-between items-center w-full group hover:bg-slate-200 rounded transition-all'>
                            {x.icon}
                            <p className='uppercase text-black text-lg'>{x.name}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
                )}
        
    </Link>
  )
}
