import React, { useEffect, useState} from "react";
import { BrowserRouter as  Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Login from "../Pages/Login";
import RightPan from "../Components/RightPan";





export default function RoutesNavigation() {
  
  const UserToken = useSelector((state) => state.UserTokenSlice.initialState);
  

  useEffect(() => {
    console.log("token", UserToken )
 }, [UserToken]);



  return (
    
    <Router>
      <div>
        {UserToken ? <RightPan />:<Routes>
    
    <Route path="/login" element={<Login />} />

    {/* <Route path="/market-heat" element={<MarketHeat />} />
    <Route path="/heat-fives" element={<HeatFives />} />
    <Route path="/stock-lists" element={<StockLists />} />
    <Route path="/premium-lists" element={<PremiumLists />} />
    <Route path={`/symbols-pricing/${subtabhighlight}`} element={<ASX />} />
    <Route path={`/symbols-pricing/${subtabhighlight}`} element={<MarketNasdaq />} />
    <Route path={`/symbols-pricing/${subtabhighlight}`} element={<MarketNyse />} /> */}
    {/* <Route path="/right-pan" element={<RightPan />} /> */}

   
  </Routes>}
    

    
    </div>
    </Router>
    

  );
}
