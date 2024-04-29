
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


const teachers = [
  { id: 1, firstName: 'John', lastName: 'Doe', teacherId: 1001, email: 'john.doe@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', teacherId: 1002, email: 'jane.smith@example.com' },
  { id: 3, firstName: 'Michael', lastName: 'Johnson', teacherId: 1003, email: 'michael.johnson@example.com' },
  { id: 4, firstName: 'Emily', lastName: 'Williams', teacherId: 1004, email: 'emily.williams@example.com' },
  { id: 5, firstName: 'James', lastName: 'Brown', teacherId: 1005, email: 'james.brown@example.com' },
  { id: 6, firstName: 'Sarah', lastName: 'Miller', teacherId: 1006, email: 'sarah.miller@example.com' },
  { id: 7, firstName: 'David', lastName: 'Taylor', teacherId: 1007, email: 'david.taylor@example.com' },
  { id: 8, firstName: 'Emma', lastName: 'Anderson', teacherId: 1008, email: 'emma.anderson@example.com' },
  { id: 9, firstName: 'Daniel', lastName: 'Thomas', teacherId: 1009, email: 'daniel.thomas@example.com' },
  { id: 10, firstName: 'Olivia', lastName: 'Jackson', teacherId: 1010, email: 'olivia.jackson@example.com' },
  { id: 11, firstName: 'Matthew', lastName: 'White', teacherId: 1011, email: 'matthew.white@example.com' },
  { id: 12, firstName: 'Ava', lastName: 'Harris', teacherId: 1012, email: 'ava.harris@example.com' },
  { id: 13, firstName: 'Christopher', lastName: 'Martin', teacherId: 1013, email: 'christopher.martin@example.com' },
  { id: 14, firstName: 'Sophia', lastName: 'Thompson', teacherId: 1014, email: 'sophia.thompson@example.com' },
  { id: 15, firstName: 'Andrew', lastName: 'Garcia', teacherId: 1015, email: 'andrew.garcia@example.com' },
  { id: 16, firstName: 'Isabella', lastName: 'Martinez', teacherId: 1016, email: 'isabella.martinez@example.com' },
  { id: 17, firstName: 'William', lastName: 'Robinson', teacherId: 1017, email: 'william.robinson@example.com' },
  { id: 18, firstName: 'Mia', lastName: 'Clark', teacherId: 1018, email: 'mia.clark@example.com' },
  { id: 19, firstName: 'Ethan', lastName: 'Rodriguez', teacherId: 1019, email: 'ethan.rodriguez@example.com' },
  { id: 20, firstName: 'Amelia', lastName: 'Lewis', teacherId: 1020, email: 'amelia.lewis@example.com' },
  { id: 21, firstName: 'James', lastName: 'Lee', teacherId: 1021, email: 'james.lee@example.com' },
  { id: 22, firstName: 'Charlotte', lastName: 'Walker', teacherId: 1022, email: 'charlotte.walker@example.com' },
  { id: 23, firstName: 'Alexander', lastName: 'Hall', teacherId: 1023, email: 'alexander.hall@example.com' },
  { id: 24, firstName: 'Ella', lastName: 'Allen', teacherId: 1024, email: 'ella.allen@example.com' },
  { id: 25, firstName: 'Benjamin', lastName: 'Young', teacherId: 1025, email: 'benjamin.young@example.com' },
  { id: 26, firstName: 'Madison', lastName: 'Hernandez', teacherId: 1026, email: 'madison.hernandez@example.com' },
  { id: 27, firstName: 'Liam', lastName: 'King', teacherId: 1027, email: 'liam.king@example.com' },
  { id: 28, firstName: 'Chloe', lastName: 'Wright', teacherId: 1028, email: 'chloe.wright@example.com' },
  { id: 29, firstName: 'Henry', lastName: 'Lopez', teacherId: 1029, email: 'henry.lopez@example.com' },
  { id: 30, firstName: 'Avery', lastName: 'Hill', teacherId: 1030, email: 'avery.hill@example.com' },
];
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'teacherId', headerName: 'Teacher ID', width: 130 },
  { field: 'email', headerName: 'Email', width: 250 },
];
const StaffTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
    console.log(newSelection); // Log the new selection directly
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={teachers}
        columns={columns}
        pageSize={15}
        checkboxSelection
        onRowSelectionModelChange={(data)=>{
          console.log(data)
        }}
      />
    </div>
  );
}


export default StaffTable;