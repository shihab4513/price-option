
import React from 'react'
import PriceOption from '../PriceOption/PriceOption';
const priceOptions=[
  { "id": 1, "name": "Basic Plan", "price": 29.99, "features": ["Access to gym equipment", "Locker access", "Open gym hours"] },
  { "id": 2, "name": "Standard Plan", "price": 49.99, "features": ["Access to gym equipment", "Locker access", "Open gym hours", "Group fitness classes", "One free personal training session"] },
  { "id": 3, "name": "Premium Plan", "price": 79.99, "features": ["Access to gym equipment", "Locker access", "Open gym hours", "Unlimited group fitness classes", "Monthly personal training sessions", "Access to sauna and spa"] },
  { "id": 4, "name": "VIP Plan", "price": 129.99, "features": ["Access to gym equipment", "Locker access", "Open gym hours", "Unlimited group fitness classes", "Weekly personal training sessions", "Access to sauna and spa", "Nutrition consultation", "Priority support and booking"] }
];

const PriceOptions = () => {
  return (
    <div>
      <h2>Best Prices in the town</h2>
      {
        priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
      }
    </div>
  )
}

export default PriceOptions