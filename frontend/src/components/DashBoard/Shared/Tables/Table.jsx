import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'teacherId', headerName: 'Teacher ID', width: 130 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'batchId', headerName: 'Batch ID', width: 130   }
];

export default function Table() {
  const ConvertToDataGrid = (data) => {
    return data.map((item, index) => {
      return {
        id: index + 1,
        firstName: item.firstname,
        lastName: item.lastname,
        teacherId: item.teacherID,
        email: item.email,
        batchId: item.batch.length === 0 ? "empty" : item.batch[0].batch
      }; 
    });
  };

  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/teacher/getTeacher");
        console.log("Data from API:", res.data);
        const convertedData = ConvertToDataGrid(res.data);
        console.log("Converted data:", convertedData);
        setResponse(convertedData);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    
    fetchTeachers();
  }, []);
  
  return (<>
   <div className=" w-[100%] h-[10%] bg-black "> hello</div>
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={response}
        columns={columns}
        pageSize={15}
        checkboxSelection
        onRowSelectionModelChange={(data) => {
          console.log("Selected rows:", data);
        }}
      />
    </div>
  </>
   
  );
}
