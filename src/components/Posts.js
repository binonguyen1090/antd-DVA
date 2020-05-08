import React from 'react'
import styles from './Posts.css'
import PostItem from './PostItem'
import {Spin} from 'antd'

function Posts(props){
    return (
        <div className={styles.normal} style={{padding: 20}}>
            This is from components/Posts

            <div>Loading: {props.loading ? <Spin></Spin> : ""} </div>
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