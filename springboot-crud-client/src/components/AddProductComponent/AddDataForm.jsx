import React from 'react'
import { useDispatch } from 'react-redux'
import { SimpleGrid, Box, Input, Button, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsPercent } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import { addProduct } from '../../redux/slices/CreateProductSlice'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';

export default function AddDataForm({setToggle}) {
    const dispatch = useDispatch();
    
    const inputElement1 = React.useRef();
    const inputElement2 = React.useRef();
    const inputElement3 = React.useRef();
    const inputElement4 = React.useRef();
    const inputElement5 = React.useRef();
    const inputElement6 = React.useRef();

    const [formData, setFormData] = React.useState({ name: '', desc: '', discount: '', imgUrl: '', originalPrice: '', quantity: '' });

    const resetFormFields = () => {
        inputElement1.current.value = "";
        inputElement2.current.value = "";
        inputElement3.current.value = "";
        inputElement4.current.value = "";
        inputElement5.current.value = "";
        inputElement6.current.value = "";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(formData));
        setToggle(prevCheck => !prevCheck);
        resetFormFields();
        toast.success("Data Added Successfully");
    }

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const addingStatus = useSelector((state)=> state.add_new_product.status)

    return (
        <form onSubmit={handleSubmit}>
            <Stack direction='column'>
                <Box>
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }} spacing='10px'>
                        <Input variant='filled' type='text' name='name' placeholder='Product Name' onChange={handleOnChange} ref={inputElement1} isRequired disabled={addingStatus==="loading"}/>
                        <Input variant='filled' type='text' name='desc' placeholder='Short Description' onChange={handleOnChange} ref={inputElement2} isRequired disabled={addingStatus==="loading"}/>
                        <Input variant='filled' type='text' name='imgUrl' placeholder='Image URL' onChange={handleOnChange} ref={inputElement3} isRequired disabled={addingStatus==="loading"}/>
                        <Input variant='filled' type='number' name='quantity' placeholder='Quantity' onChange={handleOnChange} ref={inputElement4} isRequired disabled={addingStatus==="loading"}/>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<BiRupee />}
                            />
                            <Input variant='filled' type='number' name='originalPrice' placeholder='Original Price' onChange={handleOnChange} ref={inputElement5} isRequired disabled={addingStatus==="loading"}/>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<BsPercent />}
                            />
                            <Input variant='filled' type='number' name='discount' placeholder='Discount' onChange={handleOnChange} ref={inputElement6} isRequired disabled={addingStatus==="loading"}/>
                        </InputGroup>
                    </SimpleGrid>
                </Box>
                <Box>
                    <Button colorScheme='blue' type='submit' disabled={addingStatus==="loading"}>Add</Button>
                </Box>
            </Stack>
        </form>
    )
}
