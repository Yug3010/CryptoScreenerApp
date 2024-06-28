import React, { useEffect, useState } from 'react'
import './LineChart.css'
import Chart from 'react-google-charts'


const LineChart = ({coinDataChart}) => {

    const [data,setData]=useState(["Date","Prices"]);

    useEffect(()=>{
        let datacpy=[["Date","Prices"]];
        if(coinDataChart.prices) 
            {
                coinDataChart.prices.map((item)=>{
                    datacpy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
                })

                setData(datacpy);
            }   
    },[coinDataChart])

  return (
    <Chart chartType='LineChart' data={data} height="100%" legendToggle />
  )
}

export default LineChart