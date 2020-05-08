import React from 'react'
import {connect} from 'dva'
import styles from './Posts.css'

function Posts(props){
    return (
        <div className={styles.normal}>
            <h1>Posts</h1>
            <div>
                {
                    props.posts.map(({key, title})=>
                <div key={key}>- {title}</div>
                    )
                }
            </div>
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