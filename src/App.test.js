// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainClass title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainClass/i);
    expect(titleElement).toBeInTheDocument();
});
