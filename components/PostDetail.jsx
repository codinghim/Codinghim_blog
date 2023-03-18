import React from 'react'
import Styles from '@/styles/postdetail.module.scss'
import Image from 'next/image'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { PostWidget } from '@/components'

const PostDetail = ({post}) => {
    return (
        <>
        <div className={`${Styles.post_detail_container}`}>
            <div className={`${Styles.post_container}`}>
                <div className={Styles.post_title_container}>
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
                            <h2 className={Styles.author_name}>By {post.author.name}</h2>
                            <h2 className={Styles.date}>{moment(post.createdAt).format('MMM DD, YYYY')}</h2>           
                        </div>
                    </div>
                </div>
                
                <div className='grid grid-cols-12'>
                    <div className={`${Styles.post_content_container} col-span-8`}>
                        <RichText 
                            content={post.content.raw}
                        />
                    </div>
                    <div className='col-span-4'>
                    <PostWidget />
                    </div>
                </div>
                
            </div>
            
        </div>
            
        </>
    )
}

export default PostDetail