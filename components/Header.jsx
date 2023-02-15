import React, { useState, useEffect } from 'react'
import Link from 'next/Link'
import Styles from '@/styles/header.module.scss'
// import { getCategories } from '../services'


const Header = () => {
    const [categories, setCategories] = useState([
        {name: "dummy", slug:"dumslg"},
        {name: "web dev", slug:"web dev"}
    ])

    // useEffect(()=>{
    //     getCategories()
    //         .then((newCategories) => setCategories(newCategories))
    // }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-black pt-8 pb-3'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className={Styles.logo}>
                            CodingHim
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-4 align-middle text-black text-2xl ml-4 cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header