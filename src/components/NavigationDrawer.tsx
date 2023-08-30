/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Drawer, Divider, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text } from "@chakra-ui/react";
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiApplearcade } from 'react-icons/si';
import { TbBuildingStore } from 'react-icons/tb';

export interface props {
    isOpen: boolean;
    onClose: () => void;
    onOpen?: () => void;
    btnRef?: any;
}

export default function DrawerNavigation (props: props) {

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
        },
    ];

    return (
        <Drawer isOpen={props.isOpen} onClose={props.onClose} size="full" placement="left">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader textAlign="center"> 
                    Navigation
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        _active={{
                            background: 'primary',
                            textDecoration: 'underline',
                        }}
                        _hover={{
                            background: 'primary',
                            textDecoration: 'underline',
                        }}
                        fontSize={['20px', '18px', '16px', '14px']}
                        variant="ghost"
                        width={'100%'}
                        mt={1}
                        leftIcon={button.name === 'Dashboard' ? (
                            <AiOutlineDashboard />
                            ) : button.name === 'Stores' ? (
                            <TbBuildingStore />
                            ) : button.name === 'Terminals' ? (
                            <SiApplearcade />
                        ): <SiApplearcade />}
                        onClick={() => {window.location.reload()}}
                        >
                        <Text>{button.name}</Text>
                    </Button>
                ))}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}