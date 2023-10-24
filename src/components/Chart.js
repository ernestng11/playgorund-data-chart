import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const ChartDemo = () => {
  useEffect(() => {
    // Sample data for the line charts
    const chartData1 = {
        chart: {
            styledMode: true
        },
        categories: ['1', '2', '3', '4','5', '6', '7', '8', '9', '10', '11', '12'],
        series: [{
            name: 'Series 2',
            data: [25, 15, 30,150, 350, 200,250, 105, 350, 200,1500, 1200, 2000,2500, 1500, 3500, 4000],
            color:{
                linearGradient: [0, 0, 400],
                stops: [
                    [0, '#C8324B'], // first parameter is a fractions, which part of the background this color will take, 0 is start, 1 is end
                    [0.2, '#C8324B'], 
                    [0.4, '#FEC200'],
                    [0.6, '#FEC200'],
                    [0.8, '#05CD41'],
                    [1, '#05CD41'],
                ]
            },
            marker: {
                enabled: false, // Hide data points
              },
            lineWidth: 1.9
        }],
    };

    // Render the line charts
    Highcharts.chart('chart-container-1', {
        chart: {
            type: 'line',
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y;
            }
        },
        title: {
            text: 'Tweets and Impressions',
            style: {
                color: '#FF5B00',      // Text color
                fontSize: '15px',   // Font size
                fontWeight: 'bold',  // Font weight
                fontFamily: 'Arial', // Font family
            },
            align: 'left', // Horizontal alignment
            verticalAlign: 'top', // Vertical alignment
            x: 20, // X position
            y: 0, // Y position
        },
        xAxis: {
            categories: chartData1.categories,
            labels: {
                style: {
                  fontSize: '12px',  // X-axis label font size
                },
              },
              title: {
                text: 'Date', // X-axis title text
                style: {
                    fontSize: '12px',  // X-axis label font size
                    fontWeight: 'bold', // X-axis title font weight
                },
              }
        },
        yAxis: {
            labels: {
                style: {
                  fontSize: '12px',  // Y-axis label font size
                },
              },
              title: {
                text: 'Count', // Y-axis title text
                style: {
                    fontSize: '12px',  // Y-axis label font size
                    fontWeight: 'bold', // Y-axis title font weight
                },
              }
        },
        series: chartData1.series,
    });

  }, []);

  return (
    
    <div>
      <div id="chart-container-1" style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
};

export default ChartDemo;
