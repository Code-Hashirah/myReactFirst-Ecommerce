import  React from 'react'
import './App.css'
function Products(props){
    return(
        <div>
              
              <section>
        <h3>{props.title}</h3>
        <img src={props.img} alt="img" />
        Price: {props.price} <br />
        Percentage Discount {props.discount} <br />
        <div>
            <a href="" className="button">Details</a>
            <button className="button">Buy</button>
        </div>
        </section>
        </div>
       
        
    )
}

export default Products;