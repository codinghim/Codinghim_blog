import React from 'react'

import { getPosts, getPostDetails } from '@/services'
import { PostDetail, PostWidget } from '@/components'

const PostDetails = ({post}) => {
    return (
        <>
            <PostDetail post={post}/>
        </>
    )
}

export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug)
    return{
        props:{
            post:data
        }
    }
}

export async function getStaticPaths(){
    const posts = await getPosts()
    return{
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false,
    }
}

export default PostDetails