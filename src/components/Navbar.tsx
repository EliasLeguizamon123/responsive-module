import { Button, Flex, Image, Spacer, Text, Stack, useMediaQuery, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import logo from '../assets/logo.assets.jpg';
import { IoMdExit } from 'react-icons/io';
import { BsChevronDown, BsGearFill } from 'react-icons/bs';
import DrawerMenu from './DrawerMenu';
import React from 'react';

export function Navbar() {
    const [ isLargerThan800 ] = useMediaQuery('(min-width: 800px)');
    const [ isLargerThan478 ] = useMediaQuery('(min-width: 478px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

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
            justifyContent={["space-between", "space-beetween", "space-beetween", "center"]}
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
                            display={['none', 'none', 'flex', 'flex']}
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
                            <DrawerHeader>Menu</DrawerHeader>
                            <DrawerBody>

                            </DrawerBody>
                            <DrawerFooter>
                                <Button variant="submit">Sign out</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </>
            ) }
             
        </Stack>
    );
}

export default Navbar;