// import react component
import { NavBarItemType } from '@/app/components/utils/NavBarArraysAndTypes'
import React from 'react'
import {FC} from 'react'
import Link from 'next/link'

const DropDown: FC<{item: NavBarItemType}> = ({item}) => {
  return (
    <ul> 
        {item.dropDownData?.map((item: NavBarItemType, index: number)=> (
            <li className='hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0'>
                <Link href={item.href}> {item.label}</Link>
            </li>
        ))}
    </ul>
  )
}

export default DropDown