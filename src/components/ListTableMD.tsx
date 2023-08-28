import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
 export interface Store {
    name: string;
    city: string;
    country: string;
    dateFrom: string;
    contact: string;
    connected: boolean;
 }
export default function ListTableMD() {

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
        <TableContainer w="full" minW="150px">
            <Table variant="list" size="md">
                <TableCaption>List of stores normal size</TableCaption>
                <Thead bgColor="primary"position="sticky">
                    <Tr>
                        <Th>Name</Th>
                        <Th display={['none', 'none', 'none', 'table-cell']}>City</Th>
                        <Th display={['none', 'table-cell', 'table-cell', 'table-cell']}>Country</Th>
                        <Th display={['none', 'none', 'none', 'table-cell']}>Date from</Th>
                        <Th display={['none', 'none', 'table-cell', 'table-cell']}>Contact</Th>
                        <Th>Connected</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stores.map((store, index) => (
                        <Tr key={index}>
                            <Td>{store.name}</Td>
                            <Td display={['none', 'none', 'none', 'table-cell']}>{store.city}</Td>
                            <Td display={['none', 'table-cell', 'table-cell', 'table-cell']}>{store.country}</Td>
                            <Td display={['none', 'none', 'none', 'table-cell']}>{store.dateFrom}</Td>
                            <Td display={['none', 'none', 'table-cell', 'table-cell']}>{store.contact}</Td>
                            <Td>{store.connected ? (
                                <Button variant="ok">OK</Button>
                            ) : (
                                <Button variant="not">NOT</Button>
                            )}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}