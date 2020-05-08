import React from 'react';
import Button from 'antd/es/button';

const Count = (props) => (
    <div>
        <h2>Count button</h2>
        <Button type="primary">Click</Button>
    </div>
    
);

export default Count;

// import React from 'react';
// import { connect } from 'dva';
// import ProductList from '../components/ProductList';

// const Products = ({ dispatch, products }) => {
//     function handleDelete(id) {
//         dispatch({
//             type: 'products/delete',
//             payload: id,
//         });
//     }
//     return (
//         <div>
//             <h2>List of Products</h2>
//             <ProductList onDelete={handleDelete} products={products} />
//         </div>
//     );
// };

// // export default Products;
// export default connect(({ products }) => ({
//     products,
// }))(Products);