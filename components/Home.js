"use client"

import Chart from '@/components/Chart';
import { useState } from 'react';

export default function Home(){
  const [quarterly,setQuarterly] = useState([])
  const [sentiment ,setSentiment] = useState([])
  async function get_data(){
    const quarterlyData = await fetch("/api/quarterly");
    const useableQuarterlyData = await quarterlyData.json();
    setQuarterly(useableQuarterlyData)
    const quarterlySentiment = await fetch("/api/sentiment");
    const useableQuarterlySentiment = await quarterlySentiment.json();
    setSentiment(useableQuarterlySentiment)
  }
  return (
    <div className='flex flex-col justify-center gap-4 p-4'>
      <div className='flex justify-center'>
        <h1 className='font-bold text-3xl text-white'>AI Homework</h1>
      </div>
      <div className='flex justify-between'>
        {quarterly.length > 0?
        <Chart data={quarterly} dataKeys={["quarter","actual"]} labelValues={["Quarter #","Earning Per Share"]}/>
        :
        null
        }
        {sentiment.length > 0?
        <Chart data={sentiment} dataKeys={["month","mspr"]} labelValues={["Month","Sentiment"]}/>
        :
        null
        }
      </div>
      <div className='flex justify-center'>
        <button className='hover:cursor-pointer hover:scale-110 transition duration-500 rounded-lg bg-primary text-white h-10 w-20' onClick={get_data}>Get Data</button>
      </div>
    </div>
  )
}