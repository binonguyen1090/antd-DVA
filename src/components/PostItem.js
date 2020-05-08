import React from 'react'
import styles from './PostItem.css'

function PostItem(props) {
    const {title, category} = props.post
    return (
        <div className={styles.normal} style={{ padding: 20 }}>
            This is from components/PostItem
            <div>{title}</div>
            <div>Category: {category}</div>
        </div>
    )
}
export default PostItem