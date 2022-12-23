function Panier () {

    const products = ["peperoni", "chèvre miel"];

    return (
        <div className="panier">
        <h2>Panier</h2>
        {products.length>0 && (
             <div>
             <h3>Products List :</h3>
             {products.map((product) => (
                 <p>{product}</p>
            )) }
         </div>
        )}
    </div>
    )

}

export default Panier;