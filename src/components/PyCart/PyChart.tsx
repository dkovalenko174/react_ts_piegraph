export const PyChart = ({ data }) => {
  const maxValue = Math.max(...data);
  const chartHeight = 300;
  const barWith = 30;
  const gap = 10;

  return (
    <svg>
      {data.map((value, index) => (
        <rect
          key={index}
          x={index * (barWith + gap)}
          y={chartHeight - (value / maxValue) * chartHeight}
          width={barWith}
          height={(value / maxValue) * chartHeight}
          fill="blue"
        />
      ))}
    </svg>
  );
};
