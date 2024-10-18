import './Product.css'

function Product({title, name, price="1L", features, basics}){
    //console.log(basic.b);
    return(
        <div className="Product">
            <h3>Product Name: {name}</h3>
            <h5>Product Title: {title}</h5>
            <h6>Product Description: Price is {price} 
            Details are as follows - {features}
            </h6>
            <p>{basics}</p>
        </div>
    );
}

export default Product 