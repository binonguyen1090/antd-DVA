import React from "react";
import { connect } from "dva";
// import styles from "./PostDetail.css";
// import PostDetailComponent from "../components/PostDetail";
import Nav from "../components/Nav";

function PostDetail(props) {
  const { title, category, content } = props.post;
  return (
    <div >
      <Nav />
        Title: {title}
        <br></br>
        Category: {category}
        <br></br>
        Content: {content}
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  // const key = ownProps.params.key;
  const key = ownProps.match.params.key;
  return {
    // loading: state.loading.models.posts,
    post: {
      ...state.posts.postsByKey[key],
      key,
    },
  };
}

export default connect(mapStateToProps)(PostDetail);
