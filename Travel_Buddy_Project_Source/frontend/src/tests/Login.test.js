import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from 'C:/Users/S567546/Documents/GDP-2/flight-booking-frontend/src/app/login/page.jsx';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { userLogin } from '@/redux/slices/userSlice';

// Mocking the necessary dependencies
jest.mock('axios');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);
const mockPush = jest.fn();

describe('Login Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    useRouter.mockReturnValue({ push: mockPush });
  });

  it('should render the login form', () => {
    render(
      <Provider store={store}>
        <ToastContainer />
        <Login />
      </Provider>
    );

    expect(screen.getByTestId('login-title')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('login-button-lower')).toBeInTheDocument();
  });

  it('should update email and password input values', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });

    expect(emailInput.value).toBe('abc@gmail.com');
    expect(passwordInput.value).toBe('12345678');
  });

  it('should handle successful login', async () => {
    const mockResponse = { data: { access_token: 'token123', user: { name: 'John Doe' } } };
    axios.post.mockResolvedValueOnce(mockResponse);

    render(
      <Provider store={store}>
        <ToastContainer />
        <Login />
      </Provider>
    );

    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'abc@gmail.com' } });
    fireEvent.change(screen.getByTestId('password-input'), { target: { value: '12345678' } });
    fireEvent.click(screen.getByTestId('login-button-lower'));

    await waitFor(() => expect(store.getActions()).toContainEqual(userLogin(mockResponse.data)));
    expect(mockPush).toHaveBeenCalledWith('/');
  });

});