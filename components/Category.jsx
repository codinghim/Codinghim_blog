import React from 'react'
import { PostCard } from '.'
import Styles from '@/styles/category.module.scss'

const Category = ({posts, category}) => {
    return (
        <>
            <div className={Styles.category_title_container}>
                <h1 className='text-3xl text-white font-light text-center'>
                    {category}
                </h1>
            </div>
            
            {posts.map((post)=>(
                <PostCard post={post} key={post.title}/>
            ))}
        </>
    )
}

export default Category