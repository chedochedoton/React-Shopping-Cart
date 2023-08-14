import react, { useState } from "react";
import ProductItem from "./productItem"
import ProductData from '../API/product.json'


function cart() {

    const [items, setItems] = useState(ProductData)

    const filteringProduct = (category) => {
        const productfilter = ProductData.filter( (eachItem) => {
            return(
                eachItem.category === category
            )
       })

       setItems(productfilter)
    }
    return (
        <>
          <div className="mt-9"> 
          <h2 className="text-2xl font-normal">Shopping Cart</h2>

           <div className="flex flex-row flex-wrap space-x-2 mt-4 menutab pb-4">
            <button onClick={ () => {setItems(ProductData)}}>All</button>
            <button onClick={ () => {filteringProduct('Téléphone')}}>Téléphone</button>
            <button onClick={ () => {filteringProduct('Mèche naturelle')}}>Mèche naturelle</button>
            <button onClick={ () => {filteringProduct('Fauteil')}}>Fauteil</button>
            <button onClick={ () => {filteringProduct('Ordinateur')}}>Ordinateur</button>
            <button onClick={ () => {filteringProduct('Sans fil')}}>Sans fil</button>
            <button onClick={ () => {filteringProduct('Guitar')}}>Guitar</button>
            <button onClick={ () => {filteringProduct('Bracelet')}}>Bracelet</button>
            <button onClick={ () => {filteringProduct('Mouse')}}>Mousse</button>
            <button onClick={ () => {filteringProduct('Keyboard')}}>Keyboard</button>
            </div>


                {/* Cart */}
                <div className="mt-1 overflow-y-scroll cartwrapper">
                    {items.map( (eachItem,index) =>{
                        return(
                            <ProductItem
                            key={eachItem.id}
                            image={eachItem.iamge}
                            title={eachItem.title}
                            description={eachItem.description}
                            color={eachItem.color}
                            category={eachItem.category}
                            price={eachItem.price}
                            />
                        )
                    })}
                </div>
            </div>
        
        </>
    );
}

export default Cart;