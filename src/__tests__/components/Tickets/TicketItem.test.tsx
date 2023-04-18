import { render } from "@testing-library/react"
import TicketItem from "../../../components/Tickets/TicketItem"
import React from "react"
import "@testing-library/jest-dom"

describe("TicketItem", () => {
  const ticketDetails = {
    symptom: "something is not right",
    first_name: "John",
    last_name: "Doe",
    employee_id: "1234",
    department: "network",
    assigned_tech: "Shelly Ginder",
    resolved: false,
    description: "something is not working correctly",
    email: "test@test.com",
    owner_id: "no one",
    notes: "pls fix this",
    id: "123123123123"
  }

  it("renders the ticket details", () => {
    const { getByText } = render(<TicketItem {...ticketDetails} />)
    expect(getByText(ticketDetails.symptom)).toBeInTheDocument()
    expect(getByText(ticketDetails.first_name)).toBeInTheDocument()
    expect(getByText(ticketDetails.last_name)).toBeInTheDocument()
    expect(getByText(ticketDetails.employee_id)).toBeInTheDocument()
    expect(getByText(ticketDetails.department)).toBeInTheDocument()
    expect(getByText(ticketDetails.assigned_tech)).toBeInTheDocument()
  })

  it("renders a pending tag if the ticket is not resolved", () => {
    const { getByText } = render(<TicketItem {...ticketDetails} />)
    expect(getByText(/pending/i)).toBeInTheDocument()
  })

  it("renders a resolved tag if the ticket is resolved", () => {
    const { getByText } = render(
      <TicketItem {...ticketDetails} resolved={true} />
    )
    expect(getByText(/resolved/i)).toBeInTheDocument()
  })
})
