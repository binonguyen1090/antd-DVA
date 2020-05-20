import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Todo from '../components/Todo';
import Events from '../components/Events';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to Todo list!</h1>
      <ul className={styles.list}>
        <Todo />
        {/* <Events /> */}
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);


// routes/Products.js -> router.js -> components/ProductList.js 
// -> models/products.js --> require index.js 
//-> connect routes/Products.js --> index.js