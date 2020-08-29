import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'

// Just one test for demonstration purposes. In a typical
// application, there would obviously need to be many more.

// Verify the sign up button is being appropriately rendered
test('renders sign up button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(getByText(/sign up/i)).toBeInTheDocument()
})
