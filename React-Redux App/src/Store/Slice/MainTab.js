import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  name: 'main Tab',
  initialState: 'market heat',
};


const SelectedTab = createSlice({
  name: 'selectedTab', 
  initialState,
  reducers: {
    realTab: (state,data) => {
      console.log('hy', state, data.payload);
      state.initialState = data.payload
    },
    
  },
});

export const { realTab } = SelectedTab.actions;


export default SelectedTab.reducer;
