import React from 'react'
import Styles from '@/styles/postwidget.module.scss'

const PostWidget = ({slug}) => {
    return (
        <div className={Styles.postwidget_container}>
            <h2>
                { slug ? "Related Posts" : "Recent Posts" }
            </h2>
        </div>
    )
}

export default PostWidget