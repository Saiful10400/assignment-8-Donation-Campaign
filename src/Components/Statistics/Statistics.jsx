import { PieChart, Pie, Cell } from "recharts";

const COLORS = [ "#FF444A","#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  // local storage data load.
  let localData = localStorage.getItem("cart");
  if (localData) {
    localData = JSON.parse(localData);
    localData = localData.length;
  } else {
    localData = [];
  }

  const data = [
      { name: "your donate", value: localData },
      { name: "total donate", value: 12 },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl">
        <PieChart height={700} width={700}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center items-center gap-14">
        <div className="flex justify-center items-center gap-4">
          <span className="text-lg font-normal">Your Donation</span> <div className="w-28 rounded-sm h-3 bg-[#FF444A]"> </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span className="text-lg font-normal">Total Donation</span> <div className="w-28 rounded-sm h-3 bg-[#00C49F]"> </div>
        </div>
        
      </div>
    </div>
  );
};

export default Statistics;
