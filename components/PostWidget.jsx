import React, { useEffect } from 'react'
import Styles from '@/styles/postwidget.module.scss'

const PostWidget = ({slug}) => {
    useEffect(()=>{
        var ads = document.getElementsByClassName("adsbygoogle").length;
        for (var i = 0; i < ads; i++) {
            try {
            (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
      }
    },[])

    return (
        <div className={Styles.postwidget_container}>
            <h2>
                { slug ? "Related Posts" : "Recent Posts" }
            </h2>
            <div>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9341946917256754"
                    crossorigin="anonymous"></script>
                <ins class="adsbygoogle"
                    data-ad-client="ca-pub-9341946917256754"
                    data-ad-slot="4592745262"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        </div>
    )
}

export default PostWidget