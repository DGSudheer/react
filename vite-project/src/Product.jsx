import './Product.css'

function Product({title, name, price="1L"}){
    // console.log(props);
    return(
        <div className="Product">
            <h3>Product Name: {name}</h3>
            <h5>Product Title: {title}</h5>
            <h6>Product Description: Price is {price}</h6>
        </div>
    );
}

export default Product 