import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';


const UploadHomeWork = () => {


  const [loading , setLoading] = useState(false)

  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [batch, setBatch] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState('');

  const [fetchBatch , setFetchBatch] = useState([]);

  const currentUser = useSelector((state) => state.user.currentUser)

  useEffect(() =>{
    axios
    .get("http://localhost:3000/api/student/getBatch")
    .then((res) =>{
      setFetchBatch([...res.data]);
      console.log(batch);
      console.log(res.data);
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])

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


  

  const handleUpload = async(e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post(`http://localhost:3000/api/teacher/assignHomework/${currentUser._id}`  , {subject: subject , details , batch , image:imageFile } , {headers: {'Content-Type': 'multipart/form-data'}})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Success",
        text: "Homework Uploaded Successfully",
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
    setSubject('');
    setDetails('');
    setBatch('');
    setImageFile(null);
    setImageName('');
  };

  return (
    <form className="flex justify-center items-center h-screen" 
    onSubmit={handleUpload}
    encType="multipart/form-data">
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
            {fetchBatch.map((item , index) => {
              return(
                <option 
                key={index}
                value={item}>{item}</option>
              )
            })}
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
          type='submit'
        >
          {loading ? "Loading..." : "Upload Homework"}
        </button>
      </div>
    </form>
  );
};

export default UploadHomeWork;
