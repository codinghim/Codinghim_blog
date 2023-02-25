import Head from 'next/head'
import { PostCard, PostWidget } from '@/components'
import { getPosts } from '@/services'
import FeaturedPosts from '@/components/FeaturedPosts';

// const posts = [
//     {title:"dummy post title 1", excerpt: 'Dummy blog post exceprt 1'},
//     {title:"dummy post title 2", excerpt: 'Dummy blog post exceprt 2'},
//     {title:"dummy post title 3", excerpt: 'Dummy blog post exceprt 3'},
// ]

export default function Home({posts}) {
    return (
        <div className=''>
            <Head>
                <title>CodingHim Blog</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <FeaturedPosts />
            <div className='w-full overflow-hidden'>
                <h2 className='text-2xl font-light'>Latest</h2>
                <div className=''>
                    {posts.map((post)=> (
                        <PostCard post={post.node} key={post.node.title} />
                    ))}
                </div>
                {/* <div className='lg:col-span-4 md:col-span-4 col-span-1'>
                    <div className='lg:sticky relative top-8'>
                        <PostWidget />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const posts = await getPosts();
    return {
        props:{posts}
    }
}
