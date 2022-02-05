import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import reducer from '../features/auth/authSlice'

// export const store = configureStore({
  // //reducer: {
//     //counter: formUpdater //change formUpdater to be name of reducer
//   }
// });
export const store = configureStore({
  reducer
})
