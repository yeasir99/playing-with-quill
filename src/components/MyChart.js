import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const MyChart = ({ data }) => {
  useEffect(() => {
    // Get the context of the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Chart.js configuration
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: ctx =>
              'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
          },
        },
      },
    };

    // Create a new chart instance
    const myChart = new Chart(ctx, config);

    // Cleanup function
    return () => {
      // Destroy the chart when the component unmounts
      myChart.destroy();
    };
  }, [data]); // Re-run the effect when the data prop changes

  return <canvas id="myChart" width="400" height="200"></canvas>;
};

export default MyChart;
