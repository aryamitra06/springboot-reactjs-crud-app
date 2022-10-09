import { Container, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import AddDataForm from '../components/AddDataForm'
import AllProductsContainer from '../components/AllProductsContainer'


export default function Home() {

    const [toggle, setToggle] = React.useState(false);

    return (
        <>
            <Container maxW='container.xl' marginTop={4}>
                <Tabs variant='enclosed' defaultIndex={1}>
                    <TabList>
                        <Tab>Add Product</Tab>
                        <Tab>All Products</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <AddDataForm setToggle={setToggle}/>
                        </TabPanel>
                        <TabPanel>
                            <AllProductsContainer toggle={toggle} setToggle={setToggle}/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container>
        </>
    )
}
