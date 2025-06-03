"use client"

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

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
        <ResponsiveContainer width="50%" height={300}>
          <BarChart  data={quarterly}>
            <XAxis dataKey="quarter" label={{value:"Quarter #",offset:-5,position: 'insideBottom'}}/>
            <YAxis dataKey="actual" label={{value:"Earning Per Share",angle: -90,offset: 5,position: 'insideLeft'}}/>
            <Tooltip />
            <Bar type="monotone" dataKey="actual" fill="#ffffff"/>
          </BarChart >
        </ResponsiveContainer>
        :
        null
        }
        {sentiment.length > 0?
        <ResponsiveContainer width="50%" height={300}>
          <BarChart  data={sentiment}>
            <XAxis dataKey="month" label={{value:"Month",offset:-5,position: 'insideBottom'}}/>
            <YAxis dataKey="mspr" label={{value:"Sentiment",angle: -90,offset: 5,position: 'insideLeft'}}/>
            <Tooltip />
            <Bar type="monotone" dataKey="mspr" fill="#ffffff"/>
          </BarChart >
        </ResponsiveContainer>
        :
        null
        }
      </div>
      <div className='flex justify-center'>
        <button className='hover:cursor-pointer hover:scale-110 transition duration-500 rounded-lg bg-white text-black h-10 w-20' onClick={get_data}>Get Data</button>
      </div>
    </div>
  )
}