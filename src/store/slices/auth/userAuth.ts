import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  user: null | any;
}

const initialState: CounterState = {
  user: null,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userAuthSlice.actions;

const userAuthReducer = userAuthSlice.reducer;
export default userAuthReducer;
