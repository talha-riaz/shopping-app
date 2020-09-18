import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css'
import Subtotal from './Subtotal'


function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img 
                className="checkout__ad"
                src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"
                alt=""
                />
                <div className='checkout__title'>
                    <h2>Your shopping basket</h2>

                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}

                </div>
            </div>

            <div className='checkout__right'>
                    <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
