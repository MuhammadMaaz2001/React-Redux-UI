import React from "react";

function BaseModal({ children,isChart }) {
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="false"
    >
     
      <div className="fixed inset-0 dark:bg-black dark:bg-opacity-70  bg-opacity-80 bg-[#BEBEBE] transition-opacity"></div>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
         
          <div className={`relative ${isChart ? '':'bg-[#FFFFFF] dark:bg-black shadow-xl overflow-x-auto'} 
          rounded-2xl bg-opacity-90  text-left overflow-hidden transform transition-all sm:my-8`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default BaseModal;
