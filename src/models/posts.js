import { fetchPosts, fetchPost, watchPosts } from "../services/posts";
import pathToRegexp from "path-to-regexp";

export default {
  namespace: "posts",
  loading: false,
  state: {
    //    posts: [], // store post by key
    //    postsByKey: {}
    posts: ["1", "2"], // store post by key
    postsByKey: {
      "1": {
        title: "learn Dva online",
        category: "dva",
      },
      "2": {
        title: "learn Antd thru video",
        category: "antd",
      },
    },
  },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false };
    },
    save(state, { payload: postsByKey }) {
      return {
        ...state,
        postsByKey,
        posts: Object.keys(postsByKey).reverse(),
      };
    },
    update(state, { payload: post }) {
      const postsByKey = { ...state.postsByKey, [post.key]: post };
      return {
        ...state,
        postsByKey,
      };
    },
  },
  effects: {
    *fetchPosts(action, { call, put }) {
      yield put({ type: "showLoading" });
      const result = yield call(fetchPosts);
      yield put({ type: "save", payload: result });
      yield put({ type: "hideLoading" });
    },
    *fetchPost({ payload: key }, { call, put }) {
      const result = yield call(fetchPost, key);
      yield put({ type: "update", payload: { ...result, key } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/posts") {
          dispatch({ type: "fetchPosts" });
        }
      });
    },
  },
};
