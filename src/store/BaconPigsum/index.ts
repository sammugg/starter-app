/* eslint-disable no-param-reassign */
/**
 * Defines a redux toolkit slice, which is a way to generate both the actions and reducers
 * in one pass.
 *
 * Toolkit uses Immer, so the state parameter is mutable here, thus disabling no-param-reassign.ß
 */
import { createSlice } from '@reduxjs/toolkit';

import { getUpdatedText } from './actionCreators';

export interface BaconPigsumState {
  text: string[]
  hasError: boolean
}

const initialState: BaconPigsumState = {
  text: [],
  hasError: false,
};

export const baconPigsumSlice = createSlice({
  name: 'baconPigsum',
  initialState,
  reducers: {
    // standard, non-async reducers go here
    // updateText: (state, action: PayloadAction<string[]>) => {
    //   state.text = action.payload;
    // },
    // Example, action/reducer with payload
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUpdatedText.fulfilled, (state, action) => {
      // Add user to the state array
      state.hasError = false;
      state.text = action.payload;
    });

    builder.addCase(getUpdatedText.rejected, (state) => {
      // Add user to the state array
      state.hasError = true;
      state.text = ['An error was encountered'];
    });
  },
});

// Standard action creators are generated for each case reducer function
// export const { updateText } = baconPigsumSlice.actions;

export default baconPigsumSlice.reducer;
