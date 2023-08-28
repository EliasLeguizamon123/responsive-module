import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import MainCardCustom from "./CustomCard";
import { Form, Formik } from "formik";
import CustomFieldControl from "./CustomFieldControl";
import CustomSelectControl from "./CustomSelectControl";

export default function CustomForm () {
    const currentDate = new Date().toISOString().substr(0, 10);
    return (
        <MainCardCustom>
            <Text as="u">Form</Text>
            <Formik 
                enableReinitialize 
                initialValues={
                    {
                        name: '', 
                        description: '', 
                        country: '', 
                        city: '', 
                        connected: true, 
                        dateFrom: currentDate, 
                        contact: ''
                    }
                } 
                onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
                <Form style={{width: '100%'}}>
                    <Grid 
                        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)','repeat(3, 1fr)']}
                        gap={6}
                        p={2}
                        w="full"
                        minW="150px"
                    >
                        <GridItem>
                            <CustomFieldControl
                                isRequired
                                name="name"
                                label="Name"
                                placeholder="Name"
                                type="text"
                                id="name"
                            />
                        </GridItem>
                        <GridItem colSpan={[1, 1, 1, 2]}>
                            <CustomFieldControl
                                isRequired
                                name="description"
                                label="Description"
                                placeholder="Description"
                                type="text"
                                id="description"
                            />
                        </GridItem>
                        <GridItem>
                            <CustomSelectControl
                                name="country"
                                label="Country"
                                placeholder="Country"
                                id="country"
                                >
                                    <option value="AR">Argentina</option>
                                    <option value="BR">Brazil</option>
                                    <option value="CA">Canada</option>
                                    <option value="GC">Greece</option>
                                    <option value="JP">Japan</option>
                                    <option value="NZ">New Zealand</option>
                                </CustomSelectControl>
                        </GridItem>
                        <GridItem>
                            <CustomFieldControl
                                isRequired
                                name="city"
                                label="City"
                                placeholder="City"
                                type="text"
                                id="city"
                            />
                        </GridItem>
                        <GridItem>
                            <CustomSelectControl
                                name="connected"
                                label="Connected"
                                placeholder="Connected"
                                id="connected"
                                >
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </CustomSelectControl>
                        </GridItem>
                        <GridItem>
                            <CustomFieldControl
                                name="dateFrom"
                                label="Date from"
                                placeholder="Date from"
                                type="date"
                                id="dateFrom"
                            />
                        </GridItem>
                        <GridItem>
                            <CustomFieldControl
                                isRequired
                                name="contact"
                                label="Contact"
                                placeholder="Contact"
                                type="text"
                                id="contact"
                            />
                        </GridItem>
                        <GridItem colStart={1}>
                            <Button type="submit" variant="submit" w="full">
                                Submit
                            </Button>
                        </GridItem>
                    </Grid>
                </Form>
            </Formik>
        </MainCardCustom>
    )
}