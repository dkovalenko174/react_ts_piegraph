import "./App.css";
// import { PyChart } from "./components/PyCart/PyChart";
import PieChartComponent from "./components/PieChartComponent/PieChartComponent";

function App() {
  // const chartData = [10, 25, 40, 15, 30];
  const chartDataPie = [
    { id: 1, value: 30, color: "blue", label: "Рыба" },
    { id: 2, value: 50, color: "green", label: "Огурцы" },
    { id: 3, value: 20, color: "red", label: "Помидоры" },
    { id: 4, value: 70, color: "orange", label: "Апельсины" },
  ];
  return (
    <>
      <h3>Построение графика Pie Chart</h3>
      {/* <PyChart data={chartData} /> */}
      <PieChartComponent data={chartDataPie} />
    </>
  );
}

export default App;
