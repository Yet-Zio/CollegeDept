import { PieChart } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Chart() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [response, setResponse] = useState(null);
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/student/getAttendance/${currentUser.studentID}/${currentUser.batch}`);
        setResponse(res.data);
        setBackendData({
          absentPercentage: res.data.absentPercentage,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchAttendance();
  }, [currentUser.studentID, currentUser.batch]);

  const days = Array.from({ length: 100 }, (_, i) => i + 1);
  const totalDays = days.length;
  const absentPercentage = backendData.absentPercentage;
  const presentPercentage = 100 - absentPercentage;

  const pieChartData = [
    { name: "Absent", value: absentPercentage, color: "#e0771b" },
    { name: "Present", value: presentPercentage, color: "#34eb5e" },
  ];

  const calculateAngles = (data) => {
    let startAngle = -90;
    return data.map((item) => {
      const endAngle = startAngle + (item.value / 100) * 360;
      const slice = { ...item, startAngle, endAngle };
      startAngle = endAngle;
      return slice;
    });
  };

  const adjustedData = calculateAngles(pieChartData);

  return (
    <div className="h-screen w-screen flex justify-start items-center">
      <div className="h-[100%] w-[80%] flex justify-evenly items-center">
        <div className="text-2xl font-bold text-[#5c5c5c]">
          {response && (
            <>
              <div>
                Total Working Days: <span>{response.total}</span> Days
              </div>
              <div className="text-green-600">
                Present: <span>{response.present}</span> Days
              </div>
              <div className="text-[#e0771b]">
                Absent: <span>{response.absent}</span> Days
              </div>
            </>
          )}
        </div>
        <div style={{ width: "40%", height: "43%" }}>
          <PieChart
            series={[
              {
                data: adjustedData,
                innerRadius: 50,
                outerRadius: 200,
                paddingAngle: 5,
                cornerRadius: 5,
                cx: 200,
                cy: 200,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 60,
                  additionalRadius: -60,
                  color: "gray",
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
