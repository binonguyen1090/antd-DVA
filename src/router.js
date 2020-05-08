import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Posts from './routes/Posts';
import PostDetail from "./routes/PostDetail";



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/posts/:key" exact component={PostDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
