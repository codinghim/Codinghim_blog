import React , { useState, useEffect }from 'react'
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import { getFeaturedPosts } from '@/services'
import Styles from '@/styles/featuredpost.module.scss'
import { ST } from 'next/dist/shared/lib/utils';

const FeaturedPosts = () => {

    const [ featuredPosts, setFeaturedPosts ] = useState([])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(()=>{
        getFeaturedPosts()
            .then((result)=>{
                setFeaturedPosts(result)
            })
    },[])

    return (
        <div className='w-full mb-20'>
            <Carousel 
                responsive={responsive}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                // itemClass="carousel-item-padding-50-px"
                // className='bg-black'
            >
                {featuredPosts.map((featuredPost)=>(
                    <div key={featuredPost.title} className="flex flex-col w-full h-full p-0 justify-center">
                        <div className={Styles.img_container}>
                            <Image className=""
                                alt={featuredPost.title}
                                unoptimized
                                src={featuredPost.featuredImage.url}
                                layout='fill'
                                objectFit='fill'
                            />
                        </div>
                        <div className={Styles.title_container}>{featuredPost.title}</div>
                    </div>
                    
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedPosts