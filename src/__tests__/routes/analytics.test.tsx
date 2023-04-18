import { render, screen } from "@testing-library/react"
import Analytics from "../../routes/analytics"
import React from "react"
import "@testing-library/jest-dom"

describe("Analytics Page", () => {
	it("should render 'Soon!' text", () => {
		render(<Analytics />)

		const soonText = screen.getByText(/soon!/i)
		expect(soonText).toBeInTheDocument()
		expect(soonText.tagName).toEqual("SPAN")
	})
})
