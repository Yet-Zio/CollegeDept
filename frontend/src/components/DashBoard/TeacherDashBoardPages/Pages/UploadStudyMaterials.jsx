import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UploadStudyMaterials = () => {
  const [batch , setBatch] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileName, setPdfFileName] = useState('');
  const [url, setUrl] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const [loading , setLoading ] = useState(false);

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

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
    setPdfFileName(file.name);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

 

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleUpload = async(e) => {

    e.preventDefault();
    setLoading(true)
    await axios.post('http://localhost:3000/api/teacher/addStudyMaterial' , {pdf: pdfFile ,url : url , batch: selectedBatch}  , {headers: {'Content-Type': 'multipart/form-data'}})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Success",
        text: "Uploaded SuccessFully",
        icon: "success"
      });
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Failed",
        text: "Something went wrong",
        icon: "error"
      });
      setLoading(false)
    })
  }

  return (
    
        <form 
        onSubmit={handleUpload} encType="multipart/form-data"
        className="h-[100dvh] w-[100%] flex justify-center items-center">
            <div className="w-[40%]">
            <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upload Study Material</h1>
      <div className="mb-4" >
        <label htmlFor="pdf" className="block mb-2 text-lg font-medium">Upload PDF:</label>
        <div className="flex items-center space-x-2">
          <input
            type="file"
            id="pdf"
            accept=".pdf"
            className="hidden"
            onChange={handlePdfChange}
          />
          <label htmlFor="pdf" className="bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer">
            Choose File
          </label>
          <span className="text-gray-600">{pdfFileName}</span>
        </div>
        
      </div>
      <div className="mb-4">
        <label htmlFor="url" className="block mb-2 text-lg font-medium">Upload URL:</label>
        <input
          type="text"
          id="url"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter URL here..."
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="batch" className="block mb-2 text-lg font-medium">Select Batch:</label>
        <select
          id="batch"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
          value={selectedBatch}
          onChange={handleBatchChange}
        >
          <option value="">Select Batch</option>
          {batch.map((item , index) => {
            return(
              <option key={index} value={item}>{item}</option>
            )
          })}
        </select>
      </div>
      <button
      type= 'submit'
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg mt-2"
          
        >
          {loading ? "Loading..." : "Upload"}
        </button>
    </div>
            </div>
            
        </form>
    
    
  );
};

export default UploadStudyMaterials;
