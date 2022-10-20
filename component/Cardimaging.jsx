import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Imagecards from './Imagecards';

function Cardimaging() {
    const [allProducts, setallProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then((response) => {
                console.log(response.data)
                setallProducts(response.data)
            })
    }

    return (
        <Box flex={2} p={3} my={0}>
            <Container sx={{border:'2px solid lightblue', padding:'5px'}}>
                <Typography variant="h6" sx={{ marginLeft: '15px' }}>
                    New Products
                </Typography>
                <Imagecards
                    allProducts={allProducts}
                />
            </Container>
        </Box>
    );
}

export default Cardimaging;
