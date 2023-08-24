import React from "react";

interface Slice {
  id: number;
  value: number;
  color: string;
  label: string; // Добавляем label в типизацию
}

interface PieChartProps {
  data: Slice[];
}

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
  const total = data.reduce((sum, value) => sum + value.value, 0);

  let startAngle = 0;
  const chartRadius = 100;
  const centerX = 150;
  const centerY = 150;

  return (
    <div className="pie-chart-container">
      <svg width={450} height={300}>
        {data.map(slice => {
          const sliceAngle = (slice.value / total) * 360;
          const endAngle = startAngle + sliceAngle;

          const startAngleRad = (startAngle - 90) * (Math.PI / 180);
          const endAngleRad = (endAngle - 90) * (Math.PI / 180);

          const startX = centerX + chartRadius * Math.cos(startAngleRad);
          const startY = centerY + chartRadius * Math.sin(startAngleRad);

          const endX = centerX + chartRadius * Math.cos(endAngleRad);
          const endY = centerY + chartRadius * Math.sin(endAngleRad);

          const largeArcFlag = sliceAngle <= 180 ? "0" : "1";

          startAngle = endAngle;

          return (
            <g key={slice.id}>
              <path
                d={`M ${centerX} ${centerY} L ${startX} ${startY} A ${chartRadius} ${chartRadius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                fill={slice.color}
              />
              <text
                x={chartRadius * 2 + 40}
                y={slice.id * 20}
                fill={slice.color}>
                {slice.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PieChartComponent;
