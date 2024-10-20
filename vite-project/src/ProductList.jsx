import Product from "./Product.jsx"

function ProductList(){
    let details = ["13.6 inch screen", "256 GB SSD", "8GB RAM"];
    return(
        <>  
            <Product title="Laptop" name="HP Work" price={70000} features={details}/>
            <Product title="Laptop" name="Apple Macbook Dev" price={100000} features={details}/>
        </>
    );
}

export default ProductList