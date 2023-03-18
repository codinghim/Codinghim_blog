import React from 'react'
import Styles from '@/styles/postcard.module.scss'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({post}) => {
    return (
        <Link href={`/post/${post.slug}`}>
            <div className={Styles.post_container}>
                
                <div className={Styles.thumbnail_container}>
                    <Image
                        className={Styles.thumbnail}
                        src={post.featuredImage.url}
                        alt={post.title}
                        unoptimized
                        fill
                    />
                </div>
                <div className={Styles.post_card_detail_container}>
                    <h1 className={Styles.post_title}>
                        {post.title}
                    </h1>
                    <div className={Styles.post_detail_container}>
                        <div className={Styles.category_cotainer}>
                            {post.categories.slice(0,2).map((category)=>(
                                <div key={category.name}>
                                    <span className={Styles.colored_dot}></span>
                                    <h2 className={Styles.post_category} >
                                        {category.name + ' '}
                                    </h2>
                                </div>
                            ))}
                        </div>
                        <h2 className={Styles.author_name}>{post.author.name}</h2>
                        <h2 className={Styles.date}>{moment(post.createdAt).format('MMM DD, YYYY')}</h2>           
                    </div>
                    <h3 className={Styles.post_excerpt}>{post.excerpt}</h3>             
                </div>
            </div>
        </Link>
    )
}

export default PostCard