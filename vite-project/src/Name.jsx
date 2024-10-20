function Name({userName, textColor}){
    return (
        <div>
            <h4 style={{color: textColor }}>Hello {userName}</h4>  
        </div>
    );
}

export default Name