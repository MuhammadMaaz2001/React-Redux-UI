import { configureStore } from '@reduxjs/toolkit';
import selectedTabReducer from './Slice/MainTab'; 
import SelectedSubTab from './Slice/SubTab'
import SelectedDWMTab from './Slice/DWM'
import UserTokenSlice from './Slice/UserSlice';


const store = configureStore({
  reducer: {
    selectedTab: selectedTabReducer,
          SelectedSubTab : SelectedSubTab, 
          SelectedDWMTab : SelectedDWMTab,
          UserTokenSlice : UserTokenSlice,
          

     },
});

export default store;
