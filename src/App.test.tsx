import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter');

  expect(counterElement).toHaveTextContent('0');
});

test('minus button has correct text', () => {
  render(<App />);
  const minusButton = screen.getByTestId('minus-button');

  expect(minusButton).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus-button');

  expect(plusButton).toHaveTextContent('+');
});

test("When the minus button is clicked, the counter's text changes to -1", () => {
  render(<App />);
  const minusButton = screen.getByTestId('minus-button');

  fireEvent.click(minusButton);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('-1');
});

test("When the plus button is clicked, the counter's text changes to 1", () => {
  render(<App />);
  const plusButton = screen.getByTestId('plus-button');

  fireEvent.click(plusButton);

  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent('1');
});
