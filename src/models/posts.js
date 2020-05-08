export default {
    namespace: 'posts',
    state: {
        loading: false,
        posts: ['1', '2'], // store post by key
        postsByKey: {
            '1': {
                title: 'learn Dva online',
                category: 'dva',
            },
            '2': {
                title: 'learn Antd thru video',
                category: 'antd',
            }
        }
    },
    reducers: {},
    effects: {},
    subscriptions: {},
};