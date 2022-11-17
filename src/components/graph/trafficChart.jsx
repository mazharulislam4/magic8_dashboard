import React, { Component } from "react";
import Chart from "react-apexcharts";

class TrafficChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21],
        },
      ],

      options: {
        chart: {
          toolbar: {
            show: false,
          },
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // console.log(chart, w, e)
            },
          },
        },

        colors: [
          "#C7A5FF",
          "#FFDF8B",
          "#ACF2F7",
          "#93A4FF",
          "#FFBCF8",
          "#C1ED9E",
        ],

        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },

        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },

        grid: {
          show: false,
        },

        xaxis: {
          categories: [
            ["Search"],
            ["Direct"],
            ["Social"],
            ["Paid", "refferal"],
            ["mail"],
            ["refferal"],
          ],

          labels: {
            style: {
              colors: [
                "#83879A",
                "#83879A",
                "#83879A",
                "#83879A",
                "#83879A",
                "#83879A",
              ],
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={this.props.chartBox?.current?.width}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TrafficChart;
