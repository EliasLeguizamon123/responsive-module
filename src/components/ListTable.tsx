import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import ModalMenu from "./ModalMenu";
 export interface Store {
    name: string;
    city: string;
    country: string;
    dateFrom: string;
    contact: string;
    connected: boolean;
 }
export default function ListTable() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const stores: Store[] = [{
        name: 'Store 1',
        city: 'City 1',
        country: 'AR',
        dateFrom: '11/02/2023',
        contact: '123123123',
        connected: true   
    },
    {
        name: 'Store 2',
        city: 'City 2',
        country: 'NZ',
        dateFrom: '12/02/2023',
        contact: '123123123',
        connected: false
    },
    {
        name: 'Store 3',
        city: 'City 3',
        country: 'CA',
        dateFrom: '13/02/2023',
        contact: '123123123',
        connected: true
    },
    {
        name: 'Store 4',
        city: 'City 4',
        country: 'JP',
        dateFrom: '14/02/2023',
        contact: '123123123',
        connected: false
    },
    {
        name: 'Store 5',
        city: 'City 5',
        country: 'BR',
        dateFrom: '15/02/2023',
        contact: '123123123',
        connected: true
    },
    {
        name: 'Store 6',
        city: 'City 6',
        country: 'GC',
        dateFrom: '16/02/2023',
        contact: '123123123',
        connected: true
    },
    {
        name: 'Store 7',
        city: 'City 7',
        country: 'CO',
        dateFrom: '17/02/2023',
        contact: '123123123',
        connected: false
    },
]
    return (
        <TableContainer minW="150px" w="full">
            <Table variant="list" size="sm">
                <TableCaption>List of stores small size</TableCaption>
                <Thead bgColor="primary"position="sticky">
                    <Tr>
                        <Th>Name</Th>
                        <Th>City</Th>
                        <Th>Country</Th>
                        <Th>Date from</Th>
                        <Th>Contact</Th>
                        <Th>Connected</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stores.map((store, index) => (
                        <Tr key={index}>
                            <Td>{store.name}</Td>
                            <Td>{store.city}</Td>
                            <Td>{store.country}</Td>
                            <Td>{store.dateFrom}</Td>
                            <Td>{store.contact}</Td>
                            <Td>{store.connected ? (
                                <>
                                    <Button variant="ok" onClick={onOpen}>OK</Button>
                                    <ModalMenu onClose={onClose} onOpen={onOpen} isOpen={isOpen} store={store} />
                                </>
                            ) : (
                                <>
                                    <Button variant="not" onClick={onOpen}>NOT</Button>
                                    <ModalMenu onClose={onClose} onOpen={onOpen} isOpen={isOpen} store={store} />
                                </>
                            )}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}