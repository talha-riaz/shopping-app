import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            className="home__image"/>

            <div className="home__row">
                <Product 
                id="2423323"
                title="Lean Start up"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/31u6QvzNXbL._SY180_.jpg"
                />

                <Product 
                id="2423323"
                title="Lean Start up"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/31u6QvzNXbL._SY180_.jpg"
                />  
            </div>
            
        </div>
    )
}

export default Home
