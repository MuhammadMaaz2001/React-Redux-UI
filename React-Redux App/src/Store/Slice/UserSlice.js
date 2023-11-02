import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  name: 'User Token',
  initialState: 'maaz',
};


const UserSliceTab = createSlice({
  name: 'UserToken', 
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      const token = action.payload;
      state.userToken = token;
    },
  },
});



export const { setUserToken } = UserSliceTab.actions;


export default UserSliceTab.reducer;
