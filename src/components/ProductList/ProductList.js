import React from 'react';
import './ProductList.css'
import Navigation from "../Navigation/Navigation";
import {TEST_PRODUCTS} from "./TEST_PRODUCTS";

const ProductList = ({products}) => {

    return (
        <>
            <Navigation/>
            <div className="productList">
                {TEST_PRODUCTS.data.map((product) => (
                    <div className="user">{product.name}</div>
                ))}
                <div>
                    prod 1
                </div>
                <div>
                    prod 2
                </div>
            </div>
        </>

    )
}

export default ProductList;