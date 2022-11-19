import React from "react";
import Chart from "react-apexcharts";
// import graphbg from '../../assets/image/graphbg.svg';
function RevenueChart({ width, height }) {
  return (
    <div className="revenue-chart">
      <Chart
        type="area"
        width={width}
        height={height}
        series={[
          {
            name: "revenue",
            data: [
              {
                x: 2010,
                y: [200, 210, 200],
              },
              {
                x: 2011,
                y: [190, 195, 210],
              },
              {
                x: 2012,
                y: 210,
              },
              {
                x: 2013,
                y: 230,
              },
              {
                x: 2014,
                y: 240,
              },
              {
                x: 2015,
                y: 235,
              },
              {
                x: 2016,
                y: 250,
              },
              {
                x: 2017,
                y: 260,
              },
              {
                x: 2018,
                y: 245,
              },
              {
                x: 2019,
                y: 280,
              },
              {
                x: 2020,
                y: 290,
              },
              {
                x: 2021,
                y: 275,
              },

              {
                x: 2022,
                y: 300,
              },
            ],
          },
        ]}
        options={{
          chart: {
            foreColor: '#c9aaff',
            toolbar: {
              show: false,
            },
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },

            zoom:{
              enabled:false,
            }
          },
          colors: ["#8646EE"],
          fill: {
            colors: undefined,
            opacity: 0,
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined,
              inverseColors: false,
              opacityFrom: 0,
              opacityTo: 0,
              stops: [0, 50, 100],
              colorStops: [],
            },
          },
          grid: {
            show: true,
            strokeDashArray: 4,
            position: "back",
          },
          xaxis: {
            type: "datetime",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: true,
              rotateAlways: false,
              hideOverlappingLabels: true,
              showDuplicates: false,
              trim: false,
              minHeight: undefined,
              maxHeight: 120,
              style: {
                colors: ["#c9aaff"],
                fontSize: "12px",
                fontFamily: "poppins",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },

          tooltip: {
            x: {
              format: "yyyy",
            },
            fixed: {
              enabled: false,
              position: "topRight",
            },
          },

          labels: ["2019", "2020", "2021", "2022"],
          yaxis: {
            show: false,
            labels: {
              show: false,
              type: "datetime",
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 3,
            dashArray: 0,
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}

export default RevenueChart;
