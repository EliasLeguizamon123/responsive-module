import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Store } from "./ListTable";

export interface props {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    store: Store
}

export default function ModalMenu(props: props){

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered closeOnOverlayClick={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Store detail: {props.store.name} </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box textAlign="center">
                        <Text>TEST STORE</Text>
                        <Text>ARGENTINA</Text>
                        <Text>28/08/2023</Text>
                        <Text>Elias Leguizamon</Text>
                        <Text>Connected</Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}