import { Grid, GridItem } from "@chakra-ui/react"
import React from "react"
import SideBar from "./SideBar/SideBar"

export default function Layout({ children }: { children: React.ReactNode }) {

	return (
		<Grid
			templateAreas={{
				base: `
				"nav"
				"main"`,
				md: `
				"nav main"`,
			}}
			gridTemplateColumns={{ base: "auto", md: "80px 1fr" }}
			gridTemplateRows={{ base: "65px 1fr", md: "auto" }}
			as="main"
			h="100vh"
			bg="backgroundGray"
		>
			<GridItem
				sx={{
					"::-webkit-scrollbar": {
						display: "none",
					},
				}}
				area="main"
				h="95%"
				w="95%"
				alignSelf="center"
				borderRadius="xl"
				justifySelf="center"
				boxShadow="gray"
				display="flex"
				justifyContent="center"
				overflow="scroll"
			>
				{children}
			</GridItem>
			<GridItem area="nav">
				<SideBar />
			</GridItem>
		</Grid>
	)
}
