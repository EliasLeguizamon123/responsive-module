import { Box, Flex, VStack } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import MainCardCustom from "./components/CustomCard"
import ListTable from "./components/ListTable"
import ListTableMD from "./components/ListTableMD"
import CustomForm from "./components/CustomForm"
import { Sidebar } from "./components/Sidebar"


function App() {

  return (
	<Box minH="100vh"
		display="flex"
		flexDirection="column"
		justifyContent="center" 
		alignItems="center"
	>
		<Box h="100vh" w="100vw">
			<Navbar />
			<Flex>

			<Sidebar />
			<VStack  spacing="2rem" w="full">
				<CustomForm />
				<MainCardCustom>
					<ListTable />
				</MainCardCustom>
				<MainCardCustom>
					<ListTableMD />
				</MainCardCustom>
			</VStack>
			<br/>
			</Flex>
		</Box>
	</Box>
  )
}

export default App
