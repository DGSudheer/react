function Description({details}){
    return(
        <div className="Description">
            <ul>
                { details.map( (x) => <li>{x}</li> ) }
            </ul>
        </div>
    )
}

export default Description