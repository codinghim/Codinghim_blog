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
          breakpoint: { max: 3000, min: 1280 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1279, min: 770 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 769, min: 0 },
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
                itemClass="carousel-item-padding-50-px"
                className=''
            >
                {featuredPosts.map((featuredPost)=>(
                    <div key={featuredPost.title} className="flex w-full h-full justify-center">
                        <div>   
                            <div className={Styles.img_container}>
                                <Image className=""
                                    alt={featuredPost.title}
                                    unoptimized
                                    src={featuredPost.featuredImage.url}
                                    layout='fill'
                                    objectFit='fill'
                                />
                            </div>
                            <div className={Styles.title_container}>
                                <h2>{featuredPost.title}</h2>
                            </div>
                        </div>
                    </div>
                    
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedPosts