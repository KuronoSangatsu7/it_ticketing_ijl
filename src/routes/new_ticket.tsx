import TicketForm from "../components/Tickets/TicketForm"
import { Flex } from "@chakra-ui/react"
import Header from "../components/UI/Header"
import { ticketDetailsType } from "../types/ticketTypes"
import { useAtom } from "jotai"
import { currentUserAtom } from "../store/store"
import { addItem } from "../lib/firebaseFetch"
import React from "react"

export default function NewTicket() {
	const [currentUser] = useAtom(currentUserAtom)

    // This will always fail because no Authentication has been implemented in this app
	const handleSubmit = (data: Omit<ticketDetailsType, "id" | "owner_id">) => {
		const addQuery: Omit<ticketDetailsType, "id"> = {
			...data,
			owner_id: currentUser ? currentUser.uid : "no one",
		}
		
		return addItem("tickets", addQuery)
	}

	return (
		<Flex direction="column" w="full">
			<Header title="New Ticket" buttonName="None" />
			<TicketForm onSubmit={handleSubmit} />
		</Flex>
	)
}
