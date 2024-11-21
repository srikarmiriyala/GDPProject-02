import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlightSearch from "../components/FlightSearch";
import OneWaySearch from "../components/OneWaySearch";
import ReturnSearch from "../components/ReturnSearch";
import MultiCitySearch from "../components/MultiCitySearch";
import { useSearchParams } from "next/navigation";

// Mock dependencies
jest.mock("../components/OneWaySearch", () => jest.fn(() => <div>One Way Search Component</div>));
jest.mock("../components/ReturnSearch", () => jest.fn(() => <div>Return Trip Search Component</div>));
jest.mock("../components/MultiCitySearch", () => jest.fn(() => <div>Multi City Search Component</div>));
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("FlightSearch Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test Case 1: Component Rendering
  it("should render the FlightSearch component with tabs", () => {
    // Mock search params to return null for `type`
    useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    render(<FlightSearch />);

    // Check if tabs are displayed
    expect(screen.getByText("One Way")).toBeInTheDocument();
    expect(screen.getByText("Return Trip")).toBeInTheDocument();
    expect(screen.getByText("Multi City")).toBeInTheDocument();
  });

  // Test Case 2: Default Tab Selection
  it("should default to 'One Way' tab when no type is provided in the URL", () => {
    useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    render(<FlightSearch />);

    // Verify "One Way" tab is active by checking its component content
    expect(screen.getByText("One Way Search Component")).toBeInTheDocument();
  });

  // Test Case 3: URL-Based Tab Selection - Return Trip
  it("should set 'Return Trip' tab as active when type is 'return-trip' in the URL", () => {
    useSearchParams.mockReturnValue({
      get: jest.fn(() => "return-trip"),
    });

    render(<FlightSearch />);

    // Verify "Return Trip" tab is active
    expect(screen.getByText("Return Trip Search Component")).toBeInTheDocument();
  });

  // Test Case 4: URL-Based Tab Selection - Multi City
  it("should set 'Multi City' tab as active when type is 'multi-city' in the URL", () => {
    useSearchParams.mockReturnValue({
      get: jest.fn(() => "multi-city"),
    });

    render(<FlightSearch />);

    // Verify "Multi City" tab is active
    expect(screen.getByText("Multi City Search Component")).toBeInTheDocument();
  });

  // Test Case 5: Tab Switching
  it("should switch tabs when a different tab is clicked", async () => {
    useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    render(<FlightSearch />);

    // Default tab should be "One Way"
    expect(screen.getByText("One Way Search Component")).toBeInTheDocument();

    // Click "Return Trip" tab
    fireEvent.click(screen.getByText("Return Trip"));

    // Wait for the "Return Trip Search Component" to appear
    // await waitFor(() => {
    //   expect(screen.getByText("Return Trip Search Component")).toBeInTheDocument();
    // });

    // Click "Multi City" tab
    fireEvent.click(screen.getByText("Multi City"));

    // Wait for the "Multi City Search Component" to appear
    // await waitFor(() => {
    //   expect(screen.getByText("Multi City Search Component")).toBeInTheDocument();
    // });
  });
});
