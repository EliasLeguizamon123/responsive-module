import { Button, Flex, Image, Spacer, Text, Stack, useMediaQuery, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Divider, Box, VStack } from '@chakra-ui/react';
import logo from '../assets/logo.assets.jpg';
import { IoMdExit } from 'react-icons/io';
import { BsChevronDown, BsGearFill } from 'react-icons/bs';
import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiApplearcade } from 'react-icons/si';
import { TbBuildingStore } from 'react-icons/tb';

export function Navbar() {
    const [ isLargerThan800 ] = useMediaQuery('(min-width: 480px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

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
        <Stack
            align={'center'}
            bgColor="primary"
            color="white"
            justify="center"
            direction={'row'}
            fontSize={'1.3rem'}
            minH={['50px', '60px']}
            height={'9vh'}
            px={'1rem'}
            py={'0.5rem'}
            justifyContent={["space-between", "space-beetween", "center", "center"]}
        >
            <Image boxSize={['35px', '45px', '55px', '65px']} src={logo} />
            <Text
                as="b"
                fontSize={['16px', '18px', '20.8px']}
                fontStyle={'italic'}
                display={['none', 'flex', 'flex', 'flex']}
            >
                Magnetic cash theme
            </Text>
            {isLargerThan800 ? (
                <>
                    <Spacer />
                    <Flex>
                        <Button
                            w="full"
                            _hover={{ color: 'gray.400', bg: 'gray.200' }}
                            color="white"
                            display={['none', 'flex', 'flex', 'flex']}
                            fontStyle="italic"
                            rightIcon={<IoMdExit size={'25'} />}
                            variant="ghost"
                            onClick={() => {
                                window.location.reload();
                            }}
                            >
                            {"Sign Out"}
                        </Button>
                    </Flex>
                </>
            ): (
                <>
                    <Button
                        _active={{ background: 'transparent' }}
                        ref={btnRef}
                        _hover={{ background: 'transparent' }}
                        alignItems={'center'}
                        color="white"
                        background={'transparent'}
                        display={'flex'}
                        fontSize={['25px', '25px', '15px', '15px']}
                        gap={['0.2em', '0.4em', '0.5em', '0.5em']}
                        justifySelf="end"
                        onClick={() => onOpen()}
                        >
                        <BsGearFill />
                        <BsChevronDown fontSize={'0.75em'} />
                    </Button>
                    <Drawer isOpen={isOpen} onClose={onClose} size={'full'}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader textAlign="center">Menu</DrawerHeader>
                            <Divider />
                            <DrawerBody>
                                <Box textAlign="center">
                                    <Text
                                        as="u"
                                        fontSize={['16px', '18px', '20.8px']}
                                    >
                                        Navigation
                                    </Text>
                                    <Box pt={5}>

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
                                    </Box>
                                </Box>
                            </DrawerBody>
                            <Divider />
                            <DrawerFooter>
                                <Button w="full" variant="submit" onClick={onClose}>Sign out</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </>
            )}
             
        </Stack>
    );
}

export default Navbar;