import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    SimpleGrid,
    Box,
    Input,
    Stack,
    InputGroup,
    InputLeftElement,
    Container
} from '@chakra-ui/react'
import { BsPercent } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { editProductById } from '../../redux/slices/EditProductSlice';
import EditProductFormSkeleton from './EditProductFormSkeleton';

export default function EditProduct({ isOpen, onClose, setToggle, id, productData, loadingStatus }) {
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({ name: '', desc: '', discount: '', imgUrl: '', originalPrice: '', quantity: '' });


    React.useEffect(() => {
        setFormData({ name: productData?.name, desc: productData?.desc, discount: productData?.discount, imgUrl: productData?.imgUrl, originalPrice: productData?.originalPrice, quantity: productData?.quantity })
    }, [productData])


    const onValueChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProductById({ id, formData }));
        setToggle(prevCheck => !prevCheck);
        toast.success("Data Edited Successfully");
    }

    const editingStatus = useSelector((state) => state.edit_product_by_id.status)

    const EditForm = () => (
        <Stack direction='column'>
            <Container>
                <Box>
                    {
                        loadingStatus === "loading" ? (
                            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 1, xl: 1 }} spacing='10px'>
                                <EditProductFormSkeleton />
                            </SimpleGrid>
                        ) : (
                            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }} spacing='10px'>
                                <Input variant='filled' placeholder='Product Name' name='name' value={formData?.name} onChange={(e) => onValueChange(e)} disabled={editingStatus === "loading"} />
                                <Input variant='filled' placeholder='Short Description' name='desc' value={formData?.desc} onChange={(e) => onValueChange(e)} disabled={editingStatus === "loading"} />
                                <Input variant='filled' placeholder='Image URL' name='imgUrl' value={formData?.imgUrl} onChange={(e) => onValueChange(e)} disabled={editingStatus === "loading"} />
                                <Input variant='filled' placeholder='Quantity' name='quantity' value={formData?.quantity} onChange={(e) => onValueChange(e)} disabled={editingStatus === "loading"} />
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BiRupee />}
                                    />
                                    <Input variant='filled' placeholder='Original Price' name='originalPrice' value={formData?.originalPrice} onChange={(e) => onValueChange(e)} disabled={editingStatus === "loading"} />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<BsPercent />}
                                    />
                                    <Input variant='filled' placeholder='Discount' name='discount' value={formData?.discount} onChange={(e) => onValueChange(e)} disabled={editingStatus === "loading"} />
                                </InputGroup>
                            </SimpleGrid>
                        )
                    }
                </Box>
            </Container>
        </Stack>
    )

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' isCentered>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
                <form onSubmit={handleSubmit}>
                    {EditForm()}
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green' type='submit' disabled={editingStatus === "loading" || loadingStatus === "loading"}>Save</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}
