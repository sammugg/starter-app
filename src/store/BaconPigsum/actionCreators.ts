import { createAsyncThunk } from '@reduxjs/toolkit';

import { GetNewText } from 'api';

export const getUpdatedText = createAsyncThunk(
  'baconPigsum/getUpdatedText',
  () => GetNewText(),
);
