import { Link, Icon } from "@chakra-ui/react"
import React from "react"
import { IconType } from "react-icons"
import { useLocation, Link as RouterLink } from "react-router-dom"
type sideItemProps = {
	pagePath: string
	pageTitle: string
	inactiveIcon: IconType
	activeIcon: IconType
}

export default function SideItem({
	pagePath,
	activeIcon,
	inactiveIcon,
}: sideItemProps) {

    const location = useLocation()

	return location.pathname == pagePath ? (
		<Link
			as={RouterLink}
			to={pagePath}
			bg="activeItem"
			h="50px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection={{ base: "column" }}
			borderTopLeftRadius="lg"
			borderBottomLeftRadius={{ md: "lg" }}
			borderTopRightRadius={{ base: "lg", md: "none" }}
			gap="2"
			w="70%"
			alignSelf="end"
			_hover={{}}
		>
			<Icon as={activeIcon} color="whiteAlpha.900" h="35px" w="35px" />
		</Link>
	) : (
		<Link
			as={RouterLink}
			to={pagePath}
			h="50px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			gap="2"
			w="70%"
			borderLeftRadius="lg"
			alignSelf="center"
			_hover={{}}
		>
			<Icon as={inactiveIcon} color="whiteAlpha.900" h="35px" w="35px" />
		</Link>
	)
}
