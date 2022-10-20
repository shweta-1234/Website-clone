import { Container } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Imagecorosal from "./Imagecorosal";

function Imageslider() {
    const [allProducts, setallProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products?limit=10')
            .then((response) => {
                console.log(response.data)
                setallProducts(response.data)
            })
    }

    return (
        <div>
            <Typography variant="h4" sx={{textAlign:'center', padding:'5px'}}>
                SHOP <ShoppingCart /> CART</Typography>
            <Container >
                <Box >
                    <Imagecorosal
                        allProducts={allProducts}
                    />
                </Box>
            </Container>
        </div>
    );
}

export default Imageslider;
