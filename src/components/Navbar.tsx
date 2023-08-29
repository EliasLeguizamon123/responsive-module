import { Button, Flex, Image, Spacer, Text, useMediaQuery, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Divider, Box } from '@chakra-ui/react';
import logo from '../assets/logo.assets.jpg';
import { IoMdExit } from 'react-icons/io';
import { BsChevronDown, BsGearFill } from 'react-icons/bs';
import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import DrawerNavigation from './NavigationDrawer';

export function Navbar() {
    const [ isLargerThan800 ] = useMediaQuery('(min-width: 480px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const disc2 = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null)

    return (
        <Flex
            align={'center'}
            bgColor="primary"
            color="white"
            justify="center"
            direction={'row'}
            fontSize={'1.3rem'}
            minH={['50px', '60px']}
            height={'9vh'}
            top={'0'}
            zIndex="1000"
            w="100vw"
            position="fixed"
            px={'1rem'}
            py={'0.5rem'}
            justifyContent={["space-between", "space-beetween", "center", "center"]}
        >
            <Box>
                <Button
                    _hover={{ color: 'gray.400', bg: 'gray.200' }}
                    color="white"
                    display={['flex', 'none', 'none', 'none']}
                    fontStyle="italic"
                    variant="ghost"
                    onClick={() => {
                        disc2.onOpen();
                    }}
                    >
                    <AiOutlineBars size="25" />
                </Button>
                <DrawerNavigation isOpen={disc2.isOpen} onClose={disc2.onClose} />
            </Box>
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

                                            MENU ..
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
             
        </Flex>
    );
}

export default Navbar;