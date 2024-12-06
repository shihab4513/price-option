import React from 'react'
import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const studentsMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 89 },
        { id: 2, name: "Bob", math: 85, physics: 78, chemistry: 82 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
        { id: 4, name: "Diana", math: 74, physics: 81, chemistry: 77 },
        { id: 5, name: "Ethan", math: 88, physics: 79, chemistry: 85 },
        { id: 6, name: "Fiona", math: 91, physics: 92, chemistry: 94 },
        { id: 7, name: "George", math: 76, physics: 74, chemistry: 80 },
        { id: 8, name: "Hannah", math: 82, physics: 84, chemistry: 83 },
        { id: 9, name: "Ivy", math: 95, physics: 90, chemistry: 92 },
        { id: 10, name: "Jack", math: 89, physics: 86, chemistry: 88 }
      ];
  return (
    <div>
        <LChart width={500} height={400} data={studentsMarksData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'physics'} stroke='yellow'></Line>
            <Line dataKey={'chemistry'} stroke='green'></Line>
        </LChart>
    </div>
  )
}

export default LineChart