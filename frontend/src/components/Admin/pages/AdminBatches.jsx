import React, { useState, useEffect } from 'react'
import {Trash} from '@phosphor-icons/react'
import axios from 'axios';

export default function AdminBatches() {

    const [batch , setBatch] = useState([]);

    useEffect(() =>{
        axios
        .get("http://localhost:3000/api/student/getBatch")
        .then((res) =>{
          setBatch([...res.data]);
          console.log(batch);
          console.log(res.data);
        })
        .catch((error) =>{
          console.log(error)
        })
      },[])

        const  handleStudentFetch = (e) =>{
            setSelectedOption(e);
            console.log("hhh",selectedOption);
        };

        

    const [selectedOption, setSelectedOption] = useState(null);

  return (

    <div className='flex w-screen min-h-screen bg-[#cdd4fa] ps-7'>
        <div className="flex flex-col w-full">
            <span className='text-2xl useinter underline mt-5 mb-5'>Batches</span>
            <div className="overflow-x-auto w-1/2">
                <table className="useinter divide-y-2 divide-gray-700 text-md">
                    <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">SL.NO</th>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">BATCH NAME</th>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"></th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {batch.map((batchName , index) =>{
                            return(
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{index+1}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{batchName}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col'>
                <span className='text-2xl useinter mt-10 mb-5'>Students</span>
                <select name='selectedbatch' id='selectedbatch' className='w-1/4 border border-transparent rounded-lg outline-0 focus:border-[#1F2544]'
                    onChange={(e)=> handleStudentFetch(e.target.value)}>
                    <option value="">Select a batch...</option>
                    {batch.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            {selectedOption && (
            <>
            <span className='text-2xl useinter underline mt-5 mb-5'>Students</span>
            <div className="overflow-x-auto w-1/2">
                <table className="useinter divide-y-2 divide-gray-700 text-md">
                    <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">SL.NO</th>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">FIRST NAME</th>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">LAST NAME</th>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">STUDENT ID</th>
                        <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900"></th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">1</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">ABHIJITH </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">MURALI M</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">STUDENTXXXX</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/></td>
                    </tr>
                    <tr>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">2</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">ABHIJITH </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">S RAJ</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">STUDENTXXXX</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex"><Trash size={24} className='text-red-500 cursor-pointer me-4'/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </>)}
        </div>
    </div>
  )
}
