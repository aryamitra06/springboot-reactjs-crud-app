import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Product from './Product'
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from '../redux/slices/fetchProductsSlice';
import ProductSkeleton from './ProductSkeleton';

export default function AllProductsContainer({ toggle, setToggle }) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getProducts())
    }, [dispatch, toggle])

    const productData = useSelector((state) => state.get_products);

    const productDataArr = productData?.data;
    const loadingStatus = productData?.status;

    const IterateSkeleton = () => {
        return (
            <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            </>
        )
    }

    return (
        <>
            <Box>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }} spacing='10px'>
                    {
                        (loadingStatus === 'idle' || loadingStatus === 'loading') ? (
                            <>
                                {
                                    IterateSkeleton()
                                }

                            </>
                        ) : (
                            <>
                                {

                                    productDataArr?.length > 0 && productDataArr?.map((e) => (
                                            <Product data={e} key={e?.id} setToggle={setToggle} />
                                    ))
                                }
                            </>
                        )
                    }
                </SimpleGrid>
            </Box>
        </>
    )
}
