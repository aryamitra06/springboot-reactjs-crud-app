import React from 'react'
import { Box, Image, SimpleGrid, Flex, Badge, Text, Stack, Container, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { BiRupee } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../redux/slices/fetchProductByIdSlice'
import ProductDetailViewSkeleton from './ProductDetailViewSkeleton'

export default function ProductDetailView() {

  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])

  const productDataArr = useSelector((state) => state.get_product_by_id);
  const productData = productDataArr.data;
  const loadingStatus = productDataArr.status;

  return (
    <Container maxW='container.xl' marginTop={4}>
      {
        productData.length === 0 && loadingStatus === 'success' ? (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Something went wrong!</AlertTitle>
          </Alert>
        ) : (
          <>
            {
              loadingStatus === 'idle' || loadingStatus === 'loading' ? (
                <ProductDetailViewSkeleton />
              ) : (
                <Box>
                  <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 1, xl: 1 }} spacing='10px'>
                    <Image src={productData?.imgUrl}
                      height="400px"
                      width="100%"
                      objectFit='cover'
                      borderRadius='lg'
                    />
                    <Box padding={2}>
                      <Badge fontSize='1em' colorScheme='green' mb={1}>{productData?.discount}% OFF</Badge>
                      <Text fontSize='2xl'>{productData?.name}</Text>
                      <Text fontSize='sm' color='gray.500' fontWeight='light' mb={1}>{productData?.desc}</Text>
                      <Badge colorScheme='purple'>{productData?.quantity} Left</Badge>
                      <Flex>
                        <Stack direction='row' alignItems='center'>
                          <BiRupee size={23} />
                          <Text fontSize='xl' style={{ margin: '0px' }}>{productData?.originalPrice}</Text>
                        </Stack>
                      </Flex>
                    </Box>
                  </SimpleGrid>
                </Box>
              )
            }
          </>
        )
      }
    </Container>
  )
}
