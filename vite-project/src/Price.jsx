function Price({oldPrice, currentPrice}){
    let styles = {
        backgroundColor : 'yellow'
    };
    return(
        <div className="Price" style={styles}> 
            <p><sup>Rs</sup><s>{oldPrice} </s> &ensp; <sup>Rs</sup><b>{currentPrice}</b></p>
        </div>
    )
}

export default Price