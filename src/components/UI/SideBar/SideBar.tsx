import { Flex, Icon, Stack } from "@chakra-ui/react"
import SideItem from "./SideItem"
import {
	HiTicket,
	HiOutlineTicket,
	HiHome,
	HiOutlineHome,
	HiChartSquareBar,
	HiOutlineChartSquareBar,
} from "react-icons/hi"

import { HiOutlineWrenchScrewdriver } from "react-icons/hi2"
import React from "react"

const sideItems = [
	{
		pageTitle: "Home",
		pagePath: "/it_ticketing_ijl",
		inactiveIcon: HiOutlineHome,
		activeIcon: HiHome,
	},
	{
		pageTitle: "Tickets",
		pagePath: "/it_ticketing_ijl/tickets",
		inactiveIcon: HiOutlineTicket,
		activeIcon: HiTicket,
	},
	{
		pageTitle: "Analytics",
		pagePath: "/it_ticketing_ijl/analytics",
		inactiveIcon: HiOutlineChartSquareBar,
		activeIcon: HiChartSquareBar,
	},
]

export default function SideBar() {
	return (
		<Flex
			as="nav"
			direction={{ base: "row", md: "column" }}
			h="full"
			boxShadow="gray"
			gap="4"
			alignItems="center"
			bg="darkBlue"
			py={{base: 0, md: 5}}
			px={{base: 2, md: 0}}
		>
			<Icon
				h="50px"
				w="50px"
				m="4"
				color="whiteAlpha.900"
				as={HiOutlineWrenchScrewdriver}
			/>
			<Stack
				direction={{ base: "row", md: "column" }}
				w={{ base: "70%", md: "full" }}
				h="full"
			>
				{sideItems.map((sideItem) => (
					<SideItem {...sideItem} key={sideItem.pagePath} />
				))}
			</Stack>
		</Flex>
	)
}
