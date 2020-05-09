import React from 'react'
import {connect} from 'dva'
import styles from './Posts.css'
import PostComponent from '../components/Posts'
import Nav from "../components/Nav";

function Posts(props){
    return (
        <div className={styles.normal} style={{padding: "20px"}}>
            <Nav/>
            <h1>This is from routes/Posts</h1>
            <PostComponent loading={props.loading} posts={props.posts}/>
        </div>
    )
}

function mapStatetoProps(state){
    const { loading, posts, postsByKey} = state.posts
    return {
        loading,
        posts: posts.map(key=> ({ ...postsByKey[key], key}))
        
    }
}
 
export default connect(mapStatetoProps)(Posts)