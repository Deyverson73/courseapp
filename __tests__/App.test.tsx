import React from 'react';
import App from '../App';
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
import { render, fireEvent } from '@testing-library/react-native';

test('renders app correctly', async () => {
  const { getByTestId } = render(<App />);
  fireEvent.press(getByTestId('playButton'));

  const enrollButton = getByTestId('enrollButton');
  expect(enrollButton).toBeDefined();
});
