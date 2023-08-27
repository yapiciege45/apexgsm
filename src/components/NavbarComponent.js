import Link from 'next/link'
import React from 'react'
import { SearchComponent } from './shared/SearchComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faUserCircle, faPhone, faUsers, faShop, faBasketShopping, } from '@fortawesome/free-solid-svg-icons'
import { faApple, faGoogle, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { NavbarLink } from './navbar/NavbarLink'

export const NavbarComponent = () => {
  return (
    <nav className=' bg-orange-500 text-white flex justify-center items-center h-20 w-full z-50'>
        <div className='w-11/12 flex items-center justify-between'>
            <div className='flex items-center justify-between w-5/12'>
                <a href="/" className='text-white font-bold text-xl'>ApexGSM</a>
                <div className='w-1/2'>
                    <SearchComponent />
                </div>
            </div>
            <div className='flex items-center justify-between w-6/12'>
                    <NavbarLink link="/" name="Home" icon={<FontAwesomeIcon icon={faHome} className='text-white w-6 h-6 text-lg group-hover:text-slate-300 transition-all' />} />
                    <NavbarLink link="/" name="About Us" icon={<FontAwesomeIcon icon={faUserCircle} className='text-white w-5 h-5 text-lg group-hover:text-slate-300 transition-all' />} />
                    <NavbarLink link="/" name="Our Team" icon={<FontAwesomeIcon icon={faUsers} className='text-white w-6 h-6 text-lg group-hover:text-slate-300 transition-all' />} />
                    <NavbarLink link="/" name="Contact" icon={<FontAwesomeIcon icon={faPhone} className='text-white w-5 h-5 v group-hover:text-slate-300 transition-all' />} />
                    <NavbarLink link="/" name="Products" icon={<FontAwesomeIcon icon={faShop} className='text-white w-6 h-6 text-lg group-hover:text-slate-300 transition-all' />}
                        dropdownLinks={[
                            {icon: <FontAwesomeIcon icon={faApple} className='w-6 h-6 text-lg text-black' />, link: '/', name: 'Apple'},
                            {icon: <FontAwesomeIcon icon={faYoutube} className='w-6 h-6 text-lg text-black' />, link: '/', name: 'Youtube'},
                            {icon: <FontAwesomeIcon icon={faFacebook} className='w-6 h-6 text-lg text-black' />, link: '/', name: 'Facebook'},
                            {icon: <FontAwesomeIcon icon={faGoogle} className='w-6 h-6 text-lg text-black' />, link: '/', name: 'Google'}
                        ]}
                    />
                    <NavbarLink link="/" name="Basket" icon={<FontAwesomeIcon icon={faBasketShopping} className='text-white w-5 h-5 group-hover:text-slate-300 transition-all' />} />
            </div>
        </div>
    </nav>
  )
}
