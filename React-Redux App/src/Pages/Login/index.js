import React, { useState } from "react";
import Logo from "../../Components/Images/logo.png";
import {
  TextInput,
  ButtonComp,
  EventHandler,
} from "../../Components/Utils";


export default function Login() {
  const [toggleEye, setToggleEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col h-[100vh] w-full bg-white-200 justify-center items-center space-y-20">
      <img src={Logo} width={"250"} />
      <div className="flex flex-col space-y-5">
        <TextInput
          label="Email"
          value={email}
          onChange={EventHandler(setEmail)}
        />
        <TextInput
          label="Password"
          types={`${toggleEye ? "password" : "text"}`}
          value={password}
          onChange={EventHandler(setPassword)}
          classNames={`h-10 w-5 fill-none cursor-pointer ${
            toggleEye ? "stroke-border" : "stroke-black"
          }`}
          Svg_Name={toggleEye ? "EyeClose" : "EyeOpen"}
          onClick={() => setToggleEye(!toggleEye)}
        />
        <ButtonComp text={'LOG IN'} 
        BtnClass={`h-8 w-full `}
         />
      </div>
    </div>
  );
}
