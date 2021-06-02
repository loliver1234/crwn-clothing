import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IxuZnCwlO1XBlWR5Pj2nHzszvoCQBuZcQ8u1ipGgjnP8PMPchByuv4l8IlbljdJByQUqzwLxdYx3xOL8aJa85Mq00cMW2FrId';
    const onToken = token => {
        console.log(token);
        alert('Payment done');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;