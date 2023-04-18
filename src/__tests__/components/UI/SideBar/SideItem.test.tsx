import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideItem from "../../../../components/UI/SideBar/SideItem";
import { FaHome, FaStar } from "react-icons/fa";
import React from "react"
import "@testing-library/jest-dom"

describe("SideItem", () => {
  it("renders with active state when pagePath matches current location", () => {
    const {getByTestId} = render(
      <MemoryRouter initialEntries={["/home"]}>
        <SideItem
          pagePath="/home"
          activeIcon={FaHome}
          inactiveIcon={FaStar}
          pageTitle="Home"
        />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link");
    
    const activeIcon = getByTestId("active-icon")

    expect(activeIcon).toBeInTheDocument()
  });

  it("renders with inactive state when pagePath does not match current location", () => {
    const {getByTestId} = render(
      <MemoryRouter initialEntries={["/favorites"]}>
        <SideItem
          pagePath="/home"
          activeIcon={FaHome}
          inactiveIcon={FaStar}
          pageTitle="Home"
        />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link");
    
    const inactiveIcon = getByTestId("inactive-icon")

    expect(inactiveIcon).toBeInTheDocument()
  });

  it("renders with the correct state when location changes", () => {
    render(
      <MemoryRouter initialEntries={["/favorites"]}>
        <SideItem
          pagePath="/home"
          activeIcon={FaHome}
          inactiveIcon={FaStar}
          pageTitle="Home"
        />
      </MemoryRouter>
    );
  
    // check that inactive icon is being rendered initially
    const inactiveIcon = screen.getByTestId("inactive-icon");
    expect(inactiveIcon).toBeInTheDocument();
  
    // re-render component with new location
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <SideItem
          pagePath="/home"
          activeIcon={FaHome}
          inactiveIcon={FaStar}
          pageTitle="Home"
        />
      </MemoryRouter>
    );
  
    // check that active icon is being rendered after location changes
    const activeIcon = screen.getByTestId("active-icon");
    expect(activeIcon).toBeInTheDocument();
  });
});
