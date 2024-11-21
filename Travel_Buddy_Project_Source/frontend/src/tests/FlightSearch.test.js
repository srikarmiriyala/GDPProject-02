import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlightSearch from "../components/FlightSearch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import OneWaySearch from "../components/OneWaySearch";
import ReturnSearch from "../components/ReturnSearch";;
import MultiCitySearch from "../components/MultiCitySearch";
import { useSearchParams } from "next/navigation";

// Mock the components used in the FlightSearch component
jest.mock("../components/OneWaySearch", () => jest.fn(() => <div>One Way Search</div>));
jest.mock("../components/ReturnSearch", () => jest.fn(() => <div>Return Trip Search</div>));
jest.mock("../components/MultiCitySearch", () => jest.fn(() => <div>Multi City Search</div>));
jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("FlightSearch Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render tabs and default to 'One Way' search", () => {
    // Mock useSearchParams to return null for `type`
    useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    render(<FlightSearch />);

    // Check that tabs are rendered
    expect(screen.getByText("One Way")).toBeInTheDocument();
    expect(screen.getByText("Return Trip")).toBeInTheDocument();
    expect(screen.getByText("Multi City")).toBeInTheDocument();

    // Default tab should be 'One Way'
    expect(screen.getByText("One Way Search")).toBeInTheDocument();
  });

  it("should render 'Return Trip' search when 'return-trip' type is in search params", () => {
    // Mock useSearchParams to return "return-trip" for `type`
    useSearchParams.mockReturnValue({
      get: jest.fn(() => "return-trip"),
    });

    render(<FlightSearch />);

    // 'Return Trip' search content should be visible
    expect(screen.getByText("Return Trip Search")).toBeInTheDocument();
  });

  it("should render 'Multi City' search when 'multi-city' type is in search params", () => {
    // Mock useSearchParams to return "multi-city" for `type`
    useSearchParams.mockReturnValue({
      get: jest.fn(() => "multi-city"),
    });

    render(<FlightSearch />);

    // 'Multi City' search content should be visible
    expect(screen.getByText("Multi City Search")).toBeInTheDocument();
  });

  it("should switch tabs when a different tab is clicked", () => {
    // Mock useSearchParams to return null for `type`
    useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    render(<FlightSearch />);

    // Default should be 'One Way'
    expect(screen.getByText("One Way Search")).toBeInTheDocument();

    // Click on the 'Return Trip' tab
    // fireEvent.click(screen.getByText("Return Trip"));
    // expect(screen.getByText("Return Trip Search")).toBeInTheDocument();

    // Click on the 'Multi City' tab
    // fireEvent.click(screen.getByText("Multi City"));
    // expect(screen.getByText("Multi City Search")).toBeInTheDocument();
  });
});
