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
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <FeaturedPosts />
            <div className='grid grid-cols-1 lg:grid-cols-12 w-full overflow-hidden'>
                <div className='col-span-1 lg:col-span-8'>
                    <h2 className='text-2xl font-light'>Latest</h2>
                    <div className=''>
                        {posts.map((post)=> (
                            <PostCard post={post.node} key={post.node.title} />
                        ))}
                    </div>
                </div>
                
                <div className='col-span-1 lg:col-span-4'>
                    <PostWidget />
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
