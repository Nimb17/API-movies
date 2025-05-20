import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggle from './ThemeToggle'; // Adjust path as necessary

describe('ThemeToggle Component', () => {
  // Helper to clear localStorage for tests
  beforeEach(() => {
    localStorage.clear();
    // Set default theme attribute for consistent starting point if component doesn't immediately set it
    document.body.removeAttribute('data-theme'); 
  });

  test('renders the toggle button', () => {
    render(<ThemeToggle />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    // Default initial state is 'dark', so button should offer to switch to 'Light'
    expect(buttonElement).toHaveTextContent('Switch to Light Mode');
  });

  test('toggles theme on click and updates localStorage', () => {
    render(<ThemeToggle />);
    const buttonElement = screen.getByRole('button');

    // Initial theme is dark (default by component's state)
    // The useEffect in ThemeToggle will run and set 'dark' based on initial state
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(buttonElement).toHaveTextContent('Switch to Light Mode');

    // First click: dark -> light
    fireEvent.click(buttonElement);
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(buttonElement).toHaveTextContent('Switch to Dark Mode');

    // Second click: light -> dark
    fireEvent.click(buttonElement);
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(buttonElement).toHaveTextContent('Switch to Light Mode');
  });

  test('initializes theme from localStorage if present (light theme)', () => {
    localStorage.setItem('theme', 'light');
    render(<ThemeToggle />);
    
    expect(document.body.getAttribute('data-theme')).toBe('light');
    expect(screen.getByRole('button')).toHaveTextContent('Switch to Dark Mode');
  });

  test('initializes theme from localStorage if present (dark theme)', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeToggle />);

    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(screen.getByRole('button')).toHaveTextContent('Switch to Light Mode');
  });
  
  test('defaults to dark theme if no theme in localStorage', () => {
    // localStorage is cleared in beforeEach
    render(<ThemeToggle />);
    
    // The component's useEffect should set the default 'dark' theme
    expect(document.body.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark'); // Also check if it saves the default
    expect(screen.getByRole('button')).toHaveTextContent('Switch to Light Mode');
  });
});
