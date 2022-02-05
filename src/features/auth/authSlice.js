import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload.value;
      state.isLoggedIn = true;
    },
  }
});
console.log(authSlice)
export const { logIn } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectState = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;