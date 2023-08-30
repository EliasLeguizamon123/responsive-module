
import { Flex } from '@chakra-ui/react';
import { SidebarButton } from './SidebarButton';

export function Sidebar() {
    const buttons = [
        {
            name: 'Dashboard',
            path: 'dashboard',
            type: 'dashboard',
        },
        {
            name: 'Stores',
            path: 'products',
            type: 'products',
        },
        {
            name: 'Terminals',
            path: 'vendors',
            type: 'vendors',
        },{
            name: 'Terminals',
            path: 'vendors',
            type: 'vendors',
        },{
            name: 'Terminals',
            path: 'vendors',
            type: 'vendors',
        },{
            name: 'Terminals',
            path: 'vendors',
            type: 'vendors',
        },{
            name: 'Terminals',
            path: 'vendors',
            type: 'vendors',
        },
    ];

    return (
        <Flex
            bg="sidebar"
            color="white"
            direction="column"
            display={['none', 'flex', 'flex', 'flex']}
            fontSize={'1rem'}
            gap={'0.25rem'}
            h={'auto'}
            overflow="auto"
            py="1.5rem"
            w={["4rem", "6rem", "10rem", "12rem"]}
        >
            {buttons.map((button) =>(
                    <SidebarButton
                        key={button.name}
                        name={button.name}
                        path={button.path}
                />
                )
            )}
        </Flex>
    );
}