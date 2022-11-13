import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({ options }) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
