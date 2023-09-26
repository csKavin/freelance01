

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from "axios";
import moment from 'moment';

function Index1() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    axios.get('https://api.llama.fi/summary/fees/lyra?dataType=dailyFees')
      .then((res) => {
        if (res) {
          setResponse(res?.data?.totalDataChart)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const timestamp = 1671494400; // Unix timestamp
  
  // console.log(formattedDate,"formattedDate");

  let Xval = response?.map((item, index) => {
    const formattedDate = moment.unix(item[0]).format('MMMM Do, h:mm a');
    return formattedDate
  })
  let Yval = response?.map((item, index) => {
    return item[1]
  })


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        // text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = Xval;
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        // label: 'Dataset 2',
        data: Yval.map((item) => { return item }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default Index1;