import { render, screen } from "@testing-library/react"

import LoadingSpinner from "../../../components/UI/LoadingSpinner"
import * as React from "react"

describe("LoadingSpinner component", () => {
	it("should render a loading spinner from Chakra", () => {
		const { container } = render(<LoadingSpinner />)

		expect(container.getElementsByClassName("chakra-spinner").length).toBe(
			1
		)

		const spinner = screen.getByText("Loading...")

		expect(spinner).toBeInstanceOf(HTMLSpanElement)
	})

	it("should render a loading spinner from Chakra with margin", () => {
		const { container } = render(<LoadingSpinner marginTop="100" />)

		expect(container.getElementsByClassName("chakra-spinner").length).toBe(
			1
		)

		const spinner = screen.getByText("Loading...")

		expect(spinner).toBeInstanceOf(HTMLSpanElement)
	})
})
