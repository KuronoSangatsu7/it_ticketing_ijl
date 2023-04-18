import {
	Flex,
	Heading,
	Spacer,
	Button,
	Divider,
	VStack,
	Text,
	IconButton,
} from "@chakra-ui/react"
import { AddIcon, EditIcon } from "@chakra-ui/icons"
import React from "react"

export default function Header(props: {
	title: string
	itemId?: string
	buttonName: string
	buttonIcon?: "Edit"
	collectionName?: string
	onClick?: () => void
}) {
	return (
		<VStack
			minH="10px"
			h="10%"
			w="full"
			paddingTop="6"
			paddingBottom="4"
			paddingX="8"
			alignItems="center"
			flexDirection="column"
			minHeight="75px"
			data-testid="header"
		>
			<Flex w="full" data-testid="header-flex">
				<Heading data-testid="header-title">
					{props.title}
					{props.hasOwnProperty("itemId") ? (
						<Text
							as="span"
							fontWeight="hairline"
							fontSize={{ base: "sm", md: "xl" }}
							data-testid="header-item-id"
						>{` #${props.itemId}`}</Text>
					) : (
						<></>
					)}
				</Heading>
				<Spacer></Spacer>
				{props.buttonName != "None" && (
					<>
						<Button
							display={{ base: "none", md: "block" }}
							borderRadius="md"
							bg="lighterBlue"
							textColor="whiteAlpha.900"
							leftIcon={
								props.hasOwnProperty("buttonIcon") ? (
									<EditIcon data-testid="header-edit-icon" />
								) : (
									<AddIcon data-testid="header-add-icon" />
								)
							}
							_hover={{ bg: "black" }}
							w="156px"
							onClick={() => props.onClick && props.onClick()}
							data-testid="header-button"
						>
							{props.buttonName}
						</Button>
						<IconButton
							aria-label={props.buttonName}
							icon={
								props.hasOwnProperty("buttonIcon") ? (
									<EditIcon
										color="whiteAlpha.900"
										h="25px"
										w="25px"
										data-testid="header-edit-icon-mobile"
									/>
								) : (
									<AddIcon
										color="whiteAlpha.900"
										data-testid="header-add-icon-mobile"
									/>
								)
							}
							borderRadius="full"
							display={{ base: "block", md: "none" }}
							bg="lighterBlue"
							_hover={{ bg: "black" }}
							h="70px"
							w="70px"
							position="fixed"
							right="40px"
							bottom="40px"
							onClick={() => props.onClick && props.onClick()}
							data-testid="header-button-mobile"
						/>
					</>
				)}
			</Flex>
			<Divider borderColor="blackAlpha.800" />
		</VStack>
	)
}
