import React, { useState } from "react";
import {
  TextInput,
  ButtonComp,
  OptionsInput,
  Options,
  ToggleFunc,
} from "../../Utils/index";
import { SvgComponent } from "../../SvgComponent";

export default function UserModal({ header, setStated, StateName }) {
  
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
  <div className="flex flex-col h-[85vh] w-[36vw] rounded-lg dark:bg-black bg-white px-8 py-6">
    <div className="flex h-28 justify-between">   
    {/* left */}
    <div ><span className="text-black  dark:text-white font-bold text-28">
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
        <span className="  flex items-center text-10 dark:text-white text-black/40 text-left italic ">
          {"Configure Scheduler"}
        </span>
      </div></div>
    <span className="cursor-pointer dark:text-white"
    onClick={handleCloseModal}
    >x </span>
     
    </div>
    <div className="flex flex-col h-[50vh]  ">
      <div className="flex flex-col h-52 space-y-2 justify-center ">
        <label className="font-semibold text-15 dark:text-white ">FTP URL</label>
        <div className="h-10 w-full items-center text-12 border border-gray flex px-3  rounded">
<span className="text-black/40 text-11 dark:text-white ">market_alert_pro/</span>
<span className="text-11 dark:text-white ">01_market / 2023-01-01 / xyz.html </span>
        </div>
       
      </div>
      <div className="flex flex-col space-y-2 justify-center h-52  ">
        <label className="font-semibold text-15 dark:text-white ">Job Time</label>
        <select className="flex items-center text-12 border dark:bg-black dark:text-white text-black/40 border-gray rounded px-3 h-10 w-full  ">

{TimeSchedule.map((key)=>(

<option value = "" >{key.jobTime}</option>

))}

</select>
       
      </div>
      <div className="flex flex-col h-full  pt-3 ">
        <label className="font-semibold text-15 dark:text-white">
          Notification Email Address(s) - Comma separated
        </label>
        <span className="text-black/40 py-2 dark:text-white text-11">Default email = info@abc.com</span>
        <textarea
          className="  w-full text-gray dark:bg-black dark:text-white text-11 border  rounded  resize-none px-3 py-2" // Added 'resize-y' class
          // id="grid-city3"
          rows="8" // You can adjust the number of rows
          placeholder="xyz@email.com,asd@asd.com"
        />
      </div>
    </div>
    <div className="flex h-28 items-center  justify-center ">
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
