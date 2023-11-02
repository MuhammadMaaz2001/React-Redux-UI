import React, { useState , useEffect  } from "react";
import { useSelector } from "react-redux";
import { ButtonComp, TablePage } from "../../../../Components/Utils";
import BaseModal from "../../../../Components/Modal/BaseModal"
import { SvgComponent } from "../../../../Components/SvgComponent";
import Symbols from "../../../../Components/Modal/Symbols"
export default function MarketNasdaq() {

  const [configureScheduler , setConfigureScheduler] = useState(false)
  const highLight = useSelector((state) => state.selectedTab.initialState);
  const subtabhighlight = useSelector((state) => state.SelectedSubTab.initialState);
  const scheduler=useSelector( (state)=>state.SelectedDWMTab.initialState)
  const [searchInput , setSearchInput] = useState("")
  const [searchOutput , setSearchOuput] = useState("")
    const data = [
      {
        Job_Id: "02589",
        Exchnage: "ASX",
        Time_Frame: "Monthly",
        Candle_Update: "2423",
        Status: "Successful",
        Failed_Request : "06",
        Next_Job: "08/08/2023 02:00",
        Last_Job: "08/08/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "02349",
        Exchnage: "ASX",
        Time_Frame: "Monthly",
        Candle_Update: "2423",
        Status: "Successful",
        Failed_Request : "04",
        Next_Job: "08/08/2023 02:00",
        Last_Job: "08/08/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "02589",
        Exchnage: "ASX",
        Time_Frame: "Monthly",
        Candle_Update: "2423",
        Status: "Successful",
        Failed_Request : "06",
        Next_Job: "08/08/2023 02:00",
        Last_Job: "08/08/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "03457",
        Exchnage: "ASX",
        Time_Frame: "Monthly",
        Candle_Update: "2423",
        Status: "Successful",
        Failed_Request : "02",
        Next_Job: "08/08/2023 02:00",
        Last_Job: "08/08/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "03657",
        Exchnage: "Nasdaq",
        Time_Frame: "Weekly",
        Candle_Update: "2423",
        Status: "Successful",
        Failed_Request : "02",
        Next_Job: "08/08/2023 02:00",
        Last_Job: "08/08/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "07456",
        Exchnage: "Nasdaq",
        Time_Frame: "Monthly",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "02",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "09454",
        Exchnage: "Nasdaq",
        Time_Frame: "Daily",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "01234",
        Exchnage: "Nyse",
        Time_Frame: "Daily",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "09454",
        Exchnage: "Nyse",
        Time_Frame: "Weekly",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "09454",
        Exchnage: "Nyse",
        Time_Frame: "Weekly",
        Candle_Update: "0983",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "04/06/2023 07:00",
        Last_Job: "04/06/2023 07:00",
        View_Details : "Details"
      },
      {
        Job_Id: "09454",
        Exchnage: "Nyse",
        Time_Frame: "Weekly",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "012344",
        Exchnage: "ASX",
        Time_Frame: "Weekly",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "09454",
        Exchnage: "Nyse",
        Time_Frame: "Monthly",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
      },
      {
        Job_Id: "09454",
        Exchnage: "Nasdaq",
        Time_Frame: "Daily",
        Candle_Update: "4321",
        Status: "Successful",
        Failed_Request : "01",
        Next_Job: "08/06/2023 02:00",
        Last_Job: "08/06/2023 02:00",
        View_Details : "Details"
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
       <div className="w-full h-full bg-white text-black text-left font-semibold text-28  ">
        <div className="flex flex-col ">
          <span className="text-black text-left font-semibold text-28">
            PRICING JOB HISTORY
          </span>
          <div className="flex items-center">
          <span className="text-10 text-black/40 ">
            {highLight.toUpperCase()}
          </span>
          <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          <span className="flex items-center text-10 text-black/40 text-left underline ">
            {subtabhighlight.toUpperCase()}
            <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          </span>
          <span className="flex items-center text-10 text-black/40 text-left underline ">
            {scheduler}
            
          </span>
          
          </div>
        </div>

        <div className="flex justify-end items-center text-10 text-gray font-bold py-2 ">
        <input type="search"
               id="default-search"
                className=" w-[20vw] p-2 pl-4  text-black/40 border border-gray outline-none rounded-lg absolute left-80 " 
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

        <div className="bg-white px-2 py-20">
          <div className="">
            <TablePage
              scrollY
              maxHeight="200px"
              striped
              bordered
              small
              data={searchOutput.length > 0 ? searchOutput :data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
