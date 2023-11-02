import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  name: 'Sub Tab',
  initialState: 'asx',
};


const SelectedSubTab = createSlice({
  name: 'SelectedSubTab', 
  initialState,
  reducers: {
    realSubTab: (state, action) => {
      const selectedTabName = action.payload;
      state.initialState = selectedTabName;
    },
  },
});



export const { realSubTab } = SelectedSubTab.actions;


export default SelectedSubTab.reducer;
