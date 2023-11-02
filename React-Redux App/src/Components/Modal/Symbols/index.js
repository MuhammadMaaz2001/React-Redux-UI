import React, { useState } from "react";
import {
  TextInput,
  ButtonComp,
  OptionsInput,
  Options,
  ToggleFunc,
} from "../../Utils/index";
import { SvgComponent } from "../../SvgComponent";

export default function UserModal({ header, setStated, StateName , market, timePeriod }) {
  

  const TimeSchedule = [
    
{

    jobTime : "02:00"
  },
{
  jobTime: "05:00"
}
,
{
  jobTime: "08:00"
},
{
  jobTime: "11:00"
},
{
  jobTime: "02:00"
}

]
const handleCloseModal = () => {
  setStated(false)
  
};



  return (
    <div className="flex flex-col h-[85vh] w-[36vw] dark:bg-black rounded-lg bg-white px-8 py-6">
      <div className="flex h-28 justify-between">   
      {/* left */}
      <div ><span className="text-black dark:text-white font-bold text-28">
          CONFIGURE SCHEDULER
        </span>
        
        <div className="flex ">
          <span className="flex items-center text-10 dark:text-white text-black/40 text-left underline ">
          {header.toUpperCase()}
            <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          </span>
          <span className="flex items-center text-10 dark:text-white text-black/40 text-left underline ">
            {market.toUpperCase()}
            <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          </span>
          <span className="flex items-center dark:text-white text-10 text-black/40 text-left underline ">
            {timePeriod}
            <SvgComponent
              svgName={"CaretRight"}
              className={"h-3 w-3 fill-border/50"}
            />
          </span>
          <span className="  flex items-center dark:text-white text-10 text-black/40 text-left italic ">
            {"Configure Scheduler"}
          </span>
        </div></div>
      <span className="cursor-pointer dark:text-white"
      onClick={handleCloseModal}
      >x </span>
       
      </div>
      <div className="flex flex-col h-[50vh]  ">
        
        <div className="flex flex-col space-y-2  justify-center h-52  ">
          <label className="font-semibold text-15 dark:text-white ">Job Time</label>
          <select className="flex items-center text-12 border dark:text-white dark:bg-black text-black/40 border-gray rounded px-3 h-10 w-full  ">

{TimeSchedule.map((key)=>(
  
  <option value = "" >{key.jobTime}</option>
  
))}

</select>
         
        </div>
        <div className="flex flex-col space-y-1 py-6 justify-center h-52  ">
        <div className="flex items-center">
  <label className="font-semibold dark:text-white text-15">Re-attempt  </label>
  <span className="text-11 dark:text-white  text-black/40 px-2">(when failed previously)</span>
</div>

          <select className="flex items-center dark:text-white  dark:bg-black text-12 border text-black/40 border-gray rounded px-3 h-10 w-full  ">

{TimeSchedule.map((key)=>(
  
  <option value = "" >{key.jobTime}</option>
  
))}

</select>
         
        </div>
        <div className="flex flex-col h-full  pt-3 ">
          <label className="font-semibold dark:text-white text-15">
            Notification Email Address(s) - Comma separated
          </label>
          <span className="text-black/40 py-2 dark:text-white text-11">Default email = info@abc.com</span>
          <textarea
            className="  w-full text-gray dark:bg-black dark:text-white text-11 border  rounded  resize-none px-3 py-2" 
         
            rows="8" 
            placeholder="xyz@email.com,asd@asd.com"
          />
        </div>
      </div>
      <div className="flex h-28 items-center  justify-center pt-8">
        <ButtonComp
          text={`Save`}
          BtnClass={`h-9 w-full rounded-full`}
          TextClass={`text-12 `}
          Svg_Name="SaveFloppy"
        classNames={`h-3 w-3`}
        />
      </div>
    </div>
  );
}
