import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../Images/logo.png";
import { SvgComponent } from "../SvgComponent";
import { ButtonComp } from "../Utils";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import MarketHeat from "../../Pages/MarketHeat";
import HeatFives from "../../Pages/Heat Fives";
import StockLists from "../../Pages/Stock Lists";
import PremiumLists from "../../Pages/Premium Lists";
import ASX from "../../Pages/Symbols/Pricing/ASX";
import Login from "../../Pages/Login";
import { realTab } from "../../Store/Slice/MainTab";
import { realSubTab } from "../../Store/Slice/SubTab";
import { DWMTab } from "../../Store/Slice/DWM";
import MarketNasdaq from "../../Pages/Symbols/Pricing/Nasdaq";
import MarketNyse from "../../Pages/Symbols/Pricing";

export default function RightNavigationBar() {
  const highLight = useSelector((state) => state.selectedTab.initialState);
  const dispatch = useDispatch();

  const subtabhighlight = useSelector(
    (state) => state.SelectedSubTab.initialState
  );

  const scheduler = useSelector((state) => state.SelectedDWMTab.initialState);

  const [subMenu, setSubMenu] = useState(false);
  const [openScheduler, setOpenScheduler] = useState(false);

  const TabName = [
    { id: "01", name: "market heat", routihg: "/" },
    { id: "02", name: "heat fives", routihg: "/heat-fives" },
    { id: "03", name: "stock lists", routihg: "/stock-lists" },
    { id: "05", name: "premium lists", routihg: "/premium-lists" },
    {
      id: "04",
      name: "Symbols / pricing",
      routihg: `symbols-pricing/${subtabhighlight}`,
    },
  ];

  const subTab = {
    asx: [
      { timeFram: "Daily" },
      { timeFram: "Weekly" },
      { timeFram: "Monthly" },
    ],
    nasdaq: [
      { timeFram: "Daily" },
      { timeFram: "Weekly" },
      { timeFram: "Monthly" },
    ],
    nyse: [
      { timeFram: "Daily" },
      { timeFram: "Weekly" },
      { timeFram: "Monthly" },
    ],
  };

  const HandleSubMenu = (e) => {
    if (e === "Symbols / pricing") {
      setSubMenu(!subMenu);
      dispatch(realTab(e));
      setOpenScheduler(false);
    } else {
      dispatch(realTab(e));
      setSubMenu(false);
    }
  };

  useEffect(() => {
    //console.log("storekey", scheduler )
  }, [highLight, subtabhighlight, scheduler]);

  
  return (
    <div className={`flex h-[100vh] w-full overflow-auto bg-white dark:bg-black py-4 px-5`}>
      <div className="flex w-1/5 h-full flex-col bg-optionsBG rounded-md border border-border/50 space-y-5 dark:bg-black">
        <img src={Logo} className="w-56 self-center mt-2 dark:bg-white/80" />
        <div className="flex flex-col">
          {TabName.map((e) => (
            <ul key={e.id}>
              <li>
                <Link to={e.routihg}>
                  <div
                    className={`flex h-14 items-center justify-between dark:bg-black dark:text-white border-b border-border px-5 font-semibold text-14 cursor-pointer ${
                      e.name === highLight
                        ? "text-white bg-primaryColor dark:bg-white/30"
                        : "text-black/60 bg-headerBG/70"
                    }`}
                    onClick={() => HandleSubMenu(e.name)}
                  >
                    {e.name.toUpperCase()}
                    {e.name === "Symbols / pricing" && (
                      <SvgComponent
                        svgName={subMenu ? "CaretDown" : "CaretRight"}
                        className={"h-3 w-3 fill-border/50"}
                      />
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          ))}
          {subMenu && (
            <div className="h-32 w-full bg-white flex px-5 dark:bg-black/20 dark:text-white flex-col">
              {Object.keys(subTab).map((key) => (
                <div className={`flex flex-col`} key={key}>
                  <Link to={`symbols-pricing/${key}`}>
                    <div
                      onClick={() => {
                        dispatch(realSubTab(key));
                        setOpenScheduler(!openScheduler);
                      }}
                      className={`h-10 w-full px-5 flex items-center border-b border-b-gray ${
                        subtabhighlight === key ? "bg-primaryColor/10 dark:bg-white/30" : ""
                      }`}
                    >
                      <span
                        className={`text-14 w-full text-left ${
                          subtabhighlight === key
                            ? "text-primaryColor font-bold dark:text-white"
                            : "font-semibold"
                        }`}
                      >
                        {key.toUpperCase()}
                      </span>
                      <SvgComponent
                        svgName={openScheduler && subtabhighlight === key ? "CaretDown" : "CaretRight"}
                        className={`h-3 w-3 fill-border/50`}
                      />
                    </div>
                  </Link>
                  {openScheduler &&
                    subtabhighlight === key &&
                    subTab[key].map((item) => (
                      <div
                        className={`h-8 w-60 mt-3 flex flex-col self-center items-start px-4 p-1 justify-between text-13 pt-1.5 dark:text-white text-black rounded-full ${
                          item.timeFram === scheduler ? "bg-primaryColor text-white cursor-pointer dark:bg-white/20" : ""
                        }`}
                        key={item.timeFram}
                        onClick={() => {
                          dispatch(DWMTab(item.timeFram));
                        }}
                      >
                        {" "}
                        {"- " + item.timeFram}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-4/5">
        <Routes>
          {/* <Route
            exact
            path="/"
            render={() => {
              return (
                highLight === "market heat" && <Navigate to="/market-heat" />
              );
            }}
          /> */}

         <Route exact path="/" element={<MarketHeat />} />
          <Route exact path="/heat-fives" element={<HeatFives />} />
          <Route exact path="/stock-lists" element={<StockLists />} />
          <Route exact path="/premium-lists" element={<PremiumLists />} />
          <Route
            exact
            path={`/symbols-pricing/${subtabhighlight}`}
            element={<ASX />}
          />
          <Route
            exact
            path={`/symbols-pricing/${subtabhighlight}`}
            element={<MarketNasdaq />}
          />
          <Route
            exact
            path={`/symbols-pricing/${subtabhighlight}`}
            element={<MarketNyse />}
          />
        </Routes>
      </div>
      
    </div>
  );
  
}
