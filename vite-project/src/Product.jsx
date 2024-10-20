import './Product.css'

function Product({title, name, features, price}){
    return(
        <div className="Product">
            <h3>Product Name: {name}</h3>
            <h5>Product Title: {title}</h5>
            <h6>Product Description: Price is {price} <br />
            <ul> Details are as follows - {features.map((feature) => <li key={feature}>{feature}</li>)} </ul>
            <br />
            {price>65000 ? "Discount of 5%" : <a href="/">Get Other Offers</a>}
            </h6>
        </div>
    );
}

export default Product 