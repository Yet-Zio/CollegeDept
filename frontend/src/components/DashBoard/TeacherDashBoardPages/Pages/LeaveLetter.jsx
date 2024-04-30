import { useState } from "react";

export default function LeaveLetter() {
    const [letterContent, setLetterContent] = useState('');
    const handleContentChange = (e) => {
        setLetterContent(e.target.value);
      };
    
      const handleRequest = () => {
        console.log('Leave Letter Content:', letterContent);
      };
    
      return (
       
        <div className="h-[100dvh] w-[100%] flex justify-center items-center">
            <div className="w-[80%]">
            <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Reuquest Leave </h1>
          <div className="mb-4">
            <label htmlFor="leaveContent" className="block mb-2 text-lg font-medium">Leave Content:</label>
            <textarea
              id="leaveContent"
              className="w-full h-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              value={letterContent}
              onChange={handleContentChange}
              placeholder="Enter your leave letter content here..."
            ></textarea>
          </div>
          <div>
            <button
              className="bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none"
              onClick={handleRequest}
            >
              Request Leave
            </button>
          </div>
        </div>
            </div>
        </div>
      )
}
