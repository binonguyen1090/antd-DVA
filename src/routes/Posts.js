import React from 'react'
import {connect} from 'dva'
import styles from './Posts.css'
import PostComponent from '../components/Posts'

function Posts(props){
    return (
        <div className={styles.normal} style={{padding: "20px"}}>
            <h1>This is from routes/Posts</h1>
            <PostComponent posts={props.posts}/>
        </div>
    )
}

function mapStatetoProps(state){
    return {
        posts: [
            {
                title: "learn Dva",
                key: '1',
                category: 'dva'
            },
            {
                title: "learn Antd",
                key: '2',
                category: 'antd'
            }
        ]
        
    }
}
 
export default connect(mapStatetoProps)(Posts)