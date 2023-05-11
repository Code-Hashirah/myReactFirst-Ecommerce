function Products(props){
    return(
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
        
    )
}

export default Products;