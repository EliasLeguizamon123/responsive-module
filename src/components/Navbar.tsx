import { Button, Flex, Image, Spacer, Text, Stack, useMediaQuery } from '@chakra-ui/react';
import logo from '../assets/logo.assets.jpg';
import { IoMdExit } from 'react-icons/io';

export function Navbar() {
    const [ isLargerThan800 ] = useMediaQuery('(min-width: 800px)');

    return (
        <Stack
            align={'center'}
            bgColor="primary"
            color="white"
            direction={'row'}
            justify={"center"}
            fontSize={'1.3rem'}
            gap={'5'}
            minH={['50px', '60px']}
            height={'9vh'}
            px={'1rem'}
            py={'0.5rem'}
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
            ): null }
             
        </Stack>
    );
}

export default Navbar;