import { useState } from 'react';

const UploadStudyMaterials = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileName, setPdfFileName] = useState('');
  const [url, setUrl] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
    setPdfFileName(file.name);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handlePdfUpload = () => {
    console.log('Uploading PDF:', pdfFile, 'for batch:', selectedBatch);
    setPdfFile(null);
    setPdfFileName('');
  };

  const handleUrlUpload = () => {
    console.log('Uploading URL:', url, 'for batch:', selectedBatch);
    setUrl('');
  };

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  return (
    <>
        <div className="h-[100dvh] w-[100%] flex justify-center items-center">
            <div className="w-[40%]">
            <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upload Study Material</h1>
      <div className="mb-4">
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
        {pdfFile && (
          <button
            className="bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg"
            onClick={handlePdfUpload}
          >
            Upload PDF
          </button>
        )}
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
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg mt-2"
          onClick={handleUrlUpload}
        >
          Upload URL
        </button>
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
          <option value="Batch A">Batch A</option>
          <option value="Batch B">Batch B</option>
          <option value="Batch C">Batch C</option>
          <option value="Batch D">Batch D</option>
        </select>
      </div>
    </div>
            </div>
        </div>
    
    </>
  );
};

export default UploadStudyMaterials;
