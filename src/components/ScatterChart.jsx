import ReactEcharts from "echarts-for-react";

const ScatterChart = ({ data }) => {
  const colorHue = data.map((e) => {
    return [e.Colorint, e.Hue];
  });

  return (
    <ReactEcharts
      option={{
        title: {
          text: "Scatter Plot",
          left: "center",
          top: "0",
          textStyle: {
            fontSize: 20
          },
          show: true
        },
        grid: {
          width: "80%",
          height: "50%",
          containLabel: true
        },
        xAxis: {
          name: "Color Intensity",
          nameLocation: "middle",
          nameTextStyle: {
            padding: [18, 18, 18, 18]
          }
        },
        yAxis: {
          name: "Hue",
          nameLocation: "middle",
          nameTextStyle: {
            padding: [18, 18, 18, 18]
          }
        },
        series: [
          {
            symbolSize: 5,
            data: colorHue,
            type: "scatter"
          }
        ]
      }}
    />
  );
};

export default ScatterChart;
