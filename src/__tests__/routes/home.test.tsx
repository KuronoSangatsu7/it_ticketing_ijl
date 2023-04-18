import { render, screen } from "@testing-library/react"
import Home from "../../routes/home"
import React from "react"
import "@testing-library/jest-dom"

describe("Home Page", () => {
	it("should render welcome text", () => {
		render(<Home />)

		const welcomeText = screen.getByText(/welcome/i)
		expect(welcomeText).toBeInTheDocument()
		expect(welcomeText.tagName).toEqual("SPAN")
	})
})
