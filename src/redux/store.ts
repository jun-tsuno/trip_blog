import { configureStore } from '@reduxjs/toolkit';
import { userReducer, setLoginUser } from './slices/userSlice';

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export { store, setLoginUser };
