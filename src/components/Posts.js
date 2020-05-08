import React from 'react'
import styles from './Posts.css'
import PostItem from './PostItem'

function Posts(props){
    return (
        <div className={styles.normal} style={{padding: 20}}>
            This is from components/Posts
            <div>
                {
                    props.posts.map(post =>
                        <PostItem key={post.key} post={post}/>
                    )
                }
            </div>
        </div>
    )
}
export default Posts