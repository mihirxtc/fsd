import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

let foodItems = [
  {
    title: "Classic Veg Burger",
    imageUrl: "https://source.unsplash.com/1600x1000/?burger",
    price: 150,
    desc: "A delicious veggie burger with lettuce, tomato, onion, and special sauce.",
    type: "veg",
    ratings: 4.5,
    votes: 120
  },
  {
    title: "Spicy Chicken Burger",
    imageUrl: "https://source.unsplash.com/1600x1000/?chicken-burger",
    price: 180,
    desc: "Juicy grilled chicken breast with spicy sauce, lettuce, and pickles.",
    type: "nonveg",
    ratings: 4.2,
    votes: 150
  },
  {
    title: "Paneer Tikka Wrap",
    imageUrl: "https://source.unsplash.com/1600x1000/?paneer",
    price: 200,
    desc: "Paneer tikka wrapped in a soft tortilla with onions, peppers, and mint chutney.",
    type: "veg",
    ratings: 4.7,
    votes: 110
  },
  {
    title: "BBQ Pulled Pork Sandwich",
    imageUrl: "https://source.unsplash.com/1600x1000/?sandwich",
    price: 220,
    desc: "Tender pulled pork smothered in tangy BBQ sauce on a toasted bun.",
    type: "nonveg",
    ratings: 4.6,
    votes: 130
  },
  {
    title: "Margherita Pizza",
    imageUrl: "https://source.unsplash.com/1600x1000/?pizza",
    price: 250,
    desc: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
    type: "veg",
    ratings: 4.3,
    votes: 200
  },
  {
    title: "Pepperoni Pizza",
    imageUrl: "https://source.unsplash.com/1600x1000/?chicken-pizza",
    price: 280,
    desc: "Pizza topped with spicy pepperoni slices, tomato sauce, and melted cheese.",
    type: "nonveg",
    ratings: 4.8,
    votes: 180
  },
  {
    title: "Vegetable Biryani",
    imageUrl: "https://source.unsplash.com/1600x1000/?rice",
    price: 220,
    desc: "Aromatic rice cooked with mixed vegetables, spices, and herbs.",
    type: "veg",
    ratings: 4.4,
    votes: 150
  },
  {
    title: "Steamed Momo's",
    imageUrl: "https://source.unsplash.com/1600x1000/?momo",
    price: 280,
    desc: "Special MOMO's pieces cooked in a rich, creamy tomato-based sauce.",
    type: "veg",
    ratings: 4.6,
    votes: 190
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      {
        foodItems.map((item) => {
          return <Card title={item.title} price={item.price} img={item.imageUrl} ratings={item.ratings} votes={item.votes} desc={item.desc} type={item.type}/>
        })
      }
    </div>
  </React.StrictMode>
)
