import React from "react"
import { render } from "@testing-library/react"
import Layout from "../../../components/UI/Layout"
import "@testing-library/jest-dom"

jest.mock("../../../components/UI/SideBar/SideBar", () => () => (
	<div data-testid="sidebar">Mocked sidebar</div>
))

describe("Layout component", () => {
	it("should render children", () => {
		const { getByText } = render(
			<Layout>
				<div>Test content</div>
			</Layout>
		)
		expect(getByText("Test content")).toBeInTheDocument()
	})

	it("should render SideBar component", () => {
		const { getByTestId } = render(
			<Layout>
				<div>Test content</div>
			</Layout>
		)
		expect(getByTestId("sidebar")).toBeInTheDocument()
	})
})
