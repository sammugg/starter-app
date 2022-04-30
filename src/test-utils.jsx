/* eslint-disable react/prop-types */
// test-utils.jsx
import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

// Import your own reducer
import baconPigsumReducer from 'store/BaconPigsum';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { baconPigsum: baconPigsumReducer }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
