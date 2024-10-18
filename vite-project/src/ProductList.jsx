import Product from "./Product.jsx"

function ProductList(){
    let details = ["13.6 inch screen", "256 GB SSD", "8GB RAM"];
    let basicInfo = { a :"LCD Screen", b : "Metal Body", c : "Charger Included" };
    return(
        <>  
            <Product title="Laptop" name="HP Personal" price={30000} basics={basicInfo}/>
            <Product title="Laptop" name="Lenovo Gaming" price={60000} basics={{a :"LCD Screen", c : "Charger Included"}}/>
            <Product title="Laptop" name="HP Work" price="70,000" features={["13.6 inch screen", "256 GB SSD", "8GB RAM"]} basics={""}/>
            {/* <Product title="Laptop" name="Apple Macbook Dev" features={details}/> */}
        </>
    );
}

export default ProductList