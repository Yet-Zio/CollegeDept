
import { useState } from "react";

export default function AppointFacutaly() {
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      // Add more options as needed
    ];
  
    const handleChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
  return (
   <>
       <div className=" h-[100%] w-[100%] ">
       <div className="w-[100%] flex text-2xl font-semibold justify-center items-center">
        Appoint Facualty
    </div>
       <div className="w-[100%] flex gap-7 h-[100%] justify-start items-center">
 
 <div className="w-[100%] h-[90%] flex justify-between  items-center gap-8">
 <select
        className="block w-full max-w-md px-14 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        className="block w-full px-14 max-w-md py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <button className="py-5 px-16 rounded-xl bg-orange-400 hover:bg-orange-600">Appoint Facualty</button>
    </div>
 </div>
    </div>
    
       </div>
   </>
  )
}
