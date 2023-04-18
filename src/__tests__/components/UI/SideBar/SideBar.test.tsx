import { render, screen } from "@testing-library/react"
import SideBar from "../../../../components/UI/SideBar/SideBar"
import * as React from "react"
import "@testing-library/jest-dom"

jest.mock("../../../../components/UI/SideBar/SideItem", () => ({
	__esModule: true,
	default: function MockSideItem(props) {
		return <div data-testid={`side-item-${props.pageTitle}`} />
	},
}))

describe("SideBar", () => {
	test("renders correct number of side items", () => {
		const { getAllByTestId } = render(<SideBar />)
		const sideItemElements = getAllByTestId(/side-item-.+/)
		expect(sideItemElements.length).toBe(3)
	})
})
