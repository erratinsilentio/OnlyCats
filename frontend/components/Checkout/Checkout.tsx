import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import styled from "styled-components";
import nProgress from "nprogress";
import { useUser } from "../../utils/useUser";
import nameFormat from "../../utils/nameFormatter";

const Container = styled.div`
  margin-top: 10vh;
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: center;

  .order {
    font-family: "Courier New", Courier, monospace;
    width: 48vw;
    border: 15px solid var(--pall3);
    display: flex;
    align-items: flex-start;
  }

  p {
    font-size: 2rem;
    padding-left: 1rem;
    line-height: 7.5vh;
    width: 46vw;
    height: 7.5vh;
    outline: 1px solid var(--pall3);
  }
`;

const CheckoutFormStyled = styled.form`
  border: 1px solid var(--pall3);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  width: 48vw;

  button {
    background-color: var(--pall3);
    border: 0px;
    color: white;
    height: 5vh;
    width: 45vw;
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
  const elements = useElements();

  const me = useUser();
  const { cart } = me;
  const { name } = me;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    nProgress.start();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod, error);

    if (error) {
      setError(error);
    }

    nProgress.done();
  };

  return (
    <Container>
      <div className="order">
        <p>{nameFormat(name)}'s Cart</p>
      </div>
      <CheckoutFormStyled onSubmit={handleSubmit}>
        {error && <p>{error.message}</p>}
        <CardElement id="card" />
        <button type="submit" value="submit">
          SUBMIT
        </button>
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
