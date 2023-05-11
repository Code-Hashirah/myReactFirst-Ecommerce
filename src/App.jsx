import React from "react"
import './App.css'
import Products from './Products'

function App() {
 const products =[
  {
    title:"Shoe", img:"", price:34, discount:1.5
  },
{
  title:"Bag",img:"", price:15, discount:2
},
{
  title:"Headset", img:"",price:20, discount:2.03
},
{
  title:"Bicycle", img:"", price:200, discount:5
},
{
  title:"Suit", img:"", price:64, discount:1.5
},
{
title:"Helmet",img:"", price:6, discount:2.5
},
{
title:"Television", img:"",price:70, discount:5.15
},
{
title:"Mobile Phone", img:"", price:70, discount:9.5
},
{
  title:"Desktop PC", img:"", price:80, discount:1.5
},
{
title:"Laptop PC",img:"", price:15, discount:2
},
{
title:"Digital Camera", img:"",price:120, discount:12.03
},
{
title:"Hijab", img:"", price:20, discount:2
}
 ]

  return (
    <main className="main">
      {
        (products.length >0)?
        products.map((value, index)=>{
          return(
            <div key={index} className="product">
              < Products title={value.title} img={value.img} price={value.price} discount={value.discount}/> 
            </div>
          )
        }):
        <h2>No Products available</h2>
      }
    </main>
  )
}

export default App
