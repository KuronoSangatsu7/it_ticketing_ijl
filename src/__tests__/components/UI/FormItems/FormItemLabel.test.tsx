import { render, screen } from "@testing-library/react"
import FormItemLabel from "../../../../components/UI/FormItems/FormItemLabel"
import * as React from "react"
import "@testing-library/jest-dom"

describe("FormItemLabel", () => {
	it("renders with the correct text and htmlFor prop", () => {
		const htmlFor = "test-input"
		const text = "Test Label"

		render(<FormItemLabel htmlFor={htmlFor} text={text} />)

		const labelElement = screen.getByText(text)

		expect(labelElement).toBeInTheDocument()
		expect(labelElement).toHaveAttribute("for", htmlFor)
	})
})
