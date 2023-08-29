import { Box, Flex, VStack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import MainCardCustom from "./components/CustomCard"
import ListTable from "./components/ListTable"
import ListTableMD from "./components/ListTableMD"
import CustomForm from "./components/CustomForm"
import { Sidebar } from "./components/Sidebar"


function App() {

  return (
	<Box 
		minH="100vh"
		flexDirection="column"
		overflow={'hidden'}
		display="flex"
		w="100vw"
		maxH="100vh"
	>
			<Navbar />
			<Flex pt="max(9vh, 60px)" h="full" maxH="100vh">
				<Sidebar />
				<VStack spacing="2rem" w="full" h="92vh" overflow="auto">
					<CustomForm />
					<MainCardCustom>
						<ListTable />
					</MainCardCustom>
					<MainCardCustom>
						<ListTableMD />
					</MainCardCustom>
				</VStack>
			</Flex>
	</Box>
  )
}

export default App
