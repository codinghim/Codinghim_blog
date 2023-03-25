import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Styles from '@/styles/header.module.scss'
import { getCategories } from '../services'


const Header = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getCategories()
            .then((newCategories) => {
                setCategories([{'name':'All', slug: 'all'}].concat(newCategories))
            })
    }, [])

    return (
        <div className='mx-0 px-0 mb-8 w-full'>
            <div className='border-b w-full inline-block border-black pt-4 pb-3'>
                <div className='md:float-left text-center'>
                    <Link href="/">
                        <span className={Styles.logo}>
                            CodingHim Writes
                        </span>
                    </Link>
                </div>
            </div>
            <div className='hidden md:flex border-b border-black pb-3 pt-1 flex-row flex-nowrap w-full place-content-evenly overflow-auto'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='mt-4 text-black text-lg ml-4 cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Header