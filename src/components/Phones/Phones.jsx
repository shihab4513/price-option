import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
const [phones,setPhones]=useState([]);
useEffect(()=>{
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>setPhones(data.data))
    // above code is for normal way of fetching, below code will say how to fetch using axios
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
        const phoneData=data.data.data;
        // basically what we have done in below is splitting 'slug' variable data and adding last part as price by parsing it into int. and in name variable we have added 'phone.phone_name. what it has done is it created a new obj that has only phone_name and price and that data is set as phone data' 
        const phoneWithFakeData=phoneData.map(phone=>{
            const obj={
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
            }
            return obj;
        })
        // console.log(phoneWithFakeData);
        setPhones(phoneWithFakeData);
    })
},[])
    return (
    <div>
        <h2 className='text-5xl'>Phones: {phones.length}</h2>
        <BarChart width={1400} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  )
}

export default Phones