import { useState } from 'react';

const UploadAttendance = () => {
  const [batch, setBatch] = useState('');
  const [student, setStudent] = useState('');
  const [presentCount, setPresentCount] = useState('');
  const [absentCount, setAbsentCount] = useState('');

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleStudentChange = (e) => {
    setStudent(e.target.value);
  };

  const handlePresentCountChange = (e) => {
    setPresentCount(e.target.value);
  };

  const handleAbsentCountChange = (e) => {
    setAbsentCount(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Batch:', batch);
    console.log('Student:', student);
    console.log('Present Count:', presentCount);
    console.log('Absent Count:', absentCount);
    setBatch('');
    setStudent('');
    setPresentCount('');
    setAbsentCount('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-4">Upload Attendance</h1>
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
          <label htmlFor="student" className="block mb-2 text-lg font-medium">Student:</label>
          <select
            id="student"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={student}
            onChange={handleStudentChange}
          >
            <option value="">Select Student</option>
            <option value="Student 1">Student 1</option>
            <option value="Student 2">Student 2</option>
            <option value="Student 3">Student 3</option>
            <option value="Student 4">Student 4</option>
            {/* Add more students as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="presentCount" className="block mb-2 text-lg font-medium">Present Count:</label>
          <input
            type="number"
            id="presentCount"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={presentCount}
            onChange={handlePresentCountChange}
            placeholder="Enter Present Count"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="absentCount" className="block mb-2 text-lg font-medium">Absent Count:</label>
          <input
            type="number"
            id="absentCount"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
            value={absentCount}
            onChange={handleAbsentCountChange}
            placeholder="Enter Absent Count"
          />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleSubmit}
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default UploadAttendance;
