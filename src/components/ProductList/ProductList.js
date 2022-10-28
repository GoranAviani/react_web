import React from 'react';
import './ProductList.css'
import Navigation from "../Navigation/Navigation";
import {TEST_PRODUCTS} from "./TEST_PRODUCTS";
import Button from "@mui/material/Button";

const ProductList = ({products}) => {

    return (
        <>
            <Navigation/>
            <div className="productList">
                {TEST_PRODUCTS.data.map((product) => (
                    <div className="productCard">{product.name}</div>
                ))}
                <div>
                    prod 1
                    <Button style={{
                        borderRadius: 0,
                        color: "#000",
                        borderColor: "#000",
                        padding: "15px 36px",
                        fontSize: "18px"
                    }} variant="outlined" href="/product">aaa</Button>
                </div>
                <div>
                    prod 2
                </div>
            </div>
        </>

    )
}

export default ProductList;