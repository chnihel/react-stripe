import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const stripePromise=loadStripe('pk_test_51Q18tbH1pnhBHZMNOl0seOpCUNgnbSv7I9jSGot2atjFf7mAJ9pepq9Y7gZlb6getIoRt9A6hlvNqZnH6AAE8UdA00jMRA7WMW')

const Payment = () => {
    const navigate=useNavigate()
    const handleCheckOut=async()=>{
        const stripe=await stripePromise;
        try {
            const response=await fetch('http://localhost:3000/payment/create-checkout-session',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const session=await response.json()
            if(session.id){
                const result=await stripe.redirectToCheckout({sessionId:session.id});
               
                if(result.error){
                   alert(result.error.message)
                   
                }
            }else{
                console.error('Failed to create session:', session)
            }
        } catch (error) {
            console.error('Error:', error);

        }
    }
    
  return (
    <div
    style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
    }}
  >
    <button
      id="checkout-button"
      onClick={handleCheckOut}
      style={{
        backgroundColor: '#6772E5',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#555ABF')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#6772E5')}
    >
      Payer 20$
    </button>
  </div>
  )
}

export default Payment
