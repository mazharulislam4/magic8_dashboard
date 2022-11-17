import React from "react";
import ReactApexChart from "react-apexcharts";

class RevenueChart extends React.Component {
  constructor(props) {
    super(props);

    this.height = this.props.height;
    this.width = this.props.width;

    this.state = {
      series: [
        {
          name: "Magic8",
          data: [900.55, 5000.54, 4000.0, 3400.0, 2440.3, 6500.0, 9400.0],
        },
      ],
      options: {
        grid: {
          show: false,
        },
        chart: {
          toolbar: {
            show: false,
          },
          type: "area",
          height: this.height,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        labels: [
          "2018-09-19T01:30:00.000Z",
          "2019-09-19T02:30:00.000Z",
          "2020-09-19T03:30:00.000Z",
          "2021-09-19T04:30:00.000Z",
          "2022-09-19T05:30:00.000Z",
          "2023-09-19T06:30:00.000Z",
          "2024-09-19T06:30:00.000Z",
        ],
        xaxis: {
          type: "datetime",
          show: false,
        },
        yaxis: {
          opposite: true,
          show: false,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={this.height}
          width = {this.width}
        />
      </div>
    );
  }
}

export default RevenueChart;
