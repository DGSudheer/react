import './Product.css'

function Product({title, name, features, price="100000"}){
    //console.log(basic.b);
    //const l = features.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product">
            <h3>Product Name: {name}</h3>
            <h5>Product Title: {title}</h5>
            <h6>Product Description: Price is {price} <br />
            Details are as follows - {features.map((feature) => <li>{feature}</li>)}
            <br />
            {price>65000 ? "Discount of 5%" : <a href="/">Get Other Offers</a>}
            </h6>
        </div>
    );
}

export default Product 