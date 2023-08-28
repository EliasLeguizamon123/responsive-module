/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';
import { Field, ErrorMessage } from 'formik';
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

const CustomSelectControl = (props: CustomInput) => {
    return (
        <>
            <Field
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type="text"
            >
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
                            <Select
                                color="gray.500"
                                h={['60px', '55px', '45px', '40px']}
                                {...field}
                                autoFocus={props.autofocus}
                                defaultValue={
                                    props.defaultValue ? props.defaultValue : ''
                                }
                                value={
                                    props.selectValue
                                        ? props.selectValue
                                        : field.value
                                }
                                variant={
                                    props.variant ? props.variant : 'outline'
                                }
                                onChange={(e) => {
                                    field.onChange(e);
                                    props.onChange && props.onChange(e);
                                }}
                            >
                                {props.children}
                            </Select>
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

export default CustomSelectControl;