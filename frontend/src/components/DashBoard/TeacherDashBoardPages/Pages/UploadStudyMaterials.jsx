import { useState } from 'react';

const UploadStudyMaterials = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileName, setPdfFileName] = useState('');
  const [url, setUrl] = useState('');

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
    setPdfFileName(file.name);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handlePdfUpload = () => {
    console.log('Uploading PDF:', pdfFile);
    setPdfFile(null);
    setPdfFileName('');
  };

  const handleUrlUpload = () => {
    console.log('Uploading URL:', url);
    setUrl('');
  };

  return (
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
          <label htmlFor="pdf" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer">
            Choose File
          </label>
          <span className="text-gray-600">{pdfFileName}</span>
        </div>
        {pdfFile && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-2"
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
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter URL here..."
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-2"
          onClick={handleUrlUpload}
        >
          Upload URL
        </button>
      </div>
    </div>
  );
};

export default UploadStudyMaterials;