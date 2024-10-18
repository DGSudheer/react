import Product from "./Product.jsx"

function ProductList(){
    return(
        <>  
            <Product title="Laptop" name="HP Personal" price={60000}/>
            <Product title="Laptop" name="HP Work" price="70,000"/>
            <Product title="Laptop" name="Apple Macbook Dev"/>
        </>
    );
}

export default ProductList
