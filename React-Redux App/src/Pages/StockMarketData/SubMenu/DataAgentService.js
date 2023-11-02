import React, { useEffect } from "react";
import { ButtonComp } from "../../../Components/Utils";

export default function DataAgentService() {



  return (
    <div className="flex h-full w-full justify-center items-center bg-white space-x-5">
      <span className="text-32 font-extrabold">DATA AGENT SERVICE STATUS:</span>
      <ButtonComp
        // text={leftPan ? "ENABLED" : "DISABLED"}
        onClick={() => ToggleFunc()}
        BtnClass={`h-10 w-60
        `}
        // TextClass={leftPan ? "text-white text-14 font-semibold" : "text-black/50  text-14 font-semibold"}
      />
    </div>
  );
}