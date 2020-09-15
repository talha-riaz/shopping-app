import React from 'react';
import {useStateValue} from './StateProvider';
//Push

function Checkout() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <img 
            className="checkout__ad"
            src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"
            alt=""
            />
        </div>
    )
}

export default Checkout
