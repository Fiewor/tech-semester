import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    logIn: (state, action) => {
      state.user = action.payload.value;
      state.isLoggedIn = true;
    },
  }
});

export const { logIn } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectState = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
