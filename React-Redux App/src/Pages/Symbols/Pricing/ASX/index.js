import React, { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonComp, TablePage , Pagination} from "../../../../Components/Utils";
import BaseModal from "../../../../Components/Modal/BaseModal"
import Symbols from "../../../../Components/Modal/Symbols"
import { SvgComponent } from "../../../../Components/SvgComponent";


export default function MarketAsx() {
  const [configureScheduler , setConfigureScheduler] = useState(false)
  const highLight = useSelector((state) => state.selectedTab.initialState);
  const subtabhighlight = useSelector((state) => state.SelectedSubTab.initialState);
  const scheduler=useSelector( (state)=>state.SelectedDWMTab.initialState)
  const [searchInput , setSearchInput] = useState("")
const [searchOutput , setSearchOuput] = useState("")
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;



const data = [
  {
    Job_Id: "02389",
    Exchnage: "ASX",
    Time_Frame: "Monthly",
    Candle_Update: "2423",
    Status: "Successful",
    Next_Job: "08/08/2023 02:00",
    Last_Job: "08/08/2023 02:00",
  },
  {
    Job_Id: "02489",
    Exchnage: "NASDAQ",
    Time_Frame: "Weekly",
    Candle_Update: "2423",
    Status: "Successful",

    Next_Job: "08/08/2023 02:00",
    Last_Job: "08/08/2023 02:00",
  },
  {
    Job_Id: "04389",
    Exchnage: "ASX",
    Time_Frame: "Daily",
    Candle_Update: "2623",
    Status: "Successful",

    Next_Job: "08/05/2023 02:00",
    Last_Job: "08/04/2023 02:00",
  },
  {
    Job_Id: "04879",
    Exchnage: "Nyse",
    Time_Frame: "Daily",
    Candle_Update: "2653",
    Status: "Successful",

    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },
  {
    Job_Id: "04874",
    Exchnage: "Nyse",
    Time_Frame: "Daily",
    Candle_Update: "2653",
    Status: "Successful",

    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },   {
    Job_Id: "04876",
    Exchnage: "Nadaq",
    Time_Frame: "Monthly",
    Candle_Update: "2653",
    Status: "Successful",

    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },
  {
    Job_Id: "02876",
    Exchnage: "Nasdaq",
    Time_Frame: "Daily",
    Candle_Update: "3753",
    Status: "Successful",

    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },
  {
    Job_Id: "04576",
    Exchnage: "ASX",
    Time_Frame: "Daily",
    Candle_Update: "5431",
    Status: "Successful",

    Next_Job: "06/05/2023 04:00",
    Last_Job: "05/04/2023 04:00",
  },
  {
    Job_Id: "04876",
    Exchnage: "ASX",
    Time_Frame: "Daily",
    Candle_Update: "5431",
    Status: "Successful",

    Next_Job: "06/05/2023 04:00",
    Last_Job: "05/04/2023 04:00",
  },
  {
    Job_Id: "04876",
    Exchnage: "ASX",
    Time_Frame: "Daily",
    Candle_Update: "5431",
    Status: "Successful",

    Next_Job: "06/05/2023 04:00",
    Last_Job: "05/04/2023 04:00",
  },
  {
    Job_Id: "04876",
    Exchnage: "Nyse",
    Time_Frame: "Weekly",
    Candle_Update: "5431",
    Status: "Successful",

    Next_Job: "06/05/2023 04:00",
    Last_Job: "05/04/2023 04:00",
  },
  {
    Job_Id: "02676",
    Exchnage: "Nyse",
    Time_Frame: "Weekly",
    Candle_Update: "5431",
    Status: "Successful",

    Next_Job: "06/05/2023 04:00",
    Last_Job: "05/04/2023 04:00",
  },
  {
    Job_Id: "01234",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "03/04/2023 03:00",
    Last_Job: "03/04/2023 03:00",
  },
  {
    Job_Id: "04234",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "03/04/2023 03:00",
    Last_Job: "03/04/2023 03:00",
  },
  {
    Job_Id: "06234",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "03/04/2023 03:00",
    Last_Job: "03/04/2023 03:00",
  },{
    Job_Id: "03534",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "03/04/2023 03:00",
    Last_Job: "03/04/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },
  {
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "02832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "02832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "02832",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  },{
    Job_Id: "84882",
    Exchnage: "ASX",
    Time_Frame: "Mohtly",
    Candle_Update: "4567",
    Status: "Successful",

    Next_Job: "04/07/2023 03:00",
    Last_Job: "04/07/2023 03:00",
  }, {
    Job_Id: "02389",
    Exchange: "ASX",
    Time_Frame: "Monthly",
    Candle_Update: "2423",
    Status: "Successful",
    Next_Job: "08/08/2023 02:00",
    Last_Job: "08/08/2023 02:00",
  },
  {
    Job_Id: "02489",
    Exchange: "NASDAQ",
    Time_Frame: "Weekly",
    Candle_Update: "2423",
    Status: "Successful",
    Next_Job: "08/08/2023 02:00",
    Last_Job: "08/08/2023 02:00",
  },
  {
    Job_Id: "04389",
    Exchange: "ASX",
    Time_Frame: "Daily",
    Candle_Update: "2623",
    Status: "Successful",
    Next_Job: "08/05/2023 02:00",
    Last_Job: "08/04/2023 02:00",
  },
  {
    Job_Id: "04879",
    Exchange: "NYSE",
    Time_Frame: "Daily",
    Candle_Update: "2653",
    Status: "Successful",
    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },
  {
    Job_Id: "04874",
    Exchange: "NYSE",
    Time_Frame: "Daily",
    Candle_Update: "2653",
    Status: "Successful",
    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },
  {
    Job_Id: "04876",
    Exchange: "NASDAQ",
    Time_Frame: "Monthly",
    Candle_Update: "2653",
    Status: "Successful",
    Next_Job: "06/05/2023 02:00",
    Last_Job: "05/04/2023 02:00",
  },
  {
    Job_Id: "12345",
    Exchange: "ASX",
    Time_Frame: "Weekly",
    Candle_Update: "1234",
    Status: "Successful",
    Next_Job: "09/10/2023 03:00",
    Last_Job: "09/09/2023 03:00",
  },
  {
    Job_Id: "67890",
    Exchange: "NYSE",
    Time_Frame: "Monthly",
    Candle_Update: "5678",
    Status: "Successful",
    Next_Job: "07/07/2023 04:00",
    Last_Job: "07/06/2023 04:00",
  },
  {
    Job_Id: "00001",
    Exchange: "NYSE",
    Time_Frame: "Monthly",
    Candle_Update: "1234",
    Status: "Successful",
    Next_Job: "09/09/2023 03:00",
    Last_Job: "09/08/2023 03:00",
  },
  {
    Job_Id: "00002",
    Exchange: "ASX",
    Time_Frame: "Weekly",
    Candle_Update: "2345",
    Status: "Successful",
    Next_Job: "08/10/2023 04:00",
    Last_Job: "08/09/2023 04:00",
  },
  {
    Job_Id: "00032",
    Exchange: "ASX",
    Time_Frame: "Monthly",
    Candle_Update: "2345",
    Status: "Successful",
    Next_Job: "08/10/2023 04:00",
    Last_Job: "08/09/2023 04:00",
  },
  {
    Job_Id: "000502",
    Exchange: "ASX",
    Time_Frame: "Daily",
    Candle_Update: "2345",
    Status: "Successful",
    Next_Job: "08/10/2023 04:00",
    Last_Job: "08/09/2023 04:00",
  },
];
  

  const HandleChange =(e) => {
    setSearchInput(e.target.value)
    }
    
    useEffect(()=>{
      hanldeSearch()
    },[searchInput])
    
    const hanldeSearch = () =>{
      const search = data?.filter((item)=> 
      item["Job_Id"].toLowerCase().includes(searchInput))
    
      console.log("search",search);
      setSearchOuput(search)
    
    }
    
    const totalPages = Math.ceil(
      (searchOutput.length > 0 ? searchOutput.length : data.length) / itemsPerPage
    );
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData =
      searchOutput.length > 0 ? searchOutput.slice(startIndex, endIndex) : data.slice(startIndex, endIndex);
  return (
    <div className="flex w-full h-full  overflow-hidden px-4">
      {configureScheduler &&
      <BaseModal>
      <Symbols
      StateName={configureScheduler}
      setStated={setConfigureScheduler}
      header={highLight}
      market={subtabhighlight}
      timePeriod={scheduler}
      
      />
      </BaseModal> 
       
      }
      <div className="w-full h-full bg-white text-black text-left dark:bg-black font-semibold text-28  ">
        <div className="flex flex-col ">
          <span className="text-black dark:text-white text-left font-semibold text-28 px-2 ">
            PRICING JOB HISTORY
          </span>
          <div className="flex items-center">
          <span className="text-10 text-black/40 dark:text-white px-2 ">
            {highLight.toUpperCase()}
          </span>
          <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          <span className="flex items-center text-10 dark:text-white text-black/40 text-left underline ">
            {subtabhighlight.toUpperCase()}
            <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          </span>
          <span className="flex items-center text-10 dark:text-white text-black/40 text-left underline ">
            {scheduler}
            
          </span>
          
          </div>
        </div>

        <div className="flex justify-end items-center text-10 text-gray font-bold py-2 ">
        <input type="search"
               id="default-search"
                className=" w-[20vw] p-2 pl-4  text-black/40 border border-gray outline-none rounded-lg  " 
                placeholder="Search Here" required
                onChange={(e) => HandleChange(e)}
                value={searchInput}
                
/> 

          <div className="px-6">
            <ButtonComp
              text={`Configure Scheduler`}
              BtnClass={`h-8 w-32`}
              TextClass={`text-6 font-light`}
            onClick={()=>{
              setConfigureScheduler(true)
            }}
            />
          </div>
        </div>

        <div className="bg-white px-2 py-10 dark:bg-black" style={{ maxHeight: "calc(100vh - 220px)", overflowY: "auto" }}>
          <div className="">
            <TablePage data={currentData} />
          </div>
        </div>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
