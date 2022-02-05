import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/auth/authSlice'

const store = configureStore({ reducer })

export default store;
