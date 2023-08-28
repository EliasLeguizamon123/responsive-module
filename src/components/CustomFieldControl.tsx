/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputRightElement,
    Text,
} from '@chakra-ui/react';
import { Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { InputElementProps } from '@chakra-ui/react';

export interface CustomInput {
    name: string;
    placeholder: string;
    id: string;
    children?: React.ReactNode;
    type?: string;
    errors?: unknown;
    touched?: unknown;
    leftAddon?: string;
    rightAddon?: string;
    variant?: string;
    inputProps?: InputElementProps;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: number;
    selectValue?: string;
    label?: string;
    dateFormat?: string;
    autofocus?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    value?: string;
}

const CustomFieldControl = (props: CustomInput) => {
    const [show, setShow] = useState(false);

    const handleShowPassword = () => setShow((show) => !show);

    return (
        <>
            <Field id={props.id} name={props.name}>
                {({ field, form }: { field: any; form: any }) => {
                    const error = form.errors[props.name];
                    const touched = form.touched[props.name];

                    return (
                        <FormControl isInvalid={!!error && touched}>
                            {props.label ? (
                                <FormLabel htmlFor={props.name}>
                                    {props.label}{' '}
                                    {props.isRequired ? (
                                        <Box as="span" color="red.500">
                                            *
                                        </Box>
                                    ) : null}
                                </FormLabel>
                            ) : null}
                            <InputGroup variant={'outline'}>
                                {props.leftAddon ? (
                                    <InputLeftAddon
                                        color="black"
                                        pointerEvents={'none'}
                                    >
                                        {props.leftAddon}
                                    </InputLeftAddon>
                                ) : null}
                                <Input
                                    {...props.inputProps}
                                    {...field}
                                    _focusWithin={{
                                        border: '0.15em solid',
                                        borderColor: 'primary',
                                        boxShadow: 'none',
                                    }}
                                    autoFocus={props.autofocus}
                                    bg="white"
                                    color={'black'}
                                    css={{
                                        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button':
                                            {
                                                '-webkit-appearance': 'none',
                                                margin: 0,
                                            },
                                        '-moz-appearance': 'textfield',
                                    }}
                                    id={props.id}
                                    isDisabled={props.isDisabled}
                                    name={props.name}
                                    placeholder={props.placeholder}
                                    step={
                                        props.type === 'number'
                                            ? '1'
                                            : undefined
                                    }
                                    type={
                                        props.type && !show
                                            ? props.type
                                            : 'text'
                                    }
                                    value={
                                        props.value ? props.value : field.value
                                    }
                                />
                                {props.rightAddon ? (
                                    <InputRightAddon pointerEvents={'none'}>
                                        {props.rightAddon}
                                    </InputRightAddon>
                                ) : null}
                                {props.type && props.type === 'password' ? (
                                    <InputRightElement>
                                        <Button
                                            _focus={{}}
                                            color="primary"
                                            h="95%"
                                            size="sm"
                                            variant="ghost"
                                            onClick={handleShowPassword}
                                        >
                                            {show ? (
                                                <AiOutlineEye />
                                            ) : (
                                                <AiOutlineEyeInvisible />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                ) : null}
                            </InputGroup>
                        </FormControl>
                    );
                }}
            </Field>
            <ErrorMessage
                name={props.name}
                render={(msg: string) => (
                    <Text color="red" fontSize={'0.8em'} margin={'0.5em'}>
                        {msg}
                    </Text>
                )}
            />
        </>
    );
};

export default CustomFieldControl;