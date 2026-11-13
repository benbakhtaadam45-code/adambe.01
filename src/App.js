function product(){
    const pd={ref:`7568`,destination :`pc portable game`,prix:8200,image:`images/photo.png`};

    return(
        <div>
            <img src={pd.image}/>
            <h3>{pd.destination}</h3>
            <h4>{pd.prix}</h4>
            <button>ajouter au panier</button>
        </div>
    )
}
export default product;