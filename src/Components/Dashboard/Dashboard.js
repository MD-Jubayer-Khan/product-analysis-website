import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart'>
           <div className="chartOne">
               <LineChart width={600} height={500} data={data}>
                   <Line dataKey={'month'}></Line>
                   <Line dataKey={'investment'}></Line>
                   <Line dataKey={'sell'}></Line>
                   <Line dataKey={'revenue'}></Line>
                   <XAxis dataKey={'month'}></XAxis>
                   <Tooltip></Tooltip>
                   <YAxis></YAxis>
               </LineChart>
           </div>
           <div className="chartTwo">
           <ComposedChart width={730} height={550} data={data}>
             <XAxis dataKey="month" />
             <YAxis />
             <Tooltip />
             <Legend />
             <CartesianGrid stroke="#f5f5f5" />
             <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
             <Bar dataKey="sell" barSize={20} fill="#413ea0" />
             <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </ComposedChart>
           </div>
        </div>
    );
};

export default Dashboard;