import { Flex, VStack } from '@chakra-ui/react';

export interface MainCard {
    children?: JSX.Element | JSX.Element[];
}

const MainCardCustom = (prop: MainCard) => {
    return (
        <>
            <Flex
                align={'center'}
                direction={'column'}
                justify={'center'}
                ml={'0rem'}
                mt={'2rem'}
            >
                <VStack
                    align={'center'}
                    border={'1px'}
                    borderColor={'border'}
                    borderRadius="lg"
                    boxShadow="lg"
                    justify={'center'}
                    maxW="80vw"
                    minW={['2xs', '2xs', 'xl', 'xl']}
                    overflow="auto"
                >
                    {prop.children}
                </VStack>
            </Flex>
        </>
    );
};

export default MainCardCustom;