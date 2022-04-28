import { RootState } from 'store';

export const getBaconText = (state: RootState) => state.baconPigsum.text;
export const getHasError = (state: RootState) => state.baconPigsum.hasError;
