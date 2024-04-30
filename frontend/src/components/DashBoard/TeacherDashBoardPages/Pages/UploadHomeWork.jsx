import { useState } from 'react';

const UploadHomeWork = () => {
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [batch, setBatch] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageName(file.name);
  };

  const handleUpload = () => {
    console.log('Subject:', subject);
    console.log('Details:', details);
    console.log('Batch:', batch);
    console.log('Image:', imageFile);
    setSubject('');
    setDetails('');
    setBatch('');
    setImageFile(null);
    setImageName('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-4">Upload Homework</h1>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 text-lg font-medium">Subject:</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter subject..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block mb-2 text-lg font-medium">Details:</label>
          <textarea
            id="details"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={details}
            onChange={handleDetailsChange}
            placeholder="Enter details..."
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="batch" className="block mb-2 text-lg font-medium">Batch:</label>
          <select
            id="batch"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={batch}
            onChange={handleBatchChange}
          >
            <option value="">Select Batch</option>
            <option value="Batch A">Batch A</option>
            <option value="Batch B">Batch B</option>
            <option value="Batch C">Batch C</option>
            <option value="Batch D">Batch D</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-lg font-medium">Upload Image:</label>
          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png"
              className="hidden"
              onChange={handleImageChange}
            />
            <label htmlFor="image" className="bg-orange-400 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer">
              Choose Image
            </label>
            <span className="text-gray-600">{imageName}</span>
          </div>
        </div>
        <button
          className="bg-orange-500 mt-9 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleUpload}
        >
          Upload Homework
        </button>
      </div>
    </div>
  );
};

export default UploadHomeWork;
