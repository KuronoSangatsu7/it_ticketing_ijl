import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Header from "../../../components/UI/Header"
import "@testing-library/jest-dom"

describe("Header", () => {
	it("renders the title", () => {
		const { getByText } = render(
			<Header title="Test Title" buttonName="None" />
		)
		expect(getByText("Test Title")).toBeInTheDocument()
	})

	it("renders the item ID when provided", () => {
		const { getByText } = render(
			<Header title="Test Title" itemId="123" buttonName="None" />
		)
		expect(getByText("#123")).toBeInTheDocument()
	})

	it("renders the title and item ID if provided", () => {
		const title = "Test Header"
		const itemId = "123"
		const { getByTestId } = render(
			<Header title={title} itemId={itemId} buttonName="Add Item" />
		)

		expect(getByTestId("header-title")).toHaveTextContent(title)
		expect(getByTestId("header-item-id")).toHaveTextContent(`#${itemId}`)
	})

	it("renders the button with correct name and default icon", () => {
		const title = "Test Header"
		const buttonName = "Add Item"
		const { getByTestId } = render(
			<Header title={title} buttonName={buttonName} />
		)

		expect(getByTestId("header-button")).toHaveTextContent(buttonName)

		const addIcon = getByTestId("header-add-icon")

		expect(addIcon).toBeInTheDocument()
	})

	it("renders the button with correct name and edit icon", () => {
		const title = "Test Header"
		const buttonName = "Edit Item"
		const { getByTestId } = render(
			<Header title={title} buttonName={buttonName} buttonIcon="Edit" />
		)

		expect(getByTestId("header-button")).toHaveTextContent(buttonName)

		const editIcon = getByTestId("header-edit-icon")

		expect(editIcon).toBeInTheDocument()
	})

	it("triggers onClick function when button is clicked", () => {
		const title = "Test Header"
		const onClick = jest.fn()
		const { getByTestId } = render(
			<Header title={title} buttonName="Add Item" onClick={onClick} />
		)

		fireEvent.click(getByTestId("header-button"))
		expect(onClick).toHaveBeenCalledTimes(1)
	})

    it("triggers onClick function when button is clicked on mobile", () => {
        global.innerWidth = 500
        const title = "Test Header"
		const onClick = jest.fn()
		const { getByTestId } = render(
			<Header title={title} buttonName="Add Item" onClick={onClick} />
		)

		fireEvent.click(getByTestId("header-button-mobile"))
		expect(onClick).toHaveBeenCalledTimes(1)
	})

	it("renders mobile button when on mobile view with default icon", () => {
		global.innerWidth = 500
		const title = "Test Header"
		const { getByTestId } = render(
			<Header title={title} buttonName="Add Item" />
		)

		expect(getByTestId("header-button-mobile")).toBeInTheDocument()

		const addIcon = getByTestId("header-add-icon-mobile")
		expect(addIcon).toBeInTheDocument()
	})

    it("renders mobile button when on mobile view with edit icon", () => {
		global.innerWidth = 500
		const title = "Test Header"
		const { getByTestId } = render(
			<Header title={title} buttonName="Edit Item" buttonIcon="Edit" />
		)

		expect(getByTestId("header-button-mobile")).toBeInTheDocument()

		const editIcon = getByTestId("header-edit-icon-mobile")
		expect(editIcon).toBeInTheDocument()
	})
})
