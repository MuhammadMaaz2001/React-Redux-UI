import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  name: 'DWMTab',
  initialState: 'Daily',
};


const SelectedDWMTab = createSlice({
  name: 'SelectedDWMTab', 
  initialState,
  reducers: {
    DWMTab: (state, action) => {
      const selectedTabName = action.payload;
      state.initialState = selectedTabName;
    },
  },
});



export const { DWMTab } = SelectedDWMTab.actions;


export default SelectedDWMTab.reducer;
