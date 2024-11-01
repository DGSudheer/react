import Title from "./Title.jsx";
import Description from "./Description.jsx";
import Price from "./Price.jsx";
import './Product.css'
//import Product from "./Product.jsx"

function ProductList(){
    const f1 = ["8,000 DPI", "5 Programmable Buttons"];
    const f2 = ["Intutive touch surface", "Designed for iPad Pro"];
    const f3 = ["Wireless Mouse 2.4GHz", "Optical Orientation"];
    return(
        <>  
            {/* <Product title="Laptop" name="HP Work" price={70000} features={details}/>
            <Product title="Laptop" name="Apple Macbook Dev" price={100000} features={details}/> */}
            <div className="Product">
                <Title title="Logitech MX Master 3S"/>
                <Description details={f1}/>
                <Price oldPrice={12495} currentPrice={8999}/>
            </div>
            <div className="Product">
                <Title title="Apple Pencil (2nd Gen)"/>
                <Description details={f2}/>
                <Price oldPrice={11900} currentPrice={9090}/>
            </div>
            <div className="Product">
                <Title title="Zebronics Zeb-Transformer"/>
                <Description details={f2}/>
                <Price oldPrice={1599} currentPrice={899}/>
            </div>
            <div className="Product">
                <Title title="Protronics Toad 23 Wireless Mouse"/>
                <Description details={f3}/>
                <Price oldPrice={599} currentPrice={278}/>
            </div>
        </>
    );
}

export default ProductList