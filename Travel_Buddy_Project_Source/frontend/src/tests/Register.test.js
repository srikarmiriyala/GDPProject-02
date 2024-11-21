import React from "react";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "C:/Users/S567546/Documents/GDP-2/flight-booking-frontend/src/components/Register.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import axios from "axios";
import { useRouter } from "next/navigation";

// Mock necessary dependencies
jest.mock("axios");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);
const mockPush = jest.fn();

describe("Register Component", () => {
  let store;

  beforeEach(() => {
    // Mock the Redux store
    store = mockStore({});
    useRouter.mockReturnValue({ push: mockPush });
    jest.clearAllMocks();
    jest.useFakeTimers();

    // Set environment variable
    process.env.NEXT_PUBLIC_BACKEND_URL = "http://localhost:8000";
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should render the registration form", () => {
    render(
      <Provider store={store}>
        <ToastContainer />
        <Register />
      </Provider>
    );

    // Check if form elements are rendered
    expect(screen.getByRole("heading", { name: /Register/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Register/i })).toBeInTheDocument();
  });

  it("should update input fields", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    // Simulate user input
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(fullNameInput, { target: { value: "Test User" } });
    fireEvent.change(emailInput, { target: { value: "testuser@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "P@ssw0rd!" } });

    // Check if input values have been updated
    expect(fullNameInput.value).toBe("Test User");
    expect(emailInput.value).toBe("testuser@example.com");
    expect(passwordInput.value).toBe("P@ssw0rd!");
  });

  it("should handle successful registration", async () => {
    const mockResponse = { data: { message: "Registration successful!" } };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(
      <Provider store={store}>
        <ToastContainer />
        <Register />
      </Provider>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "testuser@example.com" } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "P@ssw0rd!" } });

    // Simulate form submission
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Register/i }));
    });

    // Advance timers to simulate redirect delay
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    // Check if success message is displayed and user is redirected
    await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/login"));
    expect(screen.getByText(/Registration successful!/i)).toBeInTheDocument();
  });

  it("should handle failed registration", async () => {
    axios.post.mockRejectedValueOnce(new Error("Registration failed. Please try again."));

    render(
      <Provider store={store}>
        <ToastContainer />
        <Register />
      </Provider>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "Test User" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "testuser@example.com" } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "P@ssw0rd!" } });

    // Simulate form submission
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: /Register/i }));
    });

    // Wait for the error toast to be rendered
    await waitFor(() =>
      expect(screen.getByText(/Registration failed. Please try again./i)).toBeInTheDocument()
    );
  });
});
