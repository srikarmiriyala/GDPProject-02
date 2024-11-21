import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import StripeComponent from "../components/StripeComponent";

// Mock the Stripe elements and hooks
jest.mock("@stripe/react-stripe-js", () => ({
  CardElement: jest.fn(() => <div data-testid="CardElement" />),
  useElements: jest.fn(),
  useStripe: jest.fn(),
}));

describe("StripeComponent", () => {
  let mockStripe, mockElements, mockSetStripeToken;

  beforeEach(() => {
    mockSetStripeToken = jest.fn();

    mockStripe = {
      createPaymentMethod: jest.fn(),
    };
    mockElements = {
      getElement: jest.fn(),
    };

    useStripe.mockReturnValue(mockStripe);
    useElements.mockReturnValue(mockElements);

    jest.clearAllMocks();
  });

  it("should render the form with the CardElement", () => {
    render(<StripeComponent setStripeToken={mockSetStripeToken} />);

    // Check that CardElement is rendered
    expect(screen.getByTestId("CardElement")).toBeInTheDocument();

    // Check that the Submit button is rendered
    expect(screen.getByRole("button", { name: "Submit Payment" })).toBeInTheDocument();
  });

  it("should display error if Stripe is not initialized", async () => {
    useStripe.mockReturnValue(null);
    useElements.mockReturnValue(null);

    render(<StripeComponent setStripeToken={mockSetStripeToken} />);

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button", { name: "Submit Payment" }));

    // Check for error message
    expect(await screen.findByText("Stripe has not been properly initialized.")).toBeInTheDocument();
  });

  it("should display error when createPaymentMethod fails", async () => {
    mockStripe.createPaymentMethod.mockResolvedValue({
      error: { message: "Invalid card details" },
    });

    render(<StripeComponent setStripeToken={mockSetStripeToken} />);

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button", { name: "Submit Payment" }));

    // Check for error message
    expect(await screen.findByText("Invalid card details")).toBeInTheDocument();
  });

  it("should call setStripeToken and display success message on successful payment", async () => {
    mockStripe.createPaymentMethod.mockResolvedValue({
      paymentMethod: { id: "pm_mockId" },
    });

    mockElements.getElement.mockReturnValue({});

    render(<StripeComponent setStripeToken={mockSetStripeToken} />);

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button", { name: "Submit Payment" }));

    // Check that setStripeToken was called with the correct token
    expect(await screen.findByText("Payment Successfull id is: pm_mockId Now you can confirm your payment.")).toBeInTheDocument();
    expect(mockSetStripeToken).toHaveBeenCalledWith("pm_mockId");
  });

  it("should disable the button when loading", async () => {
    mockStripe.createPaymentMethod.mockResolvedValue({
      paymentMethod: { id: "pm_mockId" },
    });

    mockElements.getElement.mockReturnValue({});

    render(<StripeComponent setStripeToken={mockSetStripeToken} />);

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button", { name: "Submit Payment" }));

    // Check that the button is disabled during loading
    expect(screen.getByRole("button", { name: "Processing..." })).toBeDisabled();
  });
});
