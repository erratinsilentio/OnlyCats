import { createContext, useContext } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const cartOpen = true;

  return (
    <LocalStateProvider value={{ cartOpen }}>{children}</LocalStateProvider>
  );
}

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { useCart, CartStateProvider };
