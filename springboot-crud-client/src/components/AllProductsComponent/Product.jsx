import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Box,
    useColorModeValue,
    Button,
    Text,
    Image,
    Badge,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Spacer,
    useDisclosure
} from '@chakra-ui/react'
import { BiRupee } from 'react-icons/bi'
import { ChevronDownIcon } from '@chakra-ui/icons';
import EditProduct from '../EditProductComponent/EditProduct';
import DeleteProduct from '../DeleteProductComponent/DeleteProduct';

import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../redux/slices/fetchProductByIdSlice';

export default function Product({ data, setToggle }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()

    React.useEffect(() => {
        if (isEditOpen === true) {
            dispatch(getProductById(data?.id));
        }
    }, [dispatch, isEditOpen, data?.id])

    const productDataArr = useSelector((state) => state.get_product_by_id);
    const productData = productDataArr.data;
    const loadingStatus = productDataArr.status;

    const ActionMenu = () => (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Action
            </MenuButton>
            <MenuList>
                <MenuItem onClick={onEditOpen}>Edit</MenuItem>
                <MenuItem onClick={onDeleteOpen}>Delete</MenuItem>
            </MenuList>
        </Menu>
    )

    const detailTabHandler = () => {
        navigate(`/product/${data?.id}`)
    }
    return (
        <>
            <Box
                bg={useColorModeValue('gray.100', 'gray.1000')}
                fontWeight='semibold'
                borderRadius='lg'
                borderWidth='1px'
                overflow='hidden'
                height='max-content'
            >
                <Image src={data?.imgUrl}
                    height="250px"
                    width="100%"
                    objectFit='cover'
                />
                <Box padding={2}>
                    <Badge fontSize='1em' colorScheme='green' mb={1}>{data?.discount}% OFF</Badge>
                    <Text fontSize='2xl'>{data?.name}</Text>
                    <Text fontSize='sm' color='gray.500' fontWeight='light' mb={1}>{data?.desc}</Text>
                    <Badge colorScheme='purple'>{data?.quantity} Left</Badge>
                    <Flex>
                        <Stack direction='row' alignItems='center'>
                            <BiRupee size={23} />
                            <Text fontSize='xl' style={{ margin: '0px' }}>{data?.originalPrice}</Text>
                        </Stack>
                        <Spacer />
                        <Stack direction='row'>
                            <Button colorScheme='blue' onClick={detailTabHandler}>Details</Button>
                            {ActionMenu()}
                        </Stack>
                    </Flex>
                </Box>
            </Box>
            <EditProduct isOpen={isEditOpen} onClose={onEditClose} id={data?.id} setToggle={setToggle} productData={productData} loadingStatus={loadingStatus}/>
            <DeleteProduct isOpen={isDeleteOpen} onClose={onDeleteClose} id={data?.id} setToggle={setToggle} />
        </>
    )
}
