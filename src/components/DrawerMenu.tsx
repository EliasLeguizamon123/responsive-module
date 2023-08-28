import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";

export interface props {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
    ref?: React.RefObject<HTMLButtonElement>;
}

export default function DrawerMenu(props: props) {
    return(
        <Drawer isOpen={props.isOpen} onClose={props.onClose} size={'full'}>
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
    )
}