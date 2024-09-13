import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
}

const initialState: UserState = {
  userLatitude: null,
  userLongitude: null,
  userAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  destinationAddress: null,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLocation: (
      state,
      action: PayloadAction<{
        latitude: number;
        longitude: number;
        address: string;
      }>
    ) => {
      state.userLatitude = action.payload.latitude;
      state.userLongitude = action.payload.longitude;
      state.userAddress = action.payload.address;
    },
    setDestinationLocation: (
      state,
      action: PayloadAction<{
        latitude: number;
        longitude: number;
        address: string;
      }>
    ) => {
      state.destinationLatitude = action.payload.latitude;
      state.destinationLongitude = action.payload.longitude;
      state.destinationAddress = action.payload.address;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserLocation, setDestinationLocation } = slice.actions;

export const userReducer = slice.reducer;
