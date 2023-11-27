"use client"
import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import Image from 'next/image'
import { NavBarArray, NavBarItemType } from '../../utils/NavBarArraysAndTypes'
import { FaSearchengin } from 'react-icons/fa'
import { BsCartCheck } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Link from 'next/link'
import DropDown from './subComponenets/DropDown'
import MobileNavBar from './subComponenets/MobileNavBar'

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <div>
      <div className='flex py-6 justify-between items-center space-x-12'/>
        <div className='w-36 flex-shrink-0'>
          <Image src={"/Logo.webp"} alt="Logo" width={600} height={600} />
        </div>
        <div className='hidden lg:flex justify-between items-center w-full'>
          <ul className='flex space-x-4 font-medium text-lg text-gray-800'>
            {NavBarArray.map((item: NavBarItemType, index: number) => (
              <li className='flex items-baseline relative rounded-md px-2 py-1 hover: bg-gray-100 cursor-pointer group'>
                <Link className='hover:underline' href={item.href}> {item.label} </Link>
                {item.isDropDown ? <RiArrowDropDownLine className='mt-1 -rotate-180 group-hover:rotate-0 duration-300' size={15} /> : ""}
                {item.isDropDown && <div className={`invisible group-hover:visible absolute top-0 left-0 py-2 px-3 text-sm font-medium mt-10 p-2 bg-gray-200 min-w-[7.8rem]`}>
                  <DropDown item={item} />
                </div>}
              </li>
            ))}
          </ul>
          <div className='border flex items-center text-gray-600 px-3 rounded-lg'>
            <FaSearchengin />
            <input type="text"
              className='pl-1 pr-4 py-1 w-80 flex-grow'
              placeholder='Search items in our store' />
          </div>
          <div className='flex-shrink-0 relative w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center'>
            <div
              className='w-4 h-4 absolute top-0 right-2 bg-red-400 font-light text-xs flex items-center justify-center rounded-full'>2
            </div>
            <BsCartCheck size={23} />
          </div>
        </div>
        <div onClick={() => setNavbarOpen(!isNavbarOpen)} >
          {isNavbarOpen ?
            <div className='flex lg:hidden'>
              <GrFormClose size={22} />
            </div>
            :
            <div className='flex lg:hidden'>
              <GiHamburgerMenu size={22} />
            </div>
          }
          <div>
            {
              isNavbarOpen && <MobileNavBar />
            }
          </div>
        </div>
        )
        
        export default Navbar