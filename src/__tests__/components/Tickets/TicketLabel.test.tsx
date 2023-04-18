import { render } from "@testing-library/react"
import TicketLabel from "../../../components/Tickets/TicketLabel"
import React from "react"
import "@testing-library/jest-dom"

describe("TicketLabel", () => {
	it("renders the correct labels", () => {
		const { getByText } = render(<TicketLabel />)
		expect(getByText("Symptom")).toBeInTheDocument()
		expect(getByText("First Name")).toBeInTheDocument()
		expect(getByText("Last Name")).toBeInTheDocument()
		expect(getByText("Employee ID")).toBeInTheDocument()
		expect(getByText("Contact Email")).toBeInTheDocument()
		expect(getByText("Department")).toBeInTheDocument()
		expect(getByText("Assigned Tech")).toBeInTheDocument()
		expect(getByText("Status")).toBeInTheDocument()
	})
})
