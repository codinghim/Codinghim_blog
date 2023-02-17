import React from 'react'
import Styles from '@/styles/postcard.module.scss'
import moment from 'moment'
import Link from 'next/Link'

const PostCard = ({post}) => {
    return (
        <div className={Styles.post_container}>
            <div className='relative overflow-hidden shadow-md pb-80 mb-10'>
                <img
                    className='object-top absolute h-80 w-full'
                    src={post.featuredImage.url}
                    alt={post.title}
                />
            </div>
            {post.categories.map((category)=>(
                <h2 className={Styles.post_category} key={category.name}>
                    {category.name + ' '}
                </h2>
            ))}
            <h1 className={Styles.post_title}>
                {post.title}
            </h1>
            <div className={Styles.author_container}>
                <div className={Styles.author_img_container}>
                    <img
                        className='rounded-full bg-white shadow-[0_0.1px_5px_rgba(0,0,0,0.25)]'
                        height='70px'
                        width='70px'
                        src={post.author.photo.url}
                        alt={post.author.name}
                    />
                </div>
                <div className={Styles.author_info_container}>
                    <h2 className={Styles.author_name}>
                        {post.author.name}
                    </h2>
                    <div>
                        {/* <svg className={Styles.svg} width="30" height="30" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_2)">
                            <path d="M620 162.5H180C163.431 162.5 150 179.289 150 200V562.5C150 583.211 163.431 600 180 600H620C636.569 600 650 583.211 650 562.5V200C650 179.289 636.569 162.5 620 162.5Z" stroke="#FF5573" strokeWidth="50"/>
                            <path d="M276 137.5C276 116.789 275.776 100 275.5 100C275.224 100 275 116.789 275 137.5V187.5C275 208.211 275.224 225 275.5 225C275.776 225 276 208.211 276 187.5V137.5Z" stroke="#FF5573" strokeWidth="50"/>
                            <path d="M526 141.25C526 120.539 525.776 103.75 525.5 103.75C525.224 103.75 525 120.539 525 141.25V191.25C525 211.961 525.224 228.75 525.5 228.75C525.776 228.75 526 211.961 526 191.25V141.25Z" stroke="#FF5573" strokeWidth="50"/>
                            <path d="M520 312.5H280C263.431 312.5 250 312.78 250 313.125C250 313.47 263.431 313.75 280 313.75H520C536.569 313.75 550 313.47 550 313.125C550 312.78 536.569 312.5 520 312.5Z" stroke="#FF5573" strokeWidth="50"/>
                            </g>
                        </svg> */}
                        <h2 className={Styles.date}>{moment(post.createdAt).format('MMM DD, YYYY')}</h2>
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <h3 className={Styles.excerpt}>{post.excerpt}</h3>
            </div>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className={Styles.button}>
                        Continue Reading 
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard