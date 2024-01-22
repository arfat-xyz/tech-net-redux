import { auth } from '@/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
type InitialUserState = {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
};
interface ICredentials {
  email: string;
  password: string;
}
const initialState: InitialUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  errorMessage: null,
};
export const createUser = createAsyncThunk(
  'createUser',
  async ({ email, password }: ICredentials) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user.email;
  }
);
export const loginUser = createAsyncThunk(
  'loginUser',
  async ({ email, password }: ICredentials) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user.email;
  }
);
export const logoutUser = createAsyncThunk('logoutUser', async () => {
  const result = await signOut(auth);
  return result;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // create user
    builder
      .addCase(createUser.pending, (state) => {
        state.user.email = null;
        state.errorMessage = null;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.errorMessage = action.error.message!;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.errorMessage = null;
        state.isError = false;
        state.isLoading = true;
      });

    //   Login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.user.email = null;
        state.errorMessage = null;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.errorMessage = action.error.message!;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.errorMessage = null;
        state.isError = false;
        state.isLoading = true;
      });
    //   Logout user
    builder
      .addCase(logoutUser.pending, (state) => {
        state.user.email = null;
        state.errorMessage = null;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.user.email = null;
        state.errorMessage = action.error.message!;
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.email = null;
        state.errorMessage = null;
        state.isError = false;
        state.isLoading = true;
      });
  },
});
export const { setLoading, setUser } = userSlice.actions;
export default userSlice.reducer;
