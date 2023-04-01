import Head from 'next/head'
import Script from 'next/script'
import { PostCard, PostWidget } from '@/components'
import { getPosts } from '@/services'
import FeaturedPosts from '@/components/FeaturedPosts';

export default function Home({posts}) {
    return (
        <div className=''>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
            <Head>
                <title>CodingHim Blog</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <FeaturedPosts />
            <div className='grid grid-cols-1 lg:grid-cols-12 w-full overflow-hidden'>
                <div className='col-span-1 lg:col-span-12'>
                    <h2 className='text-2xl font-light'>Latest</h2>
                    <div>
                        {posts.map((post)=> (
                            <PostCard post={post.node} key={post.node.title} />
                        ))}
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-4 hidden'>
                    <PostWidget />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const posts = await getPosts();
    return {
        props:{posts}
    }
}
