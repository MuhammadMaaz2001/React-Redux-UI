import React from 'react';
import { ButtonComp } from '../../../Components/Utils';


const TablePage = ({ data }) => {
    return (
       <>
      <table>
<thead>
<tr>
  <td>sasfa</td>
</tr>

</thead>
<tbody>
<tr>
  <td></td>
</tr>
  
</tbody>  


 </table>  
       
       </>
    );
};

export default function Pricing() {
    const data = [
        {
            JobId: '02389',
            Exchnage: 'ASX',
            TimeFrame: 'Monthly',
            CandleUpdate: '2423',
            Status: 'Successful',
            FailedRequest: '02',
            NextJob: '08/08/2023 02:00',
            LastJob: '08/08/2023 02:00',
            ViewDetails: ' Details',
        },
        {
            JobId: '02389',
            Exchnage: 'ASX',
            TimeFrame: 'Monthly',
            CandleUpdate: '2423',
            Status: 'Successful',
            FailedRequest: '02',
            NextJob: '08/08/2023 02:00',
            LastJob: '08/08/2023 02:00',
            ViewDetails: ' Details',
        },
        {
            JobId: '02389',
            Exchnage: 'ASX',
            TimeFrame: 'Monthly',
            CandleUpdate: '2423',
            Status: 'Successful',
            FailedRequest: '02',
            NextJob: '08/08/2023 02:00',
            LastJob: '08/08/2023 02:00',
            ViewDetails: ' Details',
        }
    ];

    return (
        <div className="flex w-full h-full bg-primaryColor">
            <div className="w-full h-full bg-white text-black text-left font-semibold text-28">
                Pricing Job History

                <div className="flex justify-between items-center text-10 text-gray font-bold underline">
                    <div>Symbols/Pricing, ASX, Weekly</div>

                    <div>
                        <ButtonComp text={`Configure Scheduler`} classNames={`ml-auto`} />
                    </div>
                </div>

                <div className="bg-white px-2 py-20">
                    <div className="overflow-y-scroll">  {/* Scroll bar of table */}
                        <TablePage
                            scrollY
                            maxHeight="200px"
                            striped
                            bordered
                            small
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}



  {/* <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    1
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Mark
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Otto
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    2
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Jacob
                  </td>
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Thornton
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td
                    className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                    3
                  </td>
                  <td
                    colSpan={2}
                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                </tr>
              </tbody> */}