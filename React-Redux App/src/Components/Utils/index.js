import React, { useState } from "react";
import { SvgComponent } from "../SvgComponent";
import "./index.css";



export const ToggleFunc = (setState, event) => {
  setState(!event);
};

export const EventHandler = (setState) => (event) => {
  setState(event.target.value);
};

export const TextInput = ({
  label,
  value,
  // Svg_Name = "",
  onChange,
  // onClick,
  classNames,
  types,
}) => {
  return (
    <div className={`flex justify-between items-center h-10 w-60 border border-border rounded p-1 ${classNames}`}>
      <input
        placeholder={label}
        className="h-full w-full place-items-center text-12 placeholder-border outline-none"
        type={types}
        onChange={onChange}
        value={value}
        autoComplete={false}
        
      />
      
    </div>
  );
};

export const ButtonComp = ({
  text,
  Svg_Name = "",
  onClick,
  classNames,
  BtnClass,
  TextClass,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center bg-primaryColor  text-white space-x-2 cursor-pointer rounded  ${BtnClass}`}
    >
      {Svg_Name && (
        <SvgComponent className={`${classNames}`} svgName={Svg_Name} />
      )}
      <span className={`text-12 ${TextClass}`}>{text}</span>
    </div>
  );
};


export const CardComp = ({ header, data = [] }) => {
  const dat = data;
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full border-b border-b-border/50">
        <span className="text-26 font-semibold">{header}</span>
      </div>
      <div className="flex flex-wrap justify-between">
        {dat?.map((e) => (
          <div
            className="flex flex-row h-24 w-80 rounded border
          border-black/10 shadow-xl justify-between items-center text-left px-5  mt-5"
          >
            <div className="flex flex-col">
              <span key={e?.name} className="text-16 text-black/30">
                {e?.name.toUpperCase()}
              </span>
              {e?.desc && (
                <span key={e?.name} className="text-10 text-black/30">
                  {"(" + e?.desc + ")"}
                </span>
              )}
            </div>
            <span className="text-24 text-black">{e?.num}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export const OptionsInput = ({ options = [] }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const OpenOptions = options;

  return (
    <div className="flex justify-between items-center h-10 w-60 border border-border rounded p-1">
      <select
        className="outline-none w-full text-12"
        value={selectedOption}
        onChange={EventHandler(setSelectedOption)}
      >
        {OpenOptions?.map((e) => (
          <option className="text-12" value={e?.value}>
            {e?.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export const TablePage = ({ data }) => {
  
  const keys = Object.keys(data[0]);

  
  const [sortID ,setSortID] = useState('')
  const [users , setUsers] = useState([])

  const toggleSort = (column) => {
    
    const order = sortID[column]
  
   if (order === "asc" || order === null) {
    data.sort((a,b)=> {
        return a[column].localeCompare(b[column])
    })

    setSortID({...sortID , [column]: "desc"})
   }
   else{
    data.reverse()
    setSortID({ ...sortID, [column]:"asc"})
       
  }
  setUsers([...data])
  }
  
  
  
return (
  
    <div className='flex flex-col h-[75vh] w-full overflow-auto '>
      <table className='w-full border border-gray dark:bg-black/70'>
        <thead className='overflow-hidden sticky top-0 bg-white  border border-gray  cursor-pointer dark:bg-black/70'>
          <tr className='h-14 w-full text-center'>
            {keys.map((key) => (
              <th
                key={key}
                className={`border-r border-gray text-16 text-black/60 dark:text-white  }`}
                onClick={()=>toggleSort(key) }
              >
                <div className="flex justify-between items-center px-2">
                <td>
                {key.replace('_', ' ')}
                </td>
                <td>
                {sortID[key]=== 'asc'? <SvgComponent  svgName={"CaretDown" }
                          className={"h-3 w-3 fill-border/50  "}/>:
                          <SvgComponent  svgName={"Uparrow"}
                          className={"h-3 w-3 fill-border/50"}/>
                          } 
              </td>
              </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='overflow-auto'>
          {data.map((item, index) => (
            <tr key={index} className='border border-gray'>
              {keys.map((key) => (
                <td
                  key={key}
                  className={`border-r border-gray text-14 text-center h-12 text-black dark:text-white `}
                  on
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  return (
    <div className="flex justify-end mt-4 px-6">
      <ButtonComp
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        classNames="px-4 py-2 mr-2 bg-primaryColor rounded cursor-pointer"
        BtnClass="h-8 w-32"
        text={"Previous"}
      />
      <div className="w-4 px-4" /> 
      <ButtonComp
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        classNames="px-4 py-2 ml-2 bg-primaryColor rounded cursor-pointer"
        BtnClass="h-8 w-32"
        text={"Next"}
      />
    </div>
  );
};
