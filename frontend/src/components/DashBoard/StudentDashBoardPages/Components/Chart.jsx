import { PieChart } from "@mui/x-charts";

export default function Chart() {
  const backendData = {
    absentPercentage: 20,
  };
  const days = Array.from({ length: 100 }, (_, i) => i + 1);
  const totalDays = days.length;
  const absentPercentage = backendData.absentPercentage;
  const presentPercentage = 100 - absentPercentage;

  // Calculate total present and absent days
  const presentDays = Math.round((presentPercentage / 100) * totalDays);
  const absentDays = totalDays - presentDays;

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
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[100%] w-[80%] flex justify-evenly items-center">
        <div className="text-2xl font-bold text-[#5c5c5c]">
          <div>
            Total Working Days: <span>{totalDays}</span> Days
          </div>
          <div className="text-green-600">
            Present: <span>{presentDays}</span> Days
          </div>
          <div className="text-[#e0771b]">
            Absent: <span>{absentDays}</span> Days
          </div>
        </div>
        <div style={{ width: "30%", height: "43%" }}>
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
