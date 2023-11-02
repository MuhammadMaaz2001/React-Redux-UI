import React, { useState } from 'react';
import Navigator from './Router';
import { SvgComponent } from './Components/SvgComponent';



function App() {
  const [theme, setTheme] = useState(false);
 

  const toggleTheme = () => {
    console.log("hellow")
    // setTheme( "light")
    // setTheme("dark")
   
    setTheme(!theme);
    console.log("SEt",theme)
  };
  return (
    <div className={`App ${theme ? "bg-white" :"dark  dark:bg-black"} `} >
      <div className='flex w-full justify-end dark:bg-black px-12 '>
      <SvgComponent 
      svgName="Theme"
      className="h-6 w-6 fill-border/50 mt-4 "
      onClick={()=>toggleTheme()}
    />

      </div>
    
    <Navigator />
  </div>
);

}

export default App;