import { Flex } from "@chakra-ui/react"
import TicketItem from "../components/Tickets/TicketItem"
import TicketLabel from "../components/Tickets/TicketLabel"
import Header from "../components/UI/Header"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { useAtom } from "jotai"
import { ticketsAtom } from "../store/store"
import { useNavigate } from "react-router-dom"
import React from "react"

export default function Tickets() {

	const navigate = useNavigate()
	const [tickets] = useAtom(ticketsAtom)

	const handleClick = () => {
		navigate("/it_ticketing_ijl/new_ticket")
	}

	let pageContent = <LoadingSpinner />

	tickets &&
		(pageContent = (
			<>
				{tickets.map((ticket) => (
					<TicketItem {...ticket} key={ticket.id} />
				))}
			</>
		))

	return (
		<Flex direction="column" h="full" w="full" borderRadius="xl">
			<Header
				title="Tickets"
				buttonName="New Ticket"
				collectionName="tickets"
				onClick={handleClick}
			/>
			<TicketLabel />
			{pageContent}
		</Flex>
	)
}
