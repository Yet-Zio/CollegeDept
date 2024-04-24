import React, { useEffect, useState } from 'react'
import {Trash} from "@phosphor-icons/react"
import QueryAccordion from './QueryAccordion'
import axios from 'axios'

export default function AdminQueries() {

  const [query , setQuery] = useState([])

  useEffect(() => {

    const fetchQueries = async() => {

      axios.get("http://localhost:3000/api/admin/getContact")
      .then((res) => {
        setQuery(res.data)
      })
      .catch((err) => {
        console.log(err)
      } )

    } 

    fetchQueries();

  } ,[])

  return (
    <div className='flex flex-col w-screen min-h-screen bg-[#cdd4fa] ps-7 pe-7'>
      <span className='text-2xl useinter mt-5 mb-2'>Queries</span>
      <button 
        className="self-center mt-2 w-1/6 flex pt-3 pb-3 bg-[#474F7A] justify-center items-center rounded-lg font-sans text-white hover:bg-[#474F7A]/75 mb-3">
        <span className='hidden md:flex'>Clear All</span><Trash className='md:hidden'/>
      </button>
      {query.map((queries , index) => {
        return(
          <QueryAccordion key={queries._id} number={index+1} name={queries.name} email={queries.email} message={queries.message}/>
        )
      } )}
    </div>
  )
}
