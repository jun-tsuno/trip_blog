import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/authTypes';

interface userType {
	user: User | null;
}

const initialState: userType = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoginUser: (state, action) => {
			return { ...state, user: action.payload };
		},
	},
});

export const { setLoginUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
