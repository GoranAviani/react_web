import React from 'react';
import './ProductList.css'
import Navigation from "../Navigation/Navigation";

const ProductList = ({products}) => {

    return (
        <>
            <Navigation/>
            <div className="productList">
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