import React from 'react'
import toast from 'react-hot-toast';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductById } from '../../redux/slices/DeleteProductSlice';

export default function DeleteProduct({ isOpen, onClose, id, setToggle }) {
    const dispatch = useDispatch();

    const deleteProductHandler = () => {
        dispatch(deleteProductById(id))
        toast.success("Data Deleted Successfully");
        setToggle(prevCheck => !prevCheck);
    }

    const deletingStatus = useSelector((state)=> state.delete_product_by_id.status)

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom' isCentered>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete Product</ModalHeader>
                <ModalCloseButton />
                <ModalFooter>
                    <Button variant='ghost' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme='red' onClick={deleteProductHandler} disabled={deletingStatus==="loading"}>Delete</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
