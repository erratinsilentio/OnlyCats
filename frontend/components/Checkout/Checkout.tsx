import { CardElement, Elements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import styled from "styled-components";
import nProgress from "nprogress";

const Container = styled.div`
  outline: 1px solid black;
  margin-top: 10vh;
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: space-evenly;

  .order {
    width: 48vw;
  }
`;

const CheckoutFormStyled = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  width: 48vw;

  button {
    background-color: var(--pall3);
    border: 0px;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: var(--pall2);
    }
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    nProgress.start();
  };

  return (
    <Container>
      <div className="order">
        <p>order</p>
      </div>
      <CheckoutFormStyled submit={handleSubmit}>
        <CardElement />
        <button type="button">SUBMIT</button>
      </CheckoutFormStyled>
    </Container>
  );
}

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}
