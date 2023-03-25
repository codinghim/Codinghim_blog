import React, { useEffect, useState } from 'react'
import Styles from '@/styles/postwidget.module.scss'
import Script from 'next/script'
import { getRecentPosts, getRelatedPosts } from '@/services'
import moment from 'moment'
import Link from 'next/link'
const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(()=>{
        var ads = document.getElementsByClassName("adsbygoogle").length;
        for (var i = 0; i < ads; i++) {
            try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
      }
    },[])

    useEffect(()=>{
        if(slug){
            getRelatedPosts(categories, slug)
                .then((result) => {
                    setRelatedPosts(result)
                })
        }else{
            getRecentPosts()
                .then((result) => {
                    setRelatedPosts(result)
                })
        }
    },[slug])

    return (
        <>  
            {slug && 
                <div className={Styles.postwidget_container}>
                    <h2 className='text-xl mb-6'>
                        Related Posts
                    </h2>
                    {relatedPosts.slice(0,4).map((post)=>(
                        <Link href={`/post/${post.slug}`} key={post.title} className='flex items-center w-full mb-4'>
                            <div className='w-16 flex-none'>
                            <img 
                                alt={post.title}
                                height='100px'
                                width='100px'
                                className='align-middle'
                                src={post.featuredImage.url}
                            />
                            </div>
                            <div className='flex-grow ml-4'>
                                <p className='text-gray-500 font-xs'>
                                    {moment(post.createdAt).format('MMM DD, YYYY')}
                                </p>
                                <p className='text-md'>
                                    {post.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            }
            <div className={Styles.ad_container}>
                <h2 className='text-xl mb-6'>
                    Widget
                </h2>
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9341946917256754"
                    crossOrigin="anonymous"></Script>
                <ins className='adsbygoogle'
                    style={{display:'block'}}
                    data-ad-client="ca-pub-9341946917256754"
                    data-ad-slot="4592745262"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </>
    )
}

export default PostWidget