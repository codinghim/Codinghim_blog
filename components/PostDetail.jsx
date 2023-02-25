import React from 'react'
import Styles from '@/styles/postdetail.module.scss'
import Image from 'next/image'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'

const PostDetail = ({post}) => {
    return (
        <>
            <div className={Styles.post_container}>
                <div className={Styles.post_category_container}>
                        {post.categories.slice(0,2).map((category)=>(
                            <h2 className={Styles.post_category} key={category.name}>
                                {category.name + ' '}
                            </h2>
                        ))}
                    </div>
                <h1 className={Styles.post_title}>{post.title}</h1>
                <div className={Styles.author_detail_container}>
                    <div className={Styles.author_img_container}>
                        <Image
                            className={Styles.author_img}
                            alt={post.author.name}
                            src={post.author.photo.url}
                            fill
                        />
                    </div>
                    <div className={Styles.author_info_container}>
                        <h2 className={Styles.author_name}>{post.author.name}</h2>
                        <h2 className={Styles.date}>{moment(post.createdAt).format('MMM DD, YYYY')}</h2>           
                    </div>
                </div>
                {/* <div className={Styles.post_excerpt_container}>
                    <p className={Styles.post_excerpt}>{post.excerpt}</p>
                </div> */}
                {console.log(post.content)}
                <div className={Styles.post_content_container}>
                    <RichText 
                        content={post.content.raw}
                    />
                </div>
                
                
                {/* <div className={Styles.featuredImage_container}>
                    <Image 
                        src={post.featuredImage.url}
                        alt={post.title}
                        fill
                        unoptimized
                    />
                </div> */}
                
            </div>
        </>
    )
}

export default PostDetail