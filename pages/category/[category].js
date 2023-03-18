import { PostCard } from '@/components'
import { getCategories } from '@/services'
import React from 'react'

const category = ({slug}) => {
  return (
    <div>
        category
    </div>
  )
}

export async function getStaticPaths(){
    const categories = await getCategories()
    console.log(category)
    return{
        paths: categories.map((category) => ({ params: { category:category.slug } })),
        fallback: false,
    }
}

export default category