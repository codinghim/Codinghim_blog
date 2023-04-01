import { Category } from '@/components'
import { getCategoriedPostSlugs, getCategories, getCategoryTitle, getPosts } from '@/services'
import React from 'react'

const category = ({post, category}) => {
    return (
        <>
            <Category posts={post} category={category}/>
        </>
    )
}

export async function getServerSideProps({params}){
    const data = await getCategoriedPostSlugs(params.category)
    const title = await getCategoryTitle(params.category)
    return{
        props:{
            post:data,
            category: title[0].name
        }
    }
}