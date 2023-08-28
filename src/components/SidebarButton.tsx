import { Button, Text, Flex, Box, Tooltip, useMediaQuery } from '@chakra-ui/react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { SiApplearcade } from 'react-icons/si';
import { TbBuildingStore } from 'react-icons/tb';
export interface SidebarButtonM {
    name: string;
    path: string;
    type: string;
    permission?: string;
}

export interface PathButton {
    path: string;
    name?: string;
    toStoreSelect?: boolean;
    onClose?: () => void;
}


export function SidebarButton(pathButtons: PathButton) {
    const [ isLargerThan767 ] = useMediaQuery('(max-width: 767px)');
    return (
        <>
        {
            isLargerThan767 ? (
            <Tooltip label={pathButtons.name} placement='right-start'>
                <Button
                    _active={{
                        background: 'selected',
                        textDecoration: 'underline',
                    }}
                    _hover={{
                        background: 'selected',
                        textDecoration: 'underline',
                    }}
                    variant="ghost"
                    width={'100%'}
                    >
                    <Flex
                        alignItems={'center'}
                        gap={'1em'}
                        justifyContent={'center'}
                        padding={'0.5em'}
                        width={'100%'}
                        >
                        {pathButtons.name === 'Dashboard' ? (
                            <AiOutlineDashboard color="#fff" />
                            ) : pathButtons.name === 'Stores' ? (
                                <TbBuildingStore color="#fff" />
                                ) : pathButtons.name === 'Terminals' ? (
                                    <SiApplearcade color="#fff" />
                                    ): null}

                        <Box display={['none', 'none', 'flex', 'flex']} height={'100%'} textAlign="left" color="white" width={'100%'}>
                            <Text>{pathButtons.name}</Text>
                        </Box>
                    </Flex>
                </Button>
            </Tooltip>
        ) : (
            <Button
                    _active={{
                        background: 'selected',
                        textDecoration: 'underline',
                    }}
                    _hover={{
                        background: 'selected',
                        textDecoration: 'underline',
                    }}
                    variant="ghost"
                    width={'100%'}
                    >
                    <Flex
                        alignItems={'center'}
                        gap={'1em'}
                        justifyContent={'center'}
                        padding={'0.5em'}
                        width={'100%'}
                        >
                        {pathButtons.name === 'Dashboard' ? (
                            <AiOutlineDashboard color="#fff" />
                            ) : pathButtons.name === 'Stores' ? (
                                <TbBuildingStore color="#fff" />
                                ) : pathButtons.name === 'Terminals' ? (
                                    <SiApplearcade color="#fff" />
                                    ): null}

                        <Box height={'100%'} width={'100%'}>
                            <Text>{pathButtons.name}</Text>
                        </Box>
                    </Flex>
                </Button>
        )}
        </>
    );
}